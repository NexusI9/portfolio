import { Article, Body, Gallery, Title, Space, Pointer, Img, Video, Cartography, Table } from '@/components/Folio';
import gallery from './gallery';

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
      <Body flexDirection='vertical' title="Website overview">
        <Gallery galleries={gallery} galleryKey='gallery_1' />
      </Body>
    </Article>



    <Article name='Infinity scroll' spaced={true} className='backdrop center fill' id='kinoji_layouts'>
      <Title label="Dual layouts" className='half' summary={<>
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
      <Title label='Search engine' summary={
        <>Even though the word “Archive” usually rhymes with utilitarian design rather than aesthetic,
          Kinoji lies between a functional and a refined interface via its
          3 filtering interfaces, each one having a distinct mechanic while being embedded in the same visual signature. <br /><br />
          A distinction breaking with the usual scroll down list or check-box interfaces, offering a more engaging browsing experience to the user.</>}
      />
      <Body flexDirection='vertical'>

        <Video title='Earth filter showcase' id="858466948" autoplay={true} controls={false} />
        <Gallery galleries={gallery} galleryKey='gallery_2' />

      </Body>

      {/*<Space/>
      
      <Body flexDirection='horizontal' className='reverse vcenter'>
        <Img alt='aesthetics mockup' src='/assets/projects/kinoji/mockups/aesthetics.webp' className='gradcircle double' />
        <Pointer style={{ flexBasis: '40%' }} title='Filter by aesthetics' description='Black and white, red, urbanistic, or naturalistic shots: Kinoji offers a in depth filtering system, allowing the user to search shots by their aesthetics or hues.' />
      </Body>*/}
    </Article>


    <Article spaced={true} name='Design Thinnking'>
      <Space type='small' />
      <Body title="Design Thinking" flexDirection='vertical'>
        <h5>User-base and target audience </h5>

        <Img alt='poster mode' src='/assets/projects/kinoji/user-base.svg' />
      </Body>

      <Body flexDirection='vertical'>
        <h5>Added value</h5>
        <br />
        <h6>What does the product brings to its user daily life?</h6>
        <p>An easy and free access to a big data library of movie stills for either inspiration or historical knowledge.</p>
        <br />
        <h6>What problematic does it solve? (Underlying user needs and pain points)</h6>
        <p>
          <ol>
            <li>“I liked this movie, what would be the place to find other similar movies like this?”</li>
            <li>“I saw it last time, but I didn’t got it, what could be the way to find more context about it?”</li>
            <li>“The vibe of this movie was insane, where could I revisit its beautiful cinematography?”</li>
            <li>“I need some stills references and inspiration for my next movie, where can I find an efficient way to look for specific still with a certain vibe?”</li>
          </ol>
        </p>
      </Body>
      <Space type='small' />
      <Body flexDirection='vertical'>
        <h5>Competitors</h5>
        <Table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Strength</th>
              <th>Weakness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>flim.ai</td>
              <td>
                <ul>
                  <li>International movies</li>
                  <li>Astronomical quantity</li>
                  <li>Search by color</li>
                  <li>Visual Search</li>
                  <li>Video Cut available</li>
                  <li>Detailed visual information</li>
                  <li>Similar shots</li>
                  <li>Filter by ratio</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Complex Navigation</li>
                  <li>Paid</li>
                  <li>No biography</li>
                  <li>Lack of context</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>shotdeck.com</td>
              <td>
                <ul>
                  <li>Composition feature</li>
                  <li>Detailed informations</li>
                  <li>International movies</li>
                  <li>Various display layout</li>
                  <li>Blog</li>
                  <li>“Where to stream” feature</li>
                  <li>Filter by ratio</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Paid</li>
                  <li>No biography</li>
                  <li>Lack of context</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>letterboxd.com</td>
              <td>
                <ul>
                  <li>Community-centric</li>
                  <li>Collections</li>
                  <li>Biography</li>
                  <li>Personal list</li>
                  <li>Reviews</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Not a visual library</li>
                  <li>Ads polluted</li>
                  <li>Lack of context</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Body>
      <Space type='small' />
      <Body flexDirection='vertical'>
        <h5>Core objectives</h5>
        <Table>
          <thead>
            <tr>
              <th>What (feeling, idiom)</th>
              <th>How (mechanics, visuals, behaviour)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Provide a user-friendly environment to navigate among a huge database</b>
              </td>
              <td>
                <ul>
                  <li>Make a simple and visually appealing user interface</li>
                  <li>Striking a balance between the right amount of functionality while providing flexibilty and freedom</li>
                  <li>Implement clear iconography</li>
                  <li>Put forward the movie stills</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <b>Being a reliable source of information</b>
              </td>
              <td>
                <ul>
                  <li>Adding sources to each biography and synopsis</li>
                  <li>Add External link</li>
                  <li>Develop a content strategy (blog, vlog, social media)</li>
                  <li>E-reputation</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <b>Being community-centric</b>
              </td>
              <td>
                <ul>
                  <li>Add a contribution mechanic to the project by allowing editing, removing content</li>
                  <li>Add a user profile (personal bounding)</li>
                  <li>Add vote system for shots (increasing engagement)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <b>Educate people about Asia cinema history</b>
              </td>
              <td>
                <ul>
                  <li>Gather information from various sources</li>
                  <li>Add detailed biography</li>
                  <li>Segment and classify movies in meaningful ways</li>
                  <li>Design elegant and appealing tool to push user exploring the archives</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Body>

      <Space type='small' />

      <Body flexDirection='vertical'>

        <h5>Stack and web architecture</h5>
        <p>
          <ul>
            <li><u>Database seeder:</u> Python as a Database Seeder because of its accessibility, community and amount of AI library available.</li>
            <li><u>Back-End:</u> PHP and MySQL as a back-end stack because of the familiarity with the program and the host server cannot handle a Node.JS Server.</li>
            <li><u>Front-End: </u>  Next.JS along with Axios to fetch data from the server. The project will nonetheless use a static export of pages for SEO.</li>
          </ul>

        </p>

        <Img alt='poster mode' src='/assets/projects/kinoji/stack-structure.svg' />
      </Body>

      <Space type='small' />
      <Body flexDirection='vertical'>

        <h5>Nucleus component and Data ramification (hierarchy) </h5>
        <p>
          Once the stack and structure had been decided it was important to set a data hierarchy between the main components.
          The most intuitive way to do it was to have a nucleus component from which is declined all the others. In this case the "movie" component is the nucleus.
          This choice meant that every other components from the database will emerge from the "movie" component.

          By drawing the following scheme, it was inteserting to see the two kinds of data the database would include:
          <ol>
            <li><u>The hard data:</u> the static and factual information.</li>
            <li><u>The organic data:</u>  meaning information that are subjects to change, and uncertainty.</li>
          </ol>

        </p>

        <Img alt='poster mode' src='/assets/projects/kinoji/data-hierarchy.svg' />
      </Body>
      <Space type='small' />

      <Body>
        <div>
          <h5>Global Data Fetching</h5>
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
      <Body flexDirection='vertical'>
        <header>
          <h6>1. Hard Data Fetching</h6>
          <p>The static data are retrieved by using a linear and simple API requests to get most of the movies informations. Those data will then serve to decline other components and objects (such as Peoples or Collections, event…)</p>
        </header>

        <img src="/assets/projects/kinoji/api-request.svg" />
      </Body>

      <Body flexDirection='vertical'>
        <header>
          <h6>2. Organic Data Fetching</h6>
          <p>For more organic and fluid data , KINOJI uses en process called “Web Workers”. The process is divided in 3 parts. It first fetch various content from the web with the help of API or web scrappers. It then filters and classifies results. Finally the process synthesise a whole new content from the data it fetches, resulting from a content that is accurate and with an added value compared to the sources it obtained the content from.</p>
        </header>

        <img src="/assets/projects/kinoji/web-workers.svg" />
      </Body>

      <Body flexDirection='vertical'>
        <header>
          <h5>Data classification</h5>
          <p>The data classification process has been the result of either the analysis of existing archives website (achive.org, letterbox) , but it mainly emerges from the many iterative experimentations through the website during its development. It is only by using the early product itself that I realised more and more about the features that needed to be added or removed.
            <br />
            Movie and stills were core components of the project, but the collections system has been added afterward in order to make movies more accessible for the user.
            When a user doesn’t have any idea about what kind of movies he wants to watch, he will usually look for a genre or collections to narrow a bit his choice of selections.
            <br /> <br />
            The data classification was an important process since it allowed to have a better idea on how to map features by priority, the scheme below allows to group components by level of accessibility: meaning en high order component will be easier to reach, while a lower order component may ask mort effort to get into.
            The scheme thus helps to draw the funnel from which the project can draw the user into the desired point, going from higher order to lower order.</p>
        </header>

        <img src="/assets/projects/kinoji/data-classification.svg" />
      </Body>

      <Space type='small' />
      <Body flexDirection='vertical'>
        <header>
          <h5>Zoning </h5>
          <p>Before creating detailed wireframes or user flows, it was crucial to conduct a sitemap zoning to identify redundant modules and understand the overall structure of the website.</p>
          <br />
        </header>

        <img src="/assets/projects/kinoji/zoning.svg" />
      </Body>

      <Space type='small' />
      <Body flexDirection='vertical'>
        <header>
          <h5>Userflow </h5>
          <p>This macro user flow focuses on the main mechanics and features along with their interrelations.</p>
          <br />
        </header>

        <Cartography
          src="/assets/projects/kinoji/userflow.svg"
          className='round'
        />
      </Body>
      <Space type='small' />

    </Article>


    <Article spaced={true} name='The style guide' id='kinoji-guidestyle' className='backdrop center fill'>

      <Body title="Style guide" flexDirection='vertical'>
        <section id='logointroduce' >
          <h5>The logotype</h5>
          <p>Combining elements of modernity with more classical shapes,
            <br />the logotype also does an echo to Asian culture as well as the cinema iconography.</p>
          <img src={logo.src} />
        </section>
      </Body>

      <hr />

      <Body flexDirection='vertical'>
        <div className='article-margin-bottom'>
          <h5>Typeface and colors</h5>
        </div>
        <Gallery galleries={gallery} galleryKey={"guidestyle"} />
      </Body>

    </Article>

    <Article spaced='true'>
      <Space type='small' />
      <Body flexDirection='vertical' title='Wireframes and design' summary={<>
        The main challenge designing Kinoji website was to create an interface that seamlessly blends attractiveness, usability, and functionality, ensuring users enjoy a comfortable navigation experience through the vast cinematic archives.
        The primary focus was on precisely and thoughtfully targeting the number of options presented, striking a balance to avoid overwhelming users with an overly complex and daunting array of features.
        <br /><br />
        From a visual standpoint, the goal was to immerse users in the realm of cinema by employing a predominantly black theme that serves to accentuate the prominence of film frames. The website's aesthetic prioritized capturing the essence of the cinematic world, with the dark backdrop providing a canvas for the vibrant movie stills and directorial captures to shine through. This approach not only enhances the overall experience but also draws visitors into the intriguing world of East Asian cinema.
      </>}>
        <Gallery galleries={gallery} galleryKey='website' />
      </Body>
    </Article>


  </>
);
