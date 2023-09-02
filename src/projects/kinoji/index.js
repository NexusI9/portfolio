import { Article, Body, Gallery, Title, Space, Pointer, Img, Video } from '@/components/Folio';

import logo from './assets/logo.svg';
import fira from './assets/fira.svg';


const GraphicChart = () => (
  <>

    <div className='tableGroup guidestyle'>
      <table id='table_font'>
        <thead>
          <tr>
            <td colSpan='2'>
              <h5 className='discrete'>Typeface</h5>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={fira.src} alt='fira font specimen' />
            </td>
          </tr>
        </tbody>
      </table>

      <table>
            <thead>
              <tr>
                <td>
                  <h5>Colors</h5>
                </td>
              </tr>
            </thead>

            <tbody>

            <tr>
                <td>
                  <p>Primary swatch</p>
                  <div className='packColor'>
                    <span className='colorswatch' style={{ backgroundColor: '#F2F7FF' }}></span>
                    <span className='colorswatch lightStroke' style={{ backgroundColor: '#131319' }}></span>
                    <span className='colorswatch' style={{ backgroundColor: '#B81E1E' }}></span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <p>Secondary swatch</p>
                  <div className='packColor'>
                    <span className='colorswatch' style={{ backgroundColor: '#DBE4F2' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#C8D3E8' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#66799D' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#3C4658' }} ></span>
                    <span className='colorswatch lightStroke' style={{ backgroundColor: '#1B222A' }} ></span>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>

      <table id='table_icono' className='round'>
        <thead>
          <tr>
            <td colSpan='4'>
              <h5 className='discrete'>Iconography</h5>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src='/assets/projects/kinoji/icons/az.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/calendar.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/clapperboard.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/globe.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/search.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/tag.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/list.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/shot.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/mosaic.svg' alt='icon' />
              <img src='/assets/projects/kinoji/icons/poster.svg' alt='icon' />
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  </>
);
const Quote = ({ text, author }) => (
  <div className='quote'>
    <h4 className='discrete'>{text}</h4>
    <p className='discrete'>{author}</p>
  </div>
);
const MovieMason = ({ pictures, fade = false }) => (
  <section className="moviemason">
    <section className={"thumbcontain " + (fade ? 'deg' : '')}>
      {pictures.map(pic => <img class='moviethumb' src={pic} />)}
    </section>
  </section>
);
const DatabaseQuery = () => {

  const queryRoute = [
    {
      filters: ['Monochrome', 'Figure', 'Composition'],
      pictures: picsArray.branded,
      title: 'Branded to Kill, 1967, Seijun Suzuki'
    },
    {
      filters: ['Urban', 'Neon', 'Anime'],
      pictures: picsArray.tokyo,
      title: 'Neo Tokyo, 1989, Rintaro'
    },
    {
      filters: ['Asia', 'Naturalistic', 'Colorful'],
      pictures: picsArray.mountain,
      title: 'Mountains may depart, 2015, Jia Zhangke'
    },
  ];

  const Column = ({ filters, pictures, title }) => (
    <div>
      <section className="taglabel">
        <span className="icons"></span>
        {filters && filters.map(fl => <><span className='connector'></span><p className="round">{fl}</p></>)}
        <span className='connector' ></span>
      </section>
      <MovieMason pictures={pictures} fade={true} />
      <small className='discrete'>{title}</small>
    </div>
  );

  return (
    <>
      {queryRoute.map(query => <Column filters={query.filters} pictures={query.pictures} title={query.title} />)}
    </>
  );

}

export default () => (
  <>
    <Article spaced={true} name='Introduction'>
      <Space type='small' />
      <Body style={{ columnGap: '10%' }} className='flex vcenter' >
        <div style={{ flexBasis: '50%', boxSizing: 'border-box' }}>
          <h2>From Asia, to the west</h2>
          <br />
          <p>
            Kinoji is a free online cinematography library gathering movies' shots from all horizons.
            <br /><br />
            Noticing the lack of awareness towards Asia’s cinema in the western culture, the website puts a strong accent on East-Asia cinema including various movements such as Taiwanese New-Waves, China’s socialist cinema, Japan or Hong-Kong voluptuous and eccentric cinema .
            <br /><br />
            Nevertheless, though the library emphasises on Asia cinema, it still provides a wide spectrum of genre including western and soviet cinema.
          </p>
        </div>
        <div style={{ flexBasis: '120%' }} className='stickToRight'>
          <Img id='kinoji_first_mockup' src='/assets/projects/kinoji/mockups/mockup_mac.webp' className='gradcircle' />
        </div>
      </Body>
      <Space />
      <Title
        label='The website'
        summary={
          <>
            The main challenge designing Kinoji website was to create an interface that seamlessly blends attractiveness, usability, and functionality, ensuring users enjoy a comfortable navigation experience through the vast cinematic archives.
            The primary focus was on precisely and thoughtfully targeting the number of options presented, striking a balance to avoid overwhelming users with an overly complex and daunting array of features.
            <br /><br />
            From a visual standpoint, the goal was to immerse users in the realm of cinema by employing a predominantly black theme that serves to accentuate the prominence of film frames. The website's aesthetic prioritized capturing the essence of the cinematic world, with the dark backdrop providing a canvas for the vibrant movie stills and directorial captures to shine through. This approach not only enhances the overall experience but also draws visitors into the intriguing world of East Asian cinema.
          </>
        }
      />
      <Body flexDirection='vertical'>
        <br />
        <Gallery galleries={
          {
            gallery_1: [
              { type: 'split', folder: '/kinoji/', pictures: ['boards'] },
              { type: 'base', folder: '/kinoji/Screenshots/', pictures: ['moviepage', 'fullview', 'discover'] },
              { type: 'split', folder: '/kinoji/Screenshots', pictures: ['genres', 'genrepage'] }
            ]
          }}
          galleryKey='gallery_1'
        />
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
          <Img alt='poster mode' src='/assets/projects/kinoji/mockups/poster_mode.webp' />
        </section>
        <Pointer style={{ flexBasis: '40%' }} title='1. Poster mode' description='The poster mode displays the movies’ poster allowing the user to have an overview of the avalaible content.' />
      </Body>
      <Body flexDirection='horizontal' className='vcenter'>
        <Pointer style={{ flexBasis: '40%' }} side='right' title='2. Mosaic mode' description='The second mode throws the user into a dense patchwork of colors and atmospheres. Ideal if one is simply looking for inspiration.' />
        <Img alt='poster mode' src='/assets/projects/kinoji/mockups/mosaic_mode.webp' />
      </Body>
    </Article>


    <Article name='Search engine' spaced={true}>
      <Space type='small' />
      <Title label='The search engine' className={'half'} summary={
        <>Even though the word “Archive” usually rhymes with utilitarian design rather than aesthetic,
          Kinoji lies between a functional and a refined interface via its
          3 filtering interfaces, each one having a distinct mechanic while being embedded in the same visual signature. <br /><br />
          A distinction breaking with the usual scroll down list or check-box interfaces, offering a more engaging browsing experience to the user.</>}
      />
      <Body flexDirection='vertical'>

        <Video id="858466948" autoplay={true} controls={false} />
        <Gallery galleries={{
          gallery_2: [
            { type: 'base', folder: '/kinoji/Screenshots/', pictures: ['worldmap_1', 'glossaire', 'tags'] }
          ]
        }} galleryKey='gallery_2' />

      </Body>

    </Article>

    <Article spaced={true} name='The style guide' id='kinoji-guidestyle' className='backdrop center fill'>

      <Body title="The style guide" flexDirection='vertical'>
        <section id='logointroduce' >
          <h5>The logotype</h5>
          <p>Combining elements of modernity with more classical shapes,
            <br />the logotype also does an echo to Asian culture as well as the cinema iconography.</p>
          <img src={logo.src} />
        </section>
      </Body>

      <Body flexDirection='vertical'>
        <GraphicChart />
      </Body>

      <Body title='Userflow' flexDirection='vertical'>
        <img src="/assets/projects/kinoji/userflow.svg" className='round' />
      </Body>
    </Article>



    <Article spaced={true} name='Creative tool'>
      <Space type='small' />
      <Body>
        <div>
          <h2 className='step'>A tool for creatives</h2>
          <p>As an illustrator it seemed essential to me to emphasize on the visual aspects of movies.
            <br />Hence, the library binds data from various databases and sources offering a filtering system targeted for a creative and research approach.
            <br /><br />It combines TMDB api, homemade Web scrappers, localy processed data, as well as AI api to offer the utmost complete and accurate user experience.
          </p>
        </div>

        <div style={{ flexBasis: '80%' }}>
          <img src="/assets/projects/kinoji/multidtb.svg" />
        </div>
      </Body>
      <Space type='small' />
      <Body flexDirection='horizontal' className='reverse vcenter'>
        <Img alt='aesthetics mockup' src='/assets/projects/kinoji/mockups/aesthetics.webp' className='gradcircle double' />
        <Pointer style={{ flexBasis: '40%' }} title='Filter by aesthetics' description='Black and white, red, urbanistic, or naturalistic shots: Kinoji offers a in depth filtering system, allowing the user to search shots by their aesthetics or hues.' />
      </Body>
    </Article>

  </>
);
