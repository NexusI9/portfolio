import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { randomInt } from '../../lib/utils';

const BACKGROUND = 0xf3f3f3;
const INIT_WIDTH =  window.innerWidth / 3;
const INIT_HEIGHT = window.innerHeight;

export default class SCENE{

  constructor(ob){

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.effect = null;
    this.clock = null;
    this.head = null;
    this.mixer = null;
    this.material = null;
    this.show = true;
    this.lastDiv = null;
    this.mousePos = {x:0,y:0}
    this.loader = new GLTFLoader();
    this.moveBone = null;

    this.onLoad = ob.onLoad || null;
    this.timeline = gsap.timeline({onComplete: () => this.noiseMove(this.moveBone) });
    this.timeout = null;

  }


//DOM

  init(){

    if( document.querySelectorAll('#squareabout canvas').length > 0 ){ return; }
    this._init_();
    this._render_();
    this.events();
}

  events(){
      window.addEventListener( 'scroll', this.onScroll.bind(this) );
      window.addEventListener( 'resize', this.onWindowResize.bind(this) );
      window.addEventListener('mousemove', this.onMouseMove.bind(this) );
      document.getElementById('squareabout').addEventListener('touchmove', this.touchMove.bind(this) );
  }

//WebGL

  _init_(){

    this.setCanvasSize();
    this.renderer = new THREE.WebGLRenderer({ alpha: false });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setSize(this.width,this.height);
    document.getElementById("squareabout").appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(BACKGROUND);

    this.camera = new THREE.PerspectiveCamera(16, this.width / this.height, 0.1, 1000 );
    this.camera.focalLength = 125;
    this.setCanvasSize();

    const light = new THREE.AmbientLight(0xFFFFFF, 1);
    this.scene.add(light);

    this.material = new THREE.MeshBasicMaterial( {color: BACKGROUND, side:THREE.DoubleSide} );

    this.importModel();



  }

  importModel(){

    this.loader.load(
      require('./model.gltf'),
      (gltf) => {

        this.head = {
          group:gltf.scene.children[0],
          mesh: gltf.scene.children[0].children[1],
          bone: gltf.scene.children[0].children[0].children[0]
        };


        this.head.bone.rotation.y = -1;
        this.head.group.position.y = -0.065;

        this.head.mesh.material = this.material;

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
    this.renderer.render( this.scene, this.camera );
    if(this.show){ requestAnimationFrame( this._render_.bind(this) ); }
  }

  //events

  setCanvasSize(){
    if(  window.innerWidth > window.innerHeight ){
      this.width = INIT_WIDTH;
      this.height = INIT_HEIGHT;
      if(this.camera){
        this.camera.position.z = 0.7;
        this.camera.position.y = 0;
      }
    }else{ //vertical mode
        this.width = window.innerWidth;
        this.height = window.innerHeight/1.5;
        if(this.camera){
          this.camera.position.z = 0.5;
          this.camera.position.y = 0.007;
        }
    }
  }

  onWindowResize() {

    this.camera.aspect = this.width / this.height;
  	this.camera.updateProjectionMatrix();


    this.renderer.setSize( this.width, this.height );
    this._render_();
    this.setCanvasSize();

  }

  onMouseMove(e){

    this.timeline.pause();

    this.mousePos.x = -1 + (e.clientX / window.innerWidth) + 0.2;
    this.mousePos.y = -1 + (e.clientY / window.innerHeight) + 0.2;

    if(this.moveBone){
      this.moveBone.rotation.x = this.mousePos.y;
      this.moveBone.rotation.y = this.mousePos.x + 0.8;
    }

    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => this.noiseMove(this.moveBone), 200);


  }

  onScroll(){
    /*
    if(window.innerHeight < lastDiv.getBoundingClientRect().top && this.show == true){ this.show = false; }
    else if(window.innerHeight > lastDiv.getBoundingClientRect().top && this.show == false){ this.show = true; this._render_(); }
    */
  }

  noiseMove(bone,speed=randomInt(2,3)){

    if(!bone){ return; }
    this.timeline.play();
    this.timeline.to(bone.rotation,{
      duration:speed,
      overwrite:true,
      x:this.mousePos.y+randomInt(-2,2)/10,
      y:this.mousePos.x+0.8+randomInt(-1,1)/10,
      z:bone.rotation.z,
      ease:'Power1.easeInOut'
    } );

  }

  closeEyes(mesh){

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
