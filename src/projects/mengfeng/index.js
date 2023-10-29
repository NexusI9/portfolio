import { Article, Body, Gallery, Title, Img, Video, Parallax, Table, Cartography, Space } from '@/components/Folio';
import PersonaSlider from '@/components/Folio/PersonaSlider';
import personaMap from './persona';
import galleryRoutes from './gallery';

export default () => (
  <>
    <Article name='Product Overview' spaced={true} >
      <Body flexDirection='vertical' title="Product overview">
        <Video title='MengFeng product showcase' id={632750562} placeholder={'/assets/thumbnails/mengfeng.webp'} />
        <Gallery galleries={galleryRoutes} galleryKey='product' />
      </Body>
    </Article>


    <Article name='persona' spaced={true}>
      <Title
        label='UX & market research'
      />

      <Body flexDirection='vertical'>
        <header>
          <h5>User base probing</h5>
          <p>Before embarking on the development of detailed personas, it was imperative to identify the job fields and sectors that are most susceptible to anxiety and stress. Conducting extensive statistical research in this regard served a dual purpose. Firstly, it helped in pinpointing the specific demographic of individuals who might find our product most beneficial, offering a precise target audience.
            <br />Secondly, delving into the socio-economic profiles and backgrounds of these individuals provided valuable insights into their unique needs and pain points. This comprehensive approach ensures that our product is not only tailored to address stress and anxiety but is also well-aligned with the diverse and specific requirements of our intended users.

          </p>
        </header>
        <div className='flex horizontal centered'>
          <Img src='/assets/projects/mengfeng/stats.svg' />
          <div className='half padded flex vertical centered t-center gap-small'>
            <div className='flex vertical centered padded'>
              <h4 className='purple no-margin'>23%</h4>
              <p>Of employees globally report that their work interferes with their personal life very often
                or always</p>
            </div>
            <div className='flex vertical centered padded'>
              <h4 className='purple no-margin'>25 to 44</h4>
              <p>Years old is the most common burnout age range</p>
            </div>
            <div className='flex vertical centered padded'>
              <h4 className='purple no-margin'>3.74/5</h4>
              <p>Is the amount of job-related stress women report
                <br />
                <small>(compared to 3.64 for men)</small>
              </p>
            </div>
          </div>
        </div>
      </Body>

      <Body flexDirection='vertical'>
        <h5>User persona</h5>
        <p>
          MengFeng's core goal is rooted in enhancing the well-being of individuals amidst a world dominated by speed and over-productivity.
          <br />The challenge was to capture a diverse spectrum of users—ranging in socio-economic backgrounds and interests—unified by the shared goal of improving their lifestyles.
        </p>
      </Body>
    </Article>

    <Article name='persona' spaced={true} className='plain'>
      <PersonaSlider personas={personaMap} />
    </Article>

    <Article name='persona' spaced={true} >
      <Body flexDirection='vertical'>
        <h5>Added value</h5>
        <br />
        <h6>What does the product brings to its user daily life?</h6>
        <p>A centralised and easy access to manage and enhance the user well being.</p>
        <br />
        <h6>What problematic does it solve? (Underlying user needs and pain points)</h6>
        <p>
          <ol>
            <li>“That that was a stressful day, how can I make my home a better place to wind down?”</li>
            <li>“I feel like meditation would do me good, but where can I start and integrate it to my lifestyle?”</li>
            <li>“I have guests coming at 7, but don’t have time to start the diffuser prior and choose the right playlist for tonight, how to fit it in my schedule?”</li>
            <li>“I don’t trust the quality of all those oil diffusing brands, is there any trustworthy brand out there?”</li>
          </ol>
        </p>
      </Body>
      <Space type='small' />
      <Body flexDirection='vertical'>
        <header>
          <h5>Competitors</h5>
          <p>
            Oil diffusing market is saturated by cheap and low quality (but good looking) products.
            Mostly made from plastic and not sustainable material, many products use contradictory materials that goes against their initial purpose being: enhance customer wellness.
          </p>
        </header>
        <Img src='/assets/projects/mengfeng/competitors.svg' />
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
              <td><b>Providing an accessible environment in the management of user well-being</b></td>
              <td>
                <ul>
                  <li>Eye-candy UI for sense of comfort</li>
                  <li>Strong uses of visuals and illustrations</li>
                  <li>Uses of tooltips</li>
                  <li>Clear functionalities segmentations</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><b>Educate and accompany the user in his health</b></td>
              <td>
                <ul>
                  <li>Profile creation</li>
                  <li>Questionnaire to better understand his needs and product usage</li>
                  <li>Training video</li>
                  <li>Support center</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><b>Make the product engaging on the long term</b></td>
              <td>
                <ul>
                  <li>Regular content updates (playlist, program)</li>
                  <li>Product promotions (oils, soap, wellness products…)</li>
                  <li>Gather feedbacks from users</li>
                  <li>Sustainable materials</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><b>Bring a sense of belonging and community</b></td>
              <td>
                <ul>
                  <li>Personal customisable space</li>
                  <li>Share functionality</li>
                  <li>Online support platform (dedicated forum)</li>
                  <li>Upvote/Downvote program system</li>
                  <li>Share routines and playlists</li>
                  <li>Blog</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Body>
    </Article>

    <Article name='Device 3D concept' spaced={true} >
      <Title
        label='Device 3D concept'
        summary={<>
          The design of MengFeng embodies a synthesis of materials and forms that resonate with both sturdiness and elegance. Crafted from Oak wood imitation and polished aluminum, the choice of materials ensures solidity without compromising on the product's lightness. Drawing inspiration from ancient vases, the curvaceous form of the device invites a sense of tranquility into any space.
          <br />The challenge lay in creating a multi-functional object that seamlessly integrates into various home decors, a piece that isn't just an appliance, but an aesthetic statement.
          <br />Through its gentle contours, MengFeng brings the essence of wellness into the heart of homes, serving as a testament to the harmonious relationship between function and design.
        </>}
      />
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='concept' />
      </Body>
    </Article>


    <Article name='Branding' spaced={true}>
      <Title
        label='Logotype & Branding'
        summary={<>
          The essence of tranquility and lightness permeates MengFeng's branding, drawing inspiration from the serene depths of traditional Zen culture while infusing it with a modern touch.
          The branding embodies a gentle balance through patterns of waves echoing the wisps of vapor, reminiscent of calm water and meditative steam.
          <br />A  challenge was to fuse these elements harmoniously, evoking the serenity of Zen while resonating with a more contemporary aesthetics.
          The logo, combining the device shape with a delicate lotus, encapsulates the journey towards inner peace.
        </>}
      />
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='logo' />
      </Body>
    </Article>

    <Article name='Userflow' spaced={true} className='purpleBkg round'>
      <Body flexDirection='vertical'>
        <h5>Userflow</h5>
        <div className='mengfeng-cartography'>
          <Cartography
            src="/assets/projects/mengfeng/userflow.svg"
          />
        </div>
      </Body>
    </Article>

    <Article name='Wireframe' spaced={true} className='purpleBkg round'>
      <Body flexDirection='vertical'>
        <h5>Low and high-fidelity wireframes</h5>
        <div className='mengfeng-cartography'>
        <Cartography
            src="/assets/projects/mengfeng/low-wireframes.svg"
          />
          <Space type="small"/>
          <Cartography
            src="/assets/projects/mengfeng/wireframes.svg"
          />
        </div>
      </Body>
    </Article>



    <Article name='Style guide' spaced={true}>
      <Body flexDirection='vertical' title="The style guide">
        <Gallery galleries={galleryRoutes} galleryKey='guidestyle' />
      </Body>
    </Article>


    <Article name='UI Overview' spaced={true} className='purpleBkg'>
      <Parallax
        src='/assets/projects/mengfeng/wide-parallax.webp'
        title='Mobile application'
        description={<>
          MengFeng's device and app create a user-friendly well-being experience, allowing you to easily customize soothing playlists, aromatherapy, yoga, and alarms. The app's simple design and calming visuals make your journey stress-free.
        </>}
      />
    </Article>


    <Article header='Pod pairing' spaced={true} className='purpleBkg round'>
      <Body flexAlignement='centered' flexDirection='vertical' style={{ textAlign: 'center' }}>
        <h2>Pod pairing</h2>
        <p>The process of pairing the pod with a smartphone is elegantly streamlined into a seamless three-step journey, ensuring a hassle-free connection.
          The interface guides the customer seamlessly through each stage, making the pairing process short, intuitive and straightforward.</p>
      </Body>
      <Body id='pairing' className='padded'>
        <Img className='compress' src="/assets/projects/mengfeng/mockups/wake_1.webp" />
      </Body>
    </Article>

    <Article header='Profile setup' spaced={true} className='purpleBkg round'>
      <Body>
        <div><Img className='padded small' src="/assets/projects/mengfeng/mockups/profile.webp" /></div>
        <div>
          <h2>Profile setup</h2>
          <p>The user will now enter various information and preferences so the application will adapts itself to the user preferences (music, meditation level...)</p>
          <br />
          In an effort to bring a sense of tranquility and ease to the user, the application strongly focuses on the use of imagery as a way to convey the information.
          <br /><br />
          By using joyful and vibrant illustrations, the interaction speaks thus to the user’s emotions rather than it’s intellect.
        </div>
      </Body>
    </Article>

    {/*<Article name='widgets' spaced={true} >
      <Body>
        <div className='half'>
          <h2>Widgets based interface</h2>
          <p>In order to access the numerous pod’s features such as diffuser, speaker or light, the user access to a simple widget board.</p>
        </div>
        <div style={{ flexBasis: '30%' }}>
          <Img src="/assets/projects/mengfeng/mockups/module.webp" />
        </div>
      </Body>
        </Article>*/}


    <Article name='Meditation' spaced={true} className='purpleBkg round'>
      <Title
        label='Meditation program'
        className='half'
        summary={<>
          Within the app, an ever-evolving meditation program beckons users to embark on a transformative inner journey. The program introduces fresh perspectives every week, nurturing the spirit of exploration.
          <br />The interface ensures that users can effortlessly navigate through meditation options, with clear visuals and intuitive controls.
        </>} />

      <Body>
        <div className='compress' style={{ position: 'relative' }}> <Img style={{ height: '100%' }} id='zenIllu' className='hidtablet' src="/assets/projects/mengfeng/zen.webp" /> </div>
        <div> <Img className='padded small' src="/assets/projects/mengfeng/mockups/meditation.webp" /> </div>
      </Body>
    </Article>

    <Article name='Diffuser' spaced={true} id='diffuse_lumino' className='backdrop center'>
      <Body>
        <div className='padright'>
          <h2>Diffuser Controls</h2>
          <p>The user can in a touch activate the pod’s essential oil diffuser as well as controlling either the diffusion time or the flow intensity </p>
        </div>
        <div style={{ flexBasis: '80%' }}> <Img src="/assets/projects/mengfeng/mockups/luminoDiffuse.webp" /> </div>
        <div className='padleft'>
          <h2>Lumino therapy</h2>
          <p>Lumino therapy is also one the many features the pod can do ! The user can thus choose between various animations and light programs.</p>
        </div>
      </Body>
    </Article>




    <Article name='Sleep session' spaced={true} className='purpleBkg round'>
      <Body className='reverse'>
        <div style={{ flexBasis: '50%' }}> <Img className='padded small' src="/assets/projects/mengfeng/mockups/alarm_1.webp" /> </div>
        <div className='compress'>
          <h2>Sleep session</h2>
          <p>The app extends its functionnality to the realm of sleep, offering a thoughtful sleep tracking system that empowers users to customize their sleep goals.
            <br />Navigating the ergonomic dreamscape, users can easily schedule their desired amount of sleep each night, choose tailored ringtone, enabling MengFeng to harmonize their well-being with their sleep patterns.</p>
        </div>
      </Body>
    </Article>

    <Article name='Music' spaced={true} className='purpleBkg round'>
      <Body>

        <div className="musicWave"></div>
        <div className="musicWave"></div>
        <div>
          <h2>Music speaker</h2>
          <p>MengFeng's prowess as a music speaker comes to life through a playlist system integrated within the app. The music interface offers appealing visuals and a sufficient array of options.
            <br />From official or community curated mixes, to personalized playlists, the user can easily browse and discover new musical horizons to expand his taste and elevate the spirit.</p>
        </div>
        <div style={{ flexBasis: '80%' }}> <Img className='padded small' src="/assets/projects/mengfeng/mockups/speaker.webp" /> </div>
      </Body>
    </Article>

    <Article name='Routine setup' spaced={true} className='purpleBkg round'>
      <Body>
        <Img className='padded small' src="/assets/projects/mengfeng/mockups/schedule.webp" />
        <div className='compress'>
          <h2>Routine setup</h2>
          <p>The app embraces the modern reality of busy lives, offering a place for organization through the creation of weekly routines. Ergonomics meet functionality as users craft their well-being routines, weaving together meditation, music, aromatherapy, and sleep goals seamlessly.</p>
        </div>
      </Body>
    </Article>


  </>
);
