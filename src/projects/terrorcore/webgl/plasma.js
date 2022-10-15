import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import defaultBkg from './defaultbkg.jpg';

import posx from './chains/envmap/posx.jpg';
import posy from './chains/envmap/posy.jpg';
import posz from './chains/envmap/posz.jpg';
import negx from './chains/envmap/negx.jpg';
import negy from './chains/envmap/negy.jpg';
import negz from './chains/envmap/negz.jpg';


var initSize = {width: window.innerWidth, height: window.innerHeight}

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

export class Scene{

  renderer;
  scene;
  camera;
  onInit;
  onRender;

  constructor({containerId ,onRender, onInit, dimension}){

    this.container = containerId || null;
    this.onInit = onInit || null;
    this.onRender = onRender || null;
    this.dimension = dimension || initSize;

    this.init();
    this.render();

  }

  init(){

    this.renderer = new THREE.WebGLRenderer({ alpha: false });
    window.devicePixelRatio = 1;
    this.renderer.setPixelRatio( 1 );
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setSize(this.dimension.width ,this.dimension.height,false);

    document.getElementById(this.container).appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.camera = new THREE.PerspectiveCamera(16, this.dimension.width / this.dimension.height, 0.1, 1000 );
    this.camera.position.z = 2;
    this.camera.focalLength = 50;

    this.light = new THREE.HemisphereLight(0xffffff, 0xff2fea, 1);
    this.scene.add( this.light );

    if(this.onInit){ this.onInit({renderer: this.renderer, scene: this.scene, camera: this.camera, light: this.light, dimension: this.dimension }); }

  }

  render(){

    if(this.onRender){ this.onRender({renderer: this.renderer, scene: this.scene, camera: this.camera, light: this.light, dimension: this.dimension }); }
    this.renderer.render( this.scene, this.camera );
    requestAnimationFrame( this.render.bind(this) );

  }

  onWindowResize() {
    initSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    this.camera.aspect = initSize.width / initSize.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(initSize.width, initSize.height);
  }


}

export class Plasma{


  fragmentShader = `

   #include <common>

   uniform vec3      iResolution;           // viewport resolution (in pixels)
   uniform float     iTime;                 // shader playback time (in seconds)
   uniform float     iTimeDelta;            // render time (in seconds)
   uniform int       iFrame;                // shader playback frame
   uniform float     iChannelTime[4];       // channel playback time (in seconds)
   uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
   uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
   //uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube
   uniform vec4      iDate;                 // (year, month, day, time in seconds
   uniform float     amp;
   uniform sampler2D bkg;
   uniform float     transition;

   varying vec2 vUv;
   float random (in vec2 st) {  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);  }


  float noise (in vec2 st) {
   vec2 i = floor(st);
   vec2 f = fract(st);

   // Four corners in 2D of a tile
   float a = random(i);
   float b = random(i + vec2(1.0, 0.0));
   float c = random(i + vec2(0.0, 1.0));
   float d = random(i + vec2(1.0, 1.0));

   // Smooth Interpolation

   // Cubic Hermine Curve.  Same as SmoothStep()
   vec2 u = f*f*(3.0-2.0*f);
   //u = smoothstep(0.,1.,f);

   // Mix 4 coorners percentages
   return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }



  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {

  //vec2 p = -1.0 + 2.0 * fragCoord.xy / iResolution.y;
  vec2 p = -2.0 * fragCoord.xy / iResolution.xy;

  // main code, *original shader by: 'Plasma' by Viktor Korsun (2011)

  float x = p.x*1.3;

  float y = p.y*3.4;


  float n = noise( vec2(p+iTime/24.) );

  float complexity = 1.7;

  float mov0 = cos(sin(iTime))*10.+sin(x/10.)*1000.;

  float mov1 = y / 1. + iTime;

  float mov2 = x / .1 ;

  float c1 = sin(mov1+mov2+iTime*2.)/2.+mov2*complexity-mov1-mov2+3.+iTime;

  float c2 = sin(n/3.*c1+sin(mov0/100.+iTime)+sin(mov2/2.+iTime)+sin((x*y)/100.)*3.3);

  float c3 = sin(c1*c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.));

  float cc = 1.9*n*(n/0.7)*sin(c2)*c3;

  float b = c2*cc/10.;
  float r = c3*cc/10.;
  float g = 0.1;

  vec4 waves = vec4(vec3( (0.1+cc)*amp ),1);

  vec2 deform = vec2( (0.1+cc)*amp );
  vec4 mixer = texture2D(bkg,vUv + deform )/transition;
  mixer += waves;
  fragColor = mixer;

  }

  void main(){
     mainImage(gl_FragColor, gl_FragCoord.xy);
  }

  `;
  vertexShader = `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  minAmp = 0.2;
  pgeometry;
  plane;
  clock = new THREE.Clock();

  constructor(){

  }

  init(e){

    this.uniforms = {
     iTime: { value:0 },
     iResolution: { value: new THREE.Vector3() },
     amp: {value:this.minAmp},
     bkg: {value: textureLoader.load( defaultBkg ), type:'t'},
     transition: {value: 2.9},
    };

    const chromeMaterial = new THREE.ShaderMaterial({
      fragmentShader : this.fragmentShader,
      vertexShader: this.vertexShader,
      uniforms : this.uniforms,
    });

    const txtGeometry = new THREE.PlaneBufferGeometry(2.8,1.8);
    const txtPlane = new THREE.Mesh( txtGeometry, chromeMaterial );
    txtPlane.scale.set(1.3,1.3,1.3);

    e.scene.add(txtPlane);

  }

  anim_shader(isHover){
    let velo = 0.1;
    if(isHover){
      if(this.uniforms.amp.value <= 1){ this.uniforms.amp.value += velo;  }
    }else{
      if(this.uniforms.amp.value >= this.minAmp){ this.uniforms.amp.value -= velo;  }
    }

  }



  render(e){

    //this.anim_shader(this.scaledown);
    const delta = this.clock.getDelta();

    this.uniforms.iResolution.value.set(e.dimension.width,e.dimension.height);
    this.uniforms.iTime.value = this.clock.elapsedTime;

  }


}

export class Chains{

  chains;
  cmaterial;
  canim;
  speed = 0.0004;
  cscale = 0.02;
  scaledown = false;
  i = 0;

  constructor(){

  }

  init(e){
        this.generate_chains().then( chains => {
          e.scene.add(chains)
          chains.scale.set(this.cscale,this.cscale,this.cscale);
          chains.position.set(0,0,-0.2);
        });
  }

  generate_chains(){
    const cenvmap = new THREE.CubeTextureLoader().load([posx,negx,posy,negy,posz,negz]);
    return new Promise( (resolve) => {
      loader.load(
        require('./chains/chains_1.gltf'),
        (gltf) => {
          this.chains = gltf.scene.children[0];

          this.cmaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.9,
            roughness:0.1,
            fog:false,
            envMap: cenvmap
          });

          this.chains.material = this.cmaterial;
          this.chains.renderOrder = 999;
          this.chains.material.depthTest = true;
          this.chains.material.depthWrite = true;
          this.chains.onBeforeRender = function (renderer) { renderer.clearDepth(); };

          resolve(this.chains);
        },
        (xhr) =>  console.log(xhr),
        (error) => console.log(error)
      );
    });
  }


  chains_rotate(){
    this.chains.rotation.set(Math.sin(this.i)*10,Math.sin(this.i)*10,Math.sin(this.i)*10);
    this.i+=this.speed;
    if(this.i > Math.PI){ this.i = 0; }
  }

  anim_chains(isHover){
    if(isHover){
      if(this.cscale >= 0.015){ this.cscale -= 0.0008; this.chains.scale.set(this.cscale, this.cscale, this.cscale); }
      else{return;}
    }else{
      if(this.cscale <= 0.05){ this.cscale += 0.0008; this.chains.scale.set(this.cscale, this.cscale, this.cscale); }
      else{return;}
    }
  }

  _events_init_(){

    document.getElementById("logo_container").find("h1").hover(
      () => {
        if(this.speed != 0.001){this.speed = 0.001};
        if(!this.scaledown){this.scaledown = true;}
      },
      () => {
        if(this.speed != 0.0004){this.speed = 0.0004};
        if(this.scaledown){this.scaledown = false};
      }
    );
    return;
  }

  render(e){
    if(this.chains){
      //this.anim_chains(this.scaledown);
      this.chains_rotate();
    }
  }

}
