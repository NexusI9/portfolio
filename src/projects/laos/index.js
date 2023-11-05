
import { Article, Body, Gallery, Title, Space, Pointer, Img, Video, Cartography } from '@/components/Folio';
import gallery from './gallery';
import KeyShapes from './components/KeyShapes';
import PopUp from './components/Popup';
import FeaturesCircles from './components/Features';


export default () => (
  <>

    <Article id='laos_intro' spaced={true} name='Showreel'>
      <Video title='LAOS promo video' id={605841479} />
    </Article>

    <Article id="laos_tpt" spaced={true} name="What's Laos">
      <Body flexDirection='horizontal' flexAlignement='centered'>
        <section style={{ flexBasis: '20%' }} className='padright'>
          <h2>It’s a translator, a personal dico and a trainer !</h2>
          <p>
            The app not only offers an elegant pop-up translator but also a personal dictionary and various exercises.<br /><br />
            It is through a process of gamification that LAOS acts as a user-friendly toolbox to learn mandarin.<br />
            By using LAOS, the user is invited to use various games for a smoother and more enjoyable learning experience.
          </p>
        </section>
        <section style={{ flexBasis: '50%' }} className='stickToRight'>
          <img src='/assets/projects/laos/mockups/hero.webp' alt='board' />
        </section>
      </Body>
    </Article>


    <Article name='The features'>
      <Title label='The features' summary="LAOS offers many features and exercises to enhance the user journey to learn mandarin. Interact with the icons to discovers them!" className='half' />
      <Body id='laos_features' >
        <FeaturesCircles />
      </Body>
    </Article>

    <Article spaced={true} name='Four modes'>
      <Title label='4 modes, 4 worlds' summary={<>
        Each of 4 LAOS modes have been thought as distinct universes with singular dominant color, layout and mechanics, while still being anchored in the global aesthetic.
        <br /><br />
        A dynamic throwing the user in an eye-candy and reviving environment each click, preventing the interaction to become too monotonous.
      </>} className='half' />
      <Body flexAlignement='vertical'>
        <Gallery galleries={{ snapshots: [{ type: 'window', folder: '/laos/', pictures: ['clean_list', 'clean_card', 'clean_type', 'clean_blank'] }] }} galleryKey='snapshots' />
      </Body>
      <Space type='small' />
    </Article>


    <Article name='Inconography'>
      {/*<Title label='The Style Guide' summary={<>On top of relying on a joyful and appealing color scheme,  LAOS also dig its inspiration in East-Asia iconography.<br /> Allowing the user to choose between up to four exercises modes  symbolised by distinctive key shapes and color contrasts.</>} />
      */}
      <Body flexDirection='horizontal' style={{ justifyContent: 'space-between' }}>
        <div style={{ flexBasis: '30%' }}>
          <h2>Iconography</h2>
          <p>On top of relying on a joyful and appealing color scheme,  LAOS also dig its inspiration in East-Asia iconography.<br /> Allowing the user to choose between up to four exercises modes  symbolised by distinctive key shapes and color contrasts.</p>
        </div>
        <KeyShapes />
      </Body>
    </Article>


    <Article spaced={true} name='Popup'>
      <Body id='laos_pop'>
        <section id="juede" className='body hori'>
          <div className='flexblank'></div>
          <div>
            <h1 style={{ fontFamily: 'noto-reg', whiteSpace: 'nowrap', position: 'relative', visibility: 'hidden' }}>覺得</h1>
            <h1 style={{ fontFamily: 'noto-reg', whiteSpace: 'nowrap', backgroundColor: '#b2d1ff', color: '#2f2f2f', top: 0, transform: 'translate(0%, 40%)', width: 'fit-content', position: 'absolute' }}>覺得</h1>
          </div>
          <div className='flexblank'></div>
        </section>
      </Body>
      <Body flexDirection='horizontal' className='reverse'>
        <div className='flexblank' style={{ flexBasis: '30%' }}></div>
        <div> <PopUp /> </div>
        <div>
          <h2>The popup</h2>
          <p>The popup translator also uses a dedicated color scheme in order to highlight the different tones and characters contained within the words </p>
        </div>
      </Body>
    </Article>

    <Article id='laos_typo' spaced={true} name='Font'>
      <Space type='small'/>
      <Body style={{ overflow: 'hidden' }}>
        <section>
          <h2>The font</h2>
          <p>Cursive writting can be tedious for beginners to make a clear distinction between the numerous and sometimes complex mandarin characters.<br />
            As a result LAOS uses a sans-serif font to make the characters easily readable for the user.</p>
          <br />
          <p>Compatible with Simplified, Traditional, Roman and Zhuyin characters,
            Noto Sans is a flexible font ensuring a cohesion depending on the user wishes to learn either Traditional or Simplified.</p>
        </section>
        <section>
          <div id="laos_typo_switch">
            <img src="/assets/projects/laos/hai.svg" />
            <h1>嗨</h1>
          </div>
        </section>
      </Body>
      <Space type='small' />
    </Article>

    <Article spaced={true} name='Graphic chart'>
      <Body flexDirection='vertical' flexAlignement='centered'>
        <header>
        <h2>The guide style</h2>
        <p className='half'>LAOS' various exercises own distrinct workspace with their own visual hierarchy and color scheme to make the learning process for the user more appealing. <br/><br/></p>
        </header>
        <Gallery galleries={gallery} galleryKey={'styleguide'} />
      </Body>
    </Article>

    <Article name='Userflow' spaced={false}>
      <Body id="laos-userflow" flexDirection='vertical' style={{ textAlign: 'center' }}>
        <h2>The userflow</h2>
        <br /><br />
        <Cartography className='infobox' src="/assets/projects/laos/userflow.svg" />
      </Body>
      <Space />
    </Article>


    <Article spaced={true} name='Ergonomy' id='laos_ergonomy' className='backdrop'>
      <Title
        label='Ergonomy first!'
        summary="For the sake of user's comfort, 
    LAOS has been designed to be as direct as possible while providing the user the right amount of settings to offer a full personal experience that fit the user wishes and preferences: such as a dark mode and other easy accessible mechanics."
        className='half'
      />

      <Img alt='laos dark theme screenshot' src='/assets/projects/laos/mockups/dark_theme.webp' />

    </Article>


    <Article name='Navigation'>
      <Body id='laos_sidebar_main' className='flex vcenter'>
        <Pointer
          style={{ flexBasis: '50%' }}
          title='One sidebar to control it all'
          description={<>
            Its intuitive and ludic sidebar makes the user emphasise on learning words rather than spend energy figuring how the app works.
          </>}
          side='right'
        />
        <Img alt='laos sidebar screenshot' src='/assets/projects/laos/mockups/sidebar.webp' />
      </Body>
    </Article>


    <Article spaced={true} name='Settings'>
      <Body className='reverse vcenter'>
        <Img alt='laos options screenshot' src='/assets/projects/laos/mockups/options.webp' />
        <Pointer
          style={{ flexBasis: '50%' }}
          title='Quick settings access'
          description='As LAOS aims to be straightforward, avoiding nested parameters,
      the extension offers a quick setting access pannel.
      Allowing the user to quickly access and switch between the essentials settings'
        />
      </Body>
      <Space type='small' />
    </Article>


    <Article name='Mantra' id='laos_mantra' className='backdrop'>
      <Body flexAlignement='vertical' className='centered'>
        <h2 style={{ textAlign: 'center' }}>Take LAOS everywhere in your pocket !</h2>
        <p className='half' style={{ textAlign: 'center', marginBottom: '5vh' }} ><br />Since Google Chrome on mobile doesn’t support Web Extensions yet.
          LAOS offers a solution to any reader who’d like to translate words on a single touch with <b>Mantra</b>.
          The app translates any articles to an easily readable transcript in which the user can choose his reading pace, as well as translating any words
        </p>
        <div className='compress'>
          <Img alt='laos options screenshots' src='/assets/projects/laos/mockups/mantra.webp' className='compress' />
        </div>

      </Body>
    </Article>


  </>);
