import { Img, Gallery, Article, Body, Title, Video, Story, Space } from '../../components/article';
import './terrorcore_sheet.scss';
import { Scene, Plasma, Chains } from './webgl/plasma.js';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleries = {

  intro: [{type:'column', folder:'/Terrorcore', pictures:['showcase_4','showcase_5','showcase_2']}],
  more: [{type:'base', folder:'/Terrorcore', pictures:['showcase_1','showcase_2','showcase_3']}]
}


const Sidemenu = ({title,arrow = true}) => (
    <li>
      <section>
      { arrow && <span className='list_arrow'></span> }
      <div className='XP_bkg round hoverable XP_border'><p>{title}</p></div>
      </section>
    </li>
);

const sideMenuRoute = [
  { title:"Drive", arrow:false },
  { title:"Dj Fusiller", arrow:true },
  { title:"Hardcore kimono", arrow:true },
  { title:"Je crois que c'est un fiasco", arrow:true },
  { title:"Freeform case", arrow:true },
  { title:"Speedbag", arrow:true }
]

const Viewer = () => (
  <section id="Viewer" style={{marginLeft:'10%', width:'40%'}}>

    <span id="v_boxi"></span>
    <span id="v_bkg" className="XP_bkg XP_glow round"></span>

    <section id="v_metadata">
      <span className="v_fero"></span>
      <p id="v_size" className="XP_glow">[Size] 1.9Mb</p>
      <p id="v_type" className="XP_glow">[Type] jpg</p>
      <p id="v_path" className="XP_glow">[Path] drive/DJ Fusiller/too late/N°45.jpg</p>
    </section>

    <div id="v_content">
      <section id="v_topbar">
        <p className="XP_glow">N°45.jpg</p>
        <span className="quit"></span>
      </section>

      <div id="v_imgContainer">
        <img src="/assets/projects/Terrorcore/echo.jpg" />
      </div>
    </div>

  </section>
);

const Player = () => (
  <section className="player menu">
      <div id="player_screen" className="">
        <span id="player_eq_circle"></span>
        <section><span id="player_disc"></span>
        <p>Title_of_sound_file.mp3</p>
        </section>
        <p>30.3kb</p>
        <p style={{float:'right'}}>00.30 : 20.30</p>
      </div>

        <span id="player_skin" className="XP_border XP_bkg"></span>

        <section id="player_flex">
          <div id="player_control" className="controls">
            <span id="player_play" className="ico"></span>
          </div>

          <div id="player_playbar" className="controls">
            <span id="player_bar"></span>
            <span id="player_dot"></span>
          </div>

          <div id="player_volume" className="controls">
            <button></button>
            <div id="volumeSlide">
              <section id="volStrip">

                <section>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </section>

                <section>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </section>

              </section>
              <div id="slider_bar"></div>
              <div id="slider_thumb"></div>
            </div>
          </div>

          <div id="player_quit" className="controls">
            <span className="quit ico">
              <span></span>
              <span></span>
            </span>

            <span className="share ico">
              <span></span>
              <span></span>
              <span></span>
              <img src='/assets/projects/Terrorcore/heart.svg'/>
            </span>

          </div>
        </section>

  </section>
);

const PlasmaBackground = () => {

  const container = useRef();
  useEffect(() => {

      if(container){
        const plasma = new Plasma();
        const scene = new Scene({
          containerId: container.current.getAttribute('id'),
          onInit: e => plasma.init(e),
          onRender: e => plasma.render(e)
        });
      }

  },[container]);
  return( <div id='plasma' ref={container} className='ignore'></div> );
}

const ChainTitle = () => {

  const container = useRef();
  useEffect(() => {

    const onResize = (chains) => {
      if(!chains || !chains.chains){ return; }

      let newScale = chains.cscale;
      if(window.innerWidth <= 425){ newScale = newScale/4  }
      else if(window.innerWidth <= 825 && window.innerWidth > 425){ newScale = newScale/2 }

      chains.chains.scale.set(newScale, newScale, newScale );
    }

    if(container){

      const chains = new Chains();
      const scene = new Scene({
        containerId:container.current.getAttribute('id'),
        onInit: e => {
          chains.init(e);
          onResize();
          window.addEventListener('resize', () => onResize(chains) );
        },
        onRender:e => chains.render(e),
        dimension:{width:container.current.getBoundingClientRect().width, height:window.innerHeight}
      });

    }


    return () => window.removeEventListener('resize', onResize);
  },[container]);

  return(
    <>
      <div ref={container} id='chains'></div>
      <div id='logo_container' className='disable_select letterbox'>
        <div>
        <span></span>
        <h1>terror<br />core</h1>
        <section></section>
        </div>
      </div>
    </>
  );
}

const Boulevard = () => {

  const routeContent = [
      {
        id:'FUTURISM',
        src:require('./assets/futurism.jpg'),
        legend:'Buttons have a dynamic shapes, inspiring speed and movements',
        dot:null,
      },
      {
        id:'SKEWMORPHISM',
        src:require('./assets/skewmorph.jpg'),
        legend:'Bold and authentic old-school inconography with depth and specular propreties',
        dot:null,
      },
      {
        id:'Y2K',
        src:require('./assets/Y2K.jpg'),
        legend:'Inspired by early 2000\'s trend, using strong textures and deconstructed layout',
        dot:null,
      },
      {
        id:'NEUMORPHISM',
        src:require('./assets/neumorph.jpg'),
        legend:'A lighter approach to texture interactives elements, with blurred transparent backgrounds and slight reflections',
        dot:null,
      }
    ];


  const [content,setContent] = useState(routeContent[0]);
  return(
    <>
    <div style={{flexShrink: 0, flexBasis: '35%'}}>
        <svg id="influ" data-name="Calque 1" style={{float:'right', width:'100%'}} xmlns="http://www.w3.org/2000/svg" width="800.2" height="747.5" viewBox="-20 0 800.2 747.5">

          <defs>
          </defs>

          <title>influ</title>

          <g className="influgp" onMouseEnter={ () => setContent(routeContent[0]) } onTouchStart={ () => setContent(routeContent[0]) }>
            <path id="Path_4" data-name="Path 4" className="cls-3" d="M405.3,33.5h0c110.8,0,200.6,88.8,200.6,198.3v4.7c0,109.5-89.8,198.3-200.6,198.3h0c-110.8,0-200.6-88.8-200.6-198.3v-4.7C204.7,122.3,294.5,33.5,405.3,33.5Z" transform="translate(-32.8 -31.3)"/>
            <g id="Futurism" className="cls-1">
              <text className="cls-2" transform="translate(325 129.3)">FUTURISM</text>
            </g>
          </g>

          <g className="influgp" onMouseEnter={ () => setContent(routeContent[1]) } onTouchStart={ () => setContent(routeContent[1]) }>
            <path id="Path_3" data-name="Path 3" className="cls-3" d="M235.7,206.9h0c110.8,0,200.6,88.7,200.6,198.2v4.8c0,109.4-89.8,198.2-200.6,198.2h0C124.9,608.1,35,519.3,35,409.9v-4.8C35,295.6,124.9,206.9,235.7,206.9Z" transform="translate(-32.8 -31.3)"/>
            <g id="Skewemorphism" className="cls-1">
              <text className="cls-2" transform="translate(28.4 380)">SKEWMORPHISM</text>
            </g>
          </g>

          <g className="influgp" onMouseEnter={ () => setContent(routeContent[2]) } onTouchStart={ () => setContent(routeContent[2]) }>
            <path id="Path_5" data-name="Path 5" className="cls-3" d="M417.5,375.2h0c110.8,0,200.6,88.8,200.6,198.3v4.7c0,109.5-89.8,198.3-200.6,198.3h0c-110.8,0-200.7-88.8-200.7-198.3v-4.7C216.8,464,306.7,375.2,417.5,375.2Z" transform="translate(-32.8 -31.3)"/>
            <g id="Y2K" className="cls-1">
              <text className="cls-2" transform="translate(355 620)">Y2K</text>
            </g>
          </g>


          <g className="influgp" onMouseEnter={ () => setContent(routeContent[3]) } onTouchStart={ () => setContent(routeContent[3]) }>
            <path id="Path_2" data-name="Path 2" className="cls-3" d="M587.1,206.9h0c110.8,0,200.6,88.7,200.6,198.2v4.8c0,109.4-89.8,198.2-200.6,198.2h0c-110.8,0-200.6-88.8-200.6-198.2v-4.8C386.5,295.6,476.3,206.9,587.1,206.9Z" transform="translate(-32.8 -31.3)"/>
            <g id="Neuemorphism" className="cls-1">
              <text className="cls-2" transform="translate(550 380)">NEUMORPHISM</text>
            </g>
          </g>

        </svg>
    </div>

    <div className="flex vcenter" style={{flexBasis: '80%', display: 'grid', justifyItems: 'center', gridTemplateColumns: '95% auto'}}>
      <span id="morpheus" className="compress">
        {content &&
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={content.src}
              initial={{x:80, opacity:0}}
              animate={{x:0, opacity:1, transition:{duration:0.3}}}
              exit={{x:-20, opacity:0}}
            >
              <img className="round" src={content.src} />
              <br/><br/>
              <h2>{content.id}</h2>
              <p>{content.legend}</p>
            </motion.div>
          </AnimatePresence>
        }
      </span>
    </div>
    </>
  );
}

export default () => (
<>

  <PlasmaBackground />

  <Article id='laos_intro' spaced={true}>
    <Body flexDirection='vertical'>
      <Video id='615750283' placeholder={'/assets/thumbnails/terrorcore2.jpg'}/>
    </Body>
  </Article>

  <Article spaced={true}>
      <Body title={<>It’s an e-commerce, <br/>and an OS</>}>
          <div style={{flexBasis: '40%'}}>
            <p>
              <br/>
              &emsp; As an independent business, it was my client wish to not put the products on the first page (as it is legitimately done on casual e-commerces).
              <br/><br/>
              They rather wanted to aim for an interface inspired by Operating Systems where customers could buy products as they wander in the environment.
              <br/><br/>
              TERRORCORE combines in its core design an architecture echoing an OS, and distinctive elements proper to an e-commerce (such as product page or a cart system)
            </p>
            <br/><br/>
            <img style={{display:'none'}} src="/assets/projects/Terrorcore/ose.svg" />
          </div>
          <div style={{flexBasis:'90%'}}>
            <Gallery galleries={galleries} galleryKey='intro' />
          </div>
      </Body>
  </Article>

<Article spaced={true}>
    <Body flexDirection='vertical' className='half'>
      <h2 className='step'>Set the mood on the first click</h2>
      <br/>
      <p> &emsp;	As TERRORCORE has been thought as an experience rather than just a plain click-and-buy website,
      it felt important to highlight this feature on the first interaction.
      <br/> The Above the Fold page sets itself as the manifest of this concept: giving the user the feeling that
      by hovering the main title, he/she woke up the system and can access it.
      </p>
    </Body>
    <Body flexDirection='vertical'>
      <ChainTitle />
    </Body>

    <section className="body centered" style={{display:'none'}}>
      <h2 style={{whiteSpace:'nowrap'}}> A dive in a digital bath, made of virtual plasma.</h2>
    </section>

</Article>




<Article spaced={true}>
  <Body>
  <div style={{flexBasis:'70%'}}>

    <Viewer />
    <Player />

  </div>
  <div style={{flexBasis:'40%'}}>
    <h2 className=''> A maximalist website for a versatile brand </h2>
    <br/>
    <p className="">&emsp;Since TERRORCORE purpose isn’t limited to sell hand-made products but also to promote various musical contents,
      the website includes its own personal audio player and media viewer designed through a deconstructed and old-school lens. </p>
  </div>

  </Body>
  <Space type='small'/>
</Article>


<Article>
  <Body flexAlignement='vertical'>
    <Gallery galleries={ galleries } galleryKey='more' />
  </Body>
  <Space />
</Article>

<Article spaced={true}>

  <Body title='The style guide' flexDirection='vertical' className='terrorguide'>
      <table>
        <tbody>
          <tr>
            <td className="tableheader">Brand</td>
            <td colSpan="2" ><img style={{maxWidth: '100%'}} src="/assets/projects/Terrorcore/planetk.svg" /></td>
          </tr>
          <tr>
            <td className="tableheader">Typeface</td>
            <td style={{fontFamily:'xolonium'}}  >Xolonium</td>
          </tr>
        </tbody>
      </table>
  </Body>
</Article>

<Article spaced={true}>
  <Body className='terrorguide'>
    <div>
    <table>
    <tbody>
      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>
      <tr>
        <td rowSpan="3" className="tableheader">Swatch</td>
        <td  style={{paddingTop:0, paddingBottom:0}}><span className="guide_prim round" style={{backgroundColor:'#4dffd6'}}> &emsp; </span></td>
      </tr>

      <tr>
        <td ></td>
      </tr>
      <tr>
        <td  style={{paddingTop:0, paddingBottom:0}}><span className="guide_prim round" style={{backgroundColor:'#dc5dff'}}> &emsp; </span></td>
      </tr>

      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>


      <tr>
        <td className="tableheader">Background</td>
        <td className="guide_bkg"><img  className="round" style={{display: 'block'}} src="/assets/projects/Terrorcore/bkg_plasma.jpg" /></td>
      </tr>
      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>
      <tr>
        <td rowSpan="4" className="tableheader">Iconography</td>
        <td >
          <img className="ico xiao" src="/assets/projects/Terrorcore/icons/arrow.png" />
          <img className="ico xiao" src="/assets/projects/Terrorcore/icons/audio.png" />
          <img className="ico xiao" src="/assets/projects/Terrorcore/icons/folder.png" />
          <img className="ico xiao" src="/assets/projects/Terrorcore/icons/file.png" />
          <img className="ico xiao" src="/assets/projects/Terrorcore/icons/img.png" />
        </td>
      </tr>
      <tr>
        <td style={{fontFamily:'xolonium'}}  >
          <img className="ico mid" src="/assets/projects/Terrorcore/icons/cart_ico.svg" />
          <img className="ico mid" src="/assets/projects/Terrorcore/icons/home_ico.svg" />
          <img className="ico mid" src="/assets/projects/Terrorcore/icons/menu_ico.svg" />
          <img className="ico mid" src="/assets/projects/Terrorcore/icons/delivery.svg" />
          <img className="ico mid" src="/assets/projects/Terrorcore/icons/product.svg" />
        </td>
      </tr>

      <tr>
        <td >
          <img className="ico mid" src="/assets/projects/Terrorcore/play.png" />
          <img className="ico mid" src="/assets/projects/Terrorcore/pause.png" />
          <img className="ico mid" src="/assets/projects/Terrorcore/player_dot.png" />
          <img className="ico mid" src="/assets/projects/Terrorcore/volume_ico.png" />
          <img className="ico mid" src="/assets/projects/Terrorcore/volume_dot.png" />
        </td>
      </tr>

      <tr>
        <td >
          <div className="sheet" id="folder_sheet"></div>
          <div className="sheet" id="note_sheet"></div>
        </td>
      </tr>

      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>

    </tbody>
  </table>
    </div>
    <div>
    <table>
    <tbody>
      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>
      <tr>
        <td rowSpan="3" className="tableheader">Buttons</td>
        <td >
          <span style={{transform:'skewX(335deg)'}} className="XP_bkg XP_border round hoverable guide_button">&emsp;</span>
        </td>
      </tr>
      <tr><td>&emsp;</td></tr>
      <tr>
        <td >
          <span className="XP_glow XP_grad round hoverable guide_button">&emsp;</span>
        </td>
      </tr>

      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>

      <tr>
        <td rowSpan="3" className="tableheader">Windows</td>
        <td className="guide_bkg">
          <span className="XP_bkg XP_border round hoverable guide_button" style={{height:'100%'}}>&emsp;</span>
        </td>
      </tr>
      <tr><td>&emsp;</td></tr>
      <tr>
        <td className="guide_bkg">
          <span className="XP_glow round hoverable guide_button" style={{height:'100%'}}>&emsp;</span>
        </td>
      </tr>

      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>

      <tr>
        <td rowSpan="2" className="tableheader">Ornament</td>
        <td >
          <img className="" src="/assets/projects/Terrorcore/UI_boxi.gif" />
        </td>
      </tr>

      <tr>
        <td >
          <img className="" src="/assets/projects/Terrorcore/UI_fero.gif" />
        </td>
      </tr>
      <tr>
        <td>&emsp;</td>
        <td ></td>
      </tr>

    </tbody>
  </table>
    </div>
  </Body>
</Article>


<Article spaced={true}>
  <Body id="navigation">
    <div style={{flexBasis:'calc(100%/3)', alignItems: 'flex-start'}} className="flex centered">

      <ol id="sidemenu">
        { sideMenuRoute.map( item => <Sidemenu key={item.title} title={item.title} arrow={item.arrow} /> ) }
      </ol>
    </div>
    <div style={{flexBasis:'50%'}} className="compress">
      <h2>Keep the customer on track</h2>
      <p>&emsp; By nature, flat design feels very safe and non-risky, the main challenge here was to give the customer an engaging and lively experience in a non-casual interface while still making him trust the website.</p>
      <br/><br/>
      <p>In order to avoid loosing customers, TERRORCORE’s layout is made of 2 main navigation tools, easy and intuitive :</p>
      <ul>
        <li> A drop down list on the right to map-out the website hierarchy </li>
        <li> A history bar on the left </li>
      </ul>
      <br/><br/>
      <p>On top of serving the established “OS aesthetic”, these navigation tools also helps to give user comfort and landmark while browsing the online shop.</p>
    </div>
    <div style={{flexBasis:'20%'}}>

      <div id="dirpath" className="disable_select">
          <span className="round hoverable XP_bkg XP_border" style={{opacity: 1}}><p>Drive</p></span>
          <span className="round hoverable XP_bkg XP_border" style={{opacity: 1}}><p>DJ Fusiller</p></span>
          <span className="round hoverable XP_bkg XP_border" style={{opacity: 1}}><p>disponible</p></span>
          <span className="round hoverable XP_bkg XP_border" style={{opacity: 1}}><p>M</p></span>
      </div>

    </div>
  </Body>
</Article>


<Article id="rosas">
  <section className="header">
    <h2>A boulevard of influences</h2>
    <p className="half">&emsp;Inspired by the trendy Y2K graphic design aesthetic, TERRORCORE stands between old-school skewmorphism and more recent neuemorphism. All of this embedded in a futurist look.
      <br/> A choice giving a singular-touch to the website while still having a contemporary and up-to-date feel to it.</p>
  </section>
  <section className="body hori">
    <Boulevard />
  </section>
</Article>

{/*
<Article className="terrorguide" style={{display:'none'}}>
  <section className="body padded">
    <div style={{flexBasis:'40%'}}>
        <object data="/assets/projects/Terrorcore/downlogo.svg" id="downlogo" style={{width:'100%'}} type="image/svg+xml"></object>
    </div>
    <div className="compress" style={{flexBasis:'70%'}}>
      <h2> Brand reusability </h2>
      <p>
          &emsp;Since the brand’s logotype already had an established color scheme, the website uses those as its chromatic language. <br/>
          <br/>
          Pink or Neon Green, the interface assigns these these two colors specific functions. <br/>
      </p>
          <ul>
            <li>The pink being used when interacting with all the elements related to the OS.</li>

            <li>And since the brand chose to display its products on a green screen, it felt natural to use the Neon Green color for all shopping related interactions.</li>
          </ul>
      <p>
          <br/><br/>
          A chromatic constrast making it clear for the user the nature of its interactions, wether simply navigating, or buying.
      </p>

          <div className="sblank"></div>

          <div className="sblank"></div>
    </div>

  </section>
</Article>

<Article style={{display:'none'}}>
  <section className="body compress">
    <div className="flexblank"></div>
    <div className="compress">
      <h2>Métamorphose Chromée</h2>
      <p>&emsp; In order to offer the customer an experience in a liquid and glossy environment, the website uses a GLSL procedural texture evolving depending on user interaction with the content.</p>
      <div className="sblank"></div>
    </div>
  </section>
</Article>

*/}


<Article id="mobileexp">

  <Body title='Mobile optimization' flexAlignement='centered'>
      <div className="flex horizontal" style={{flexBasis: '70%'}}>

          <div className="flex vertical vcenter" style={{flexBasis:'50%'}}>
              <img src="/assets/projects/Terrorcore/mobile/mobile_1.png" />
              <img src="/assets/projects/Terrorcore/mobile/mobile_2.png" />
          </div>

          <div className="flex vertical vcenter" style={{flexBasis:'50%'}}>
          <div className="blank"></div>
          <img src="/assets/projects/Terrorcore/mobile/mobile_3.png" />
          <img src="/assets/projects/Terrorcore/mobile/mobile_4.png" />
        </div>

      </div>
  </Body>
  <Space />
</Article>

<Article>
  <Body>
    <div style={{flexBasis:'40%'}}>
      <h2 className='step'>A dedicated SQL client</h2>
      <p>	&emsp;Regarding the uniqueness of this project I had to develop in Python a SQL client allowing the admin to access the products database through a user-friendly interface.
        <br/><br/>
        On top of being able to enter the price, the shipping fees and the quality of each products, the software also automatically retrieves the new products set by the admin and removes the ones out-of-stock.
        <br/><br/>
        The admin can also establish a FTP synchronisation with the host server in a click.</p>
    </div>
    <div style={{flexBasis:'70%'}} className='compress'>
      <img className="round pix" src="/assets/projects/Terrorcore/syncher.jpg" />
    </div>
  </Body>
</Article>

</>
);
