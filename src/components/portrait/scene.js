import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { randomInt } from '../../lib/utils';
import model from './model.gltf';

export default class SCENE{

  renderer = null;
  scene = null;
  camera = null;
  effect = null;
  clock = null;
  head = null;
  mixer = null;
  material = null;
  show = true;
  lastDiv = null;
  mousePos = {x:0,y:0};
  loader = new GLTFLoader();
  moveBone = null;
  width = () => this.container?.getBoundingClientRect().width;
  height = () => this.container?.getBoundingClientRect().height;
  playFlag=true;

  constructor({onLoad=()=>0, container=undefined, background=0xf5f7f9}){

    this.onLoad = onLoad;
    this.container = container;
    this.background = background;
    this.timeline = gsap.timeline({onComplete: () => this.noiseMove(this.moveBone) });
    this.timeout = null;

  }


//DOM

  init(){

    if( document.querySelectorAll('#resume-portrait canvas').length > 0 ){ return; }
    this._init_();
    this._render_();
    this.events();
}

  events(){
      window.addEventListener( 'resize', this.onWindowResize.bind(this) );
      window.addEventListener('mousemove', this.onMouseMove.bind(this) );
      document.getElementById('resume-portrait').addEventListener('touchmove', this.touchMove.bind(this) );
  }

//WebGL

  _init_(){

    this.setCanvasSize();
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setClearColor( 0xf5f7f9, 0 );
    this.renderer.setSize(this.width(),this.height());
    document.getElementById("resume-portrait").appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color(this.background);

    this.camera = new THREE.PerspectiveCamera(16, this.width() / this.height(), 0.1, 1000 );
    this.camera.focalLength = 125;
    this.setCanvasSize();

    const light = new THREE.AmbientLight(0xF5F7F9, 1);
    this.scene.add(light);

    this.importModel();



  }

  importModel(){

    this.loader.load(
      model,
      (gltf) => {

        gltf.scene.traverse( item => {
          if(item.material){
            item.material.flatShading = true;
          }
        });


        this.head = {
          group:gltf.scene.children[0],
          mesh: gltf.scene.children[0].children[1],
          bone: gltf.scene.children[0].children[0].children[0]
        };


        this.head.bone.rotation.y = -1;
        this.head.group.position.y = -0.065;


        this.scene.add(this.head.group);
        this.moveBone = this.head.bone;

        //set animations
        this.noiseMove( this.moveBone );
        this.closeEyes( this.head.mesh );
        if(this.onLoad){ this.onLoad(); }


      },function(xhr){

      },function(error){

      }
    );


  }

  _render_(){
    if(!this.playFlag){return;}
    this.renderer?.render( this.scene, this.camera );
    if(this.playFlag){ requestAnimationFrame( this._render_.bind(this) ); }
  }

  //events

  setCanvasSize(){
    if(!this.camera){ return; }

    if( window.matchMedia('(orientation: landscape)').matches ){
      this.camera.position.z = 0.55;
      this.camera.position.y = 0.01;
    }else{
      this.camera.position.z = 0.6;
      this.camera.position.y = 0.030;
    }

  }

  onWindowResize() {

    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => { 

      this.camera.aspect = this.width() / this.height();
      this.camera.updateProjectionMatrix();
  
  
      this.renderer?.setSize( this.width(), this.height() );
      this._render_();
      this.setCanvasSize();

    }, 200);

  }

  onMouseMove(e){

    this.timeline.clear();

    this.mousePos.x = -1 + (e.clientX / window.innerWidth) + 0.2;
    this.mousePos.y = -1 + (e.clientY / window.innerHeight) + 0.2;

    if(this.moveBone){
      this.moveBone.rotation.x = this.mousePos.y;
      this.moveBone.rotation.y = this.mousePos.x + 0.8;
    }

    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => { 
      this.noiseMove(this.moveBone);
    }, 200);


  }

  pause(){
    if(!this.playFlag){ return; }
    this.playFlag=false;
    this.timeline.pause();
  }

  play(){
    if(this.playFlag){ return; }
    this.playFlag=true;
    this._render_();
    this.noiseMove(this.moveBone);
  }

  noiseMove(bone,speed=randomInt(2,3)){
    
    if(!bone){ return; }
    this.timeline.to(bone.rotation,{
      duration:speed,
      overwrite:true,
      x:this.mousePos.y+randomInt(-2,2)/10,
      y:this.mousePos.x+0.8+randomInt(-1,1)/10,
      z:bone.rotation.z,
      ease:'Power1.easeInOut'
    } );
    this.timeline.play();

  }

  closeEyes(mesh){
    if(!mesh || !mesh.morphTargetInfluences){ return; }
    const close = {value:0};
    const tl = gsap.timeline({
      duration: Math.random(0.1,0.4),
      onComplete: () => this.closeEyes(mesh),
      onUpdate: () => mesh.morphTargetInfluences[0] = close.value,
      delay: randomInt(1,5),
      timeScale:2
    });
    tl.to(close,{value:1});
    tl.to(close,{value:0});

  }


  touchMove(e){
    e.preventDefault();
    this.mousePos.x = e.touches[0].clientX / window.innerWidth - 1;
    this.mousePos.y = e.touches[0].clientY / window.innerHeight - 1;

  }




}
