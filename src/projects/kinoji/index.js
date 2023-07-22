import {Article, Body, Gallery, Title, Space, Pointer, Img} from '@/components/Folio';

import {
  SearchBar,
  Switcher,
  DropDown,
  Card,
  MicroFilters
} from './inputs';

import logo from './assets/logo.svg';


const picsArray = {
  duvidha: fetchPicFromLength({folder: 'Duvidha', name: 'duvidha', length:24}),
  happy: fetchPicFromLength({folder: 'Happy Together', name: 'happytogether', length:40}),
  branded: fetchPicFromLength({folder: 'Branded To Kill', name: 'brandedtokill', length:18}),
  mountain: fetchPicFromLength({folder: 'Mountains May Depart', name: 'mountainsmaydepart', length:15}),
  tokyo: fetchPicFromLength({folder: 'Neo Tokyo', name: 'neotokyo', length:15})
}


function fetchPicFromLength({folder, name, length}){

    const ar = [];
    for( var i = 1; i < length+1; i++){
      var str = "" + i;
      var pad = "00000";
      str = pad.substring(0, pad.length - str.length) + str;
      ar.push('/assets/projects/kinoji/'+folder+'/'+name+'_'+str+'.webp');
    }
    return ar;

}

/*const GraphicChart = () => (
<>
  <Body>
    <div>
      <table>
        <tbody>
          <tr>
            <td>h1</td>
            <td id="oswald"  className="leftborder"><img src="/assets/projects/kinoji/staatliches.svg" /></td>
            <td>2em</td>
          </tr>
          <tr>
            <td>p</td>
            <td id="strait"  className="leftborder"><img src="/assets/projects/kinoji/strait.svg" /></td>
            <td>1em</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Body>

  <Body>
    <div id="tableKino">
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>&emsp;</th>
          <th><li><img src="/assets/projects/kinoji/icons/clapperboard.svg" />&ensp;Homepage</li></th>
          <th>&emsp;</th>
          <th>&emsp;</th>
          <th><li><img src="/assets/projects/kinoji/settings.svg" />&ensp;Settings</li></th>
        </tr>

          <tr className="tspace">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="leftborder"></td>
            <td></td>
          </tr>


        <tr>
          <td>Generic guideline &emsp;</td>
          <td></td>
          <td className="guide_bkg" style={{backgroundColor:'black'}}>Flat</td>
          <td></td>
          <td className="leftborder"></td>
          <td className="guide_bkg round" style={{backgroundColor:'#dddddd', color:'black', boxShadow: '0 0 3px rgb(0 0 0 / 55%) inset'}}>Carved</td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="leftborder"></td>
          <td></td>
        </tr>


        <tr>
          <td>Background &emsp;</td>
          <td></td>
          <td className="guide_bkg " style={{backgroundColor:'black'}}></td>
          <td></td>
          <td className="leftborder"></td>
          <td className="guide_bkg round" style={{backgroundColor:'#dddddd', color:'black'}}></td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="leftborder"></td>
          <td></td>
        </tr>

        <tr>
          <td>Interactive elements &emsp;</td>
          <td></td>
          <td className="guide_case round" style={{backgroundColor:'#AFAFAF', backgroundSize:'contain'}}></td>
          <td></td>
          <td className="leftborder"></td>
          <td className="guide_case round" style={{background:'#C72222'}}></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td className="guide_case" style={{color:'#AFAFAF'}}><i>highlight</i></td>
          <td></td>
          <td className="leftborder"></td>
          <td></td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>Iconography &emsp;</td>
          <td></td>
          <td colspan="5">

            <section className="iconsboard">
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/clapperboard.svg')"}}></span>
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/clock.svg')"}}></span>
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/tag.svg')"}}></span>
              <span className="round icons" style={{backgroundImage:"url('/assets/projects/kinoji/icons/search.svg')"}}></span>
              <span className="round icons" style={{backgroundImage:"url('/assets/projects/kinoji/icons/az.svg')"}}></span>
              <span className="round icons" style={{backgroundImage:"url('/assets/projects/kinoji/icons/calendar.svg')"}}></span>
              <span className="round icons" style={{backgroundImage:"url('/assets/projects/kinoji/icons/globe.svg')"}}></span>
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/arrowback.svg')"}}></span>
            </section>

            <section className="iconsboard">
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/poster.svg')"}}></span>
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/mosaic.svg')"}}></span>
              <span className="round icons"  style={{backgroundImage:"url('/assets/projects/kinoji/icons/close.svg')"}}></span>
            </section>

            <section className="iconsboard">
              <div id="miniLoader" className="flex hori centered" style={{background:'#D4D4D4'}}></div>
            </section>

          </td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="tspace">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Color scheme &emsp;</td>
          <td></td>
          <td colspan="5">


            <section id='kino_color'>
              <div>
                <span style={{backgroundColor:'#C72222'}}></span>
                <p>#C72222</p>
              </div>
              <div>
                <span style={{backgroundColor:'#222222'}}></span>
                <p>#222222</p>
              </div>
              <div>
                <span style={{backgroundColor:'#D4D4D4'}}></span>
                <p>#D4D4D4</p>
              </div>
            </section>

          </td>
        </tr>


      </tbody>
    </table>

    </div>
  </Body>

  </>
);*/
const GraphicChart = () => (
<>

    <div id='graphic_chart'>
    <table id='table_font' className='round'>
      <thead>
        <tr>
          <td colSpan='2'>
            <h4 className='discrete'>The fonts</h4>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td colSpan='2'>
            <p>Barlow Semi Condensed</p>
            <img src='/assets/projects/kinoji/fonts/Semi Bold.svg' alt='font'/>
          </td>
        </tr>
        <tr>
          <td>
            <p>Barlow</p>
            <img src='/assets/projects/kinoji/fonts/barlow.svg' alt='font'/>
          </td>
          <td>
            <p>Strait</p>
            <img src='/assets/projects/kinoji/fonts/strait.svg' alt='font'/>
          </td>
        </tr>
      </tbody>
    </table>

    <table id='table_color' className='round'>
      <thead>
        <tr>
          <td colSpan='4'>
            <h4 className='discrete'>Color scheme</h4>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className='round greyborder' style={{backgroundColor:'#111111'}}></td>
          <td className='round' style={{backgroundColor:'#E03434'}}></td>
          <td className='round' style={{backgroundColor:'#4989FF'}}></td>
          <td className='round' style={{backgroundColor:'#B740E6'}}></td>
        </tr>
        <tr>
          <td className='round' style={{backgroundColor:'#D4D4D4'}}></td>
          <td className='round' style={{backgroundColor:'#717171'}}></td>
          <td className='round' style={{backgroundColor:'#3C4658'}}></td>
          <td className='round' style={{backgroundColor:'#1B222A'}}></td>
        </tr>

      </tbody>
    </table>

    <table id='table_inputs' style={{display:'none'}} className='round'>
      <thead>
        <tr>
          <td colSpan='4'>
            <h4 className='discrete'>Inputs & CTA</h4>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td colSpan='4'> <SearchBar/> </td>
        </tr>
        <tr>
          <td><MicroFilters id='year' label='year' name='radio'/></td>
          <td><DropDown /></td>
          <td><Switcher /></td>
        </tr>
        <tr>
          <td colSpan='4'>
            <Card visual={<img src='/assets/projects/kinoji/YimouZhang.webp' alt='YimouZhang'/>} label='Zhang Yimou' subtext={<small>1951-today</small>} summary={<small style={{fontSize:'0.7em', lineHeight:'1.4em'}}><br />Zhang Yimou is a Chinese film director, producer, writer and actor, and former cinematographer.</small>}/>
          </td>
        </tr>

      </tbody>
    </table>

      <table id='table_icono' className='round'>
        <thead>
          <tr>
            <td colSpan='4'>
              <h4 className='discrete'>Iconography</h4>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src='/assets/projects/kinoji/icons/az.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/calendar.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/clapperboard.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/clock.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/globe.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/search.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/tag.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/arrowback.svg' alt='icon'/>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/assets/projects/kinoji/icons/mosaic.svg' alt='icon'/>
              <img src='/assets/projects/kinoji/icons/poster.svg' alt='icon'/>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  </>
);
const Quote = ({text, author}) => (
  <div className='quote'>
    <h4 className='discrete'>{text}</h4>
    <p className='discrete'>{author}</p>
  </div>
);
const MovieMason = ({pictures, fade=false}) => (
  <section className="moviemason">
    <section className={"thumbcontain " + (fade ? 'deg' : '')}>
    {pictures.map( pic => <img class='moviethumb' src={pic} /> )}
    </section>
  </section>
);
const DatabaseQuery = () => {

  const queryRoute = [
      {
        filters:['Monochrome','Figure', 'Composition'],
        pictures:picsArray.branded,
        title:'Branded to Kill, 1967, Seijun Suzuki'
      },
      {
        filters:['Urban','Neon', 'Anime'],
        pictures:picsArray.tokyo,
        title:'Neo Tokyo, 1989, Rintaro'
      },
      {
        filters:['Asia','Naturalistic', 'Colorful'],
        pictures:picsArray.mountain,
        title:'Mountains may depart, 2015, Jia Zhangke'
      },
  ];

  const Column = ({ filters, pictures, title}) => (
    <div>
      <section className="taglabel">
        <span className="icons"></span>
        {filters && filters.map( fl => <><span className='connector'></span><p className="round">{fl}</p></> ) }
        <span className='connector' ></span>
      </section>
      <MovieMason pictures={pictures} fade={true} />
      <small className='discrete'>{title}</small>
    </div>
  );

  return (
      <>
        { queryRoute.map( query => <Column filters={query.filters} pictures={query.pictures} title={query.title} />  ) }
      </>
  );

}

export default () => (
  <>
    <Article spaced={true} name='Introduction'>
      <Space type='small' />
      <Body style={{columnGap:'10%'}} className='flex vcenter' >
        <div style={{flexBasis: '50%', boxSizing:'border-box'}}>
          <h2>From Asia, to the west</h2>
          <br/>
          <p>
            Kinoji is a free online cinematography library gathering movies' shots from all horizons.
            <br /><br />
            Noticing the lack of awareness towards Asia’s cinema in the western culture, the website puts a strong accent on East-Asia cinema including various movements such as Taiwanese New-Waves, China’s socialist cinema, Japan or Hong-Kong voluptuous and eccentric cinema .
            <br /><br />
            Nevertheless, though the library emphasises on Asia cinema, it still provides a wide spectrum of genre including western and soviet cinema.
          </p>
        </div>
        <div style={{flexBasis: '120%'}} className='stickToRight'>
          <Img id='kinoji_first_mockup' src='/assets/projects/kinoji/mockups/mockup_mac.webp' className='gradcircle' />
        </div>
      </Body>
      <Space />
      <Body flexDirection='vertical'>
        <h2>Web-app snapshots</h2>
        <br/>
        <Gallery galleries={
          {
            gallery_1: [
              {type:'base', folder:'/kinoji/Screenshots/', pictures:['moviepage','fullview', 'discover']},
              {type:'split', folder:'/kinoji/Screenshots', pictures:['genres','genrepage']}
              ]}} galleryKey='gallery_1'/>
      </Body>
    </Article>



    <Article name='Infinity scroll' spaced={true} className='backdrop center fill' id='kinoji_layouts'>
      <Title label="The layouts" className='half' summary={<>
        Looking through archives can be a tedious job. Thus the primary goal of this project was to give the user efficients and intuitives approaches to browse the content.
        <br /><br />
        Being thought as a tool for inspiration rather than a simple search engine, the website allow the user to switch between two display modes:
        </>
      } />

      <Body flexDirection='horizontal' className='reverse vcenter'>
        <section>
          <Img alt='poster mode' src='/assets/projects/kinoji/mockups/poster_mode.webp'/>
        </section>
        <Pointer style={{flexBasis:'40%'}} title='1. Poster mode' description='The poster mode displays the movies’ poster allowing the user to have an overview of the avalaible content.'/>
      </Body>
      <Body flexDirection='horizontal' className='vcenter'>
        <Pointer style={{flexBasis:'40%'}} side='right' title='2. Mosaic mode' description='The second mode throws the user into a dense patchwork of colors and atmospheres. Ideal if one is simply looking for inspiration.'/>
        <Img alt='poster mode' src='/assets/projects/kinoji/mockups/mosaic_mode.webp' />
      </Body>
    </Article>


    <Article name='Search engine' spaced={true}>
      <Space type='small'/>
      <Title label='The search engine' className={'half'} summary={
            <>Even though the word “Archive” usually rhymes with utilitarian design rather than aesthetic,
            Kinoji lies between a functional and a refined interface via its
            3 filtering interfaces, each one having a distinct mechanic while being embedded in the same visual signature. <br/><br/>
            A distinction breaking with the usual scroll down list or check-box interfaces, offering a more engaging browsing experience to the user.</>}
      />
      <Body flexDirection='vertical'>

      <Gallery galleries={{ gallery_2: [
        {type:'base', folder:'/kinoji/Screenshots/', pictures:['worldmap']},
        {type:'base', folder:'/kinoji/Screenshots/', pictures:['worldmap_1', 'glossaire', 'tags']}
        ]}} galleryKey='gallery_2'/>

      </Body>

    </Article>

    <Article spaced={true} name='The style guide' id='kinoji_guidestyle' className='backdrop center fill'>
      
    <Body title="The style guide" flexDirection='vertical'>
        <section id='logointroduce' >
            <h5>The logotype</h5>
            <p>Combining elements of modernity with more classical shapes,
            <br/>the logotype also does an echo to Asian culture as well as the cinema iconography.</p>
            <img src={logo.src}/>
        </section>
      </Body>

      <Body flexDirection='vertical'>
        <GraphicChart />
      </Body>
      
      <Body title='Userflow' flexDirection='vertical'>
          <img src="/assets/projects/kinoji/userflow.svg" className='round'/>
        </Body>
    </Article>



    <Article spaced={true} name='Creative tool'>
      <Space type='small'/>
      <Body>
          <div>
            <h2 className='step'>A tool for creatives</h2>
            <p>As an illustrator it seemed essential to me to emphasize on the visual aspects of movies.
            <br/>Hence, the library binds data from various databases and sources offering a filtering system targeted for a creative and research approach.
            <br/><br/>It combines TMDB api, homemade Web scrappers, localy processed data, as well as AI api to offer the utmost complete and accurate user exeprience.
           </p>
         </div>

         <div style={{flexBasis:'80%'}}>
          <img src="/assets/projects/kinoji/multidtb.svg" />
        </div>
      </Body>
      <Space type='small' />
      <Body flexDirection='horizontal' className='reverse vcenter'>
        <Img alt='aesthetics mockup' src='/assets/projects/kinoji/mockups/aesthetics.webp' className='gradcircle double' />
        <Pointer style={{flexBasis:'40%'}} title='Filter by aesthetics' description='Black and white, red, urbanistic, or naturalistic shots: Kinoji offers a in depth filtering system, allowing the user to search shots by their aesthetics or hues.' />
      </Body>
    </Article>

</>
);
