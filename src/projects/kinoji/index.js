import {
  Img,
  Gallery,
  Article,
  Body,
  Title,
  Video,
  Story,
  Space,
  SlideShow
} from '../../components/article';

import {
  SearchBar,
  Switcher,
  DropDown,
  Card,
  MicroFilters
} from './inputs';
import './kinoji_sheet.scss';


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
      ar.push('/assets/projects/kinoji/'+folder+'/'+name+'_'+str+'.jpg');
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
    <table id='table_font'>
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

    <table id='table_color'>
      <thead>
        <tr>
          <td colSpan='4'>
            <h4 className='discrete'>Color scheme</h4>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={{backgroundColor:'#111111'}}></td>
          <td style={{backgroundColor:'#E03434'}}></td>
          <td style={{backgroundColor:'#4989FF'}}></td>
          <td style={{backgroundColor:'#B740E6'}}></td>
        </tr>
        <tr>
          <td style={{backgroundColor:'#D4D4D4'}}></td>
          <td style={{backgroundColor:'#717171'}}></td>
          <td style={{backgroundColor:'#3C4658'}}></td>
          <td style={{backgroundColor:'#1B222A'}}></td>
        </tr>

      </tbody>
    </table>

    <table id='table_inputs' style={{display:'none'}}>
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
            <Card visual={<img src='/assets/projects/kinoji/YimouZhang.jpg' alt='YimouZhang'/>} label='Zhang Yimou' subtext={<small>1951-today</small>} summary={<small style={{fontSize:'0.7em', lineHeight:'1.4em'}}><br />Zhang Yimou is a Chinese film director, producer, writer and actor, and former cinematographer.</small>}/>
          </td>
        </tr>

      </tbody>
    </table>

      <table id='table_icono'>
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
      <Body style={{columnGap:'10%'}} >
        <div style={{flexBasis: '50%', boxSizing:'border-box'}}>
          <h2 className='step'>From Asia, <br /> to the west</h2>
          <p>
            Kinoji is a free online cinematography library gathering movies' shots from all horizons.
            <br /><br />
            Noticing the lack of awareness towards Asia’s cinema in the western culture, the website puts a strong accent on East-Asia cinema including various movements such as Taiwanese New-Waves, China’s socialist cinema, Japan or Hong-Kong voluptuous and eccentric cinema .
            <br /><br />
            Nevertheless, though the library emphasises on Asia cinema, it still provides a wide spectrum of genre including western and soviet cinema.
          </p>
        </div>
        <div style={{flexBasis: '90%'}} className='stickToRight'>
          <img src='/assets/projects/kinoji/mockup_mac.png' />
        </div>
      </Body>
      <Space type='small'/>
      <Body flexDirection='vertical'>
        <Gallery galleries={{gallery_1: [{type:'base', folder:'/kinoji/Screenshots/', pictures:['moviepage','fullview', 'genrepage']}]}} galleryKey='gallery_1'/>
      </Body>
      {/*<Body flexDirection='vertical' flexAlignement='centered'>
        <div style={{width:'40%'}}><Quote text="Cinema is a mosaic made of time" author="Andrei Tarkovsky"/></div>
      </Body>*/}
    </Article>



    <Article name='Infinity scroll' spaced={true}>
      <Title label="The layouts" summary={<>
        Looking through archives can be a tedious job. Thus the primary goal of this project was to give the user efficients and intuitives approaches to browse the content.
        <br /><br />
        Being thought as a tool for inspiration rather than a simple search engine, the website allow the user to switch between two display modes:
        <ol>
          <li>The first mode displays the movies’ poster allowing the user to have an overview of the avalaible content.</li>
          <li>The second mode throws the user into a dense patchwork of colors and atmospheres. Ideal if one is simply looking for inspiration.</li>
        </ol>
        </>
      } />

      <Body flexDirection='vertical'>
        {/*<SlideShow slides={
          [
            {
              content: <img src='/assets/projects/kinoji/Screenshots/poster.jpg'/>,
              legend: "The first mode displays the movies’ poster allowing the user to have an overview of the avalaible content."
            },
            {
              content: <img src='/assets/projects/kinoji/Screenshots/mosaic.jpg'/>,
              legend: "The second mode throws the user into a dense patchwork of colors and atmospheres. Ideal if one is simply looking for inspiration."
            }
          ]
        }/>*/}
        <Gallery galleries={{ gallery_4: [{type:'split', folder:'/kinoji/Screenshots/', pictures:['poster', 'mosaic']}]}} galleryKey='gallery_4'/>

      </Body>
    </Article>


    <Article name='Search engine' spaced={true}>
      <Title label='The search engine' summary={
            <>Even though the word “Archive” usually rhymes with utilitarian design rather than aesthetic,
            Kinoji lies between a functional and a refined interface via its
            3 filtering interfaces, each one having a distinct mechanic while being embedded in the same visual signature.
            A distinction breaking with the usual scroll down list or check-box interfaces, offering a more engaging browsing experience to the user.</>}
      />
      <Body flexDirection='vertical'>

      <Gallery galleries={{ gallery_2: [{type:'base', folder:'/kinoji/Screenshots/', pictures:['worldmap', 'glossaire', 'tags']}]}} galleryKey='gallery_2'/>

      </Body>

    </Article>

    <Article name='The style guide'>
      <Body title="The style guide" flexDirection='vertical'>
        <GraphicChart />
      </Body>
      <Space type='small'/>
    </Article>


    <Article spaced={true} name='Userflow'>
        <Body title='Userflow'>
          <img src="/assets/projects/kinoji/userflow.svg" />
        </Body>
    </Article>


    <Article name='Creative tool'>
      <Body>
          <div>
            <h2 className='step'>A tool for creatives</h2>
            <p>As an illustrator it seemed essential to me to emphasize on the visual aspects of movies. <br />
              Hence, the library binds data from two distinct databases offering a filtering system targeted for a creative approach.
              <br /><br />
              On one hand it retrieves basic data via the TMDB API such a the director's name, the date of release and so on.
              <br /><br />
              And on the other, it uses a local databases to fetch more artistic data such as the dominants aesthetics, color scheme or genre.
              <br />
              The user can search movies depending on their primary color, mood and main visual subjects.
           </p>
         </div>

         <div style={{flexBasis:'80%'}}>
          <img src="/assets/projects/kinoji/doubledtb.svg" />
        </div>
      </Body>
      <Space type='small' />
      <Body flexDirection='vertical'>
      {/*<SlideShow slides={
        [
          {
            content: <img src='/assets/projects/kinoji/Screenshots/filter_1.jpg'/>,
            legend: "The user can search movies depending on their primary color, mood and main visual subjects."
          },
          {
            content: <img src='/assets/projects/kinoji/Screenshots/filter_2.jpg'/>,
            legend: "The user can search movies depending on their primary color, mood and main visual subjects. "
          },
          {
            content: <img src='/assets/projects/kinoji/Screenshots/filter_3.jpg'/>,
            legend: "The user can search movies depending on their primary color, mood and main visual subjects."
          }
        ]
      }/>*/}
      <Gallery galleries={{ gallery_3: [{type:'split', folder:'/kinoji/Screenshots/', pictures:['filter_1', 'filter_3', 'filter_2']}]}} galleryKey='gallery_3'/>

      </Body>
    </Article>

</>
);
