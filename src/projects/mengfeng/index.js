import { Article, Body, Gallery, Title, Img, Video, Parallax, Persona } from '@/components/Folio';
import PersonaSlider from '@/components/Folio/PersonaSlider';
import personaBkg from '@/projects/mengfeng/assets/persona-bkg.webp';

const galleryRoutes = {
  product: [
    { type: 'window', folder: '/mengfeng/', pictures: ['prod_1', 'prod_2'] },
    { type: 'base', folder: '/mengfeng/', pictures: ['prod_3', 'prod_4', 'prod_5'] }
  ],
  logo: [
    { type: 'split', folder: '/mengfeng/', pictures: ['logo_black', 'logo_mid', 'logo_AIO'] },
    { type: 'split', folder: '/mengfeng/', pictures: ['brandpack', 'visitcard'] },
    { type: 'split', folder: '/mengfeng/', pictures: ['collateral_1', 'collateral_2', 'collateral_3'] }
  ],

}

const personaMap = [
  {
    name: "Sarah Thomson",
    portrait: "/assets/projects/mengfeng/persona/sarah.webp",
    age: 32,
    job: "Marketing Manager",
    status: "Single",
    summary: "Sarah is a successful marketing manager at a tech company. She leads a fast-paced, demanding lifestyle and often experiences stress and anxiety. She values her health and well-being, and she has incorporated daily yoga and meditation sessions to find some balance. Sarah loves using essential oils and aromatherapy to relax and unwind. She lives alone in a small apartment and enjoys hosting small gatherings with close friends. Financially, she is stable and can afford premium products.",
    personality: ["Ambitious", "Organized", "Extraverted"],
    interests: ["Yoga", "Meditation", "Aromatherapy"],
    headerColor: personaBkg.src,
    goals: [
      "Advance to the position of a senior marketing executive within the next two years.",
      "Start teaching yoga and meditation classes on weekends.",
      "Improve her mindfulness practice to achieve better work-life balance."
    ],
    painPoints: [
      "Lack of time for self-care, leading to increased stress levels and occasional burnout.",
      "Struggling to maintain a proper work-life balance."
    ],
    motivations: [
      "Enhancing productivity and relaxation in her career and personal life.",
      "Nurturing her well-being through meditation and aromatherapy.",
      "Developing a deeper connection with herself."
    ],
    coreNeeds: [
      "Effective stress relief methods.",
      "Automation product for convenience and ease of use.",
      "Personal growth and mindfulness enhancement."
    ]
  },
  {
    name: "Michael Rodriguez",
    portrait: "/assets/projects/mengfeng/persona/michael.webp",
    age: 28,
    job: "Freelance Writer",
    status: "Engaged",
    summary: "Michael is a freelance writer who works from home. He has a passion for music and loves exploring different genres and discovering new artists. Writing often leaves him mentally drained, and he seeks ways to rejuvenate himself. He is also interested in holistic health and natural remedies. Michael lives in a small studio apartment with his cat. He enjoys a simple, minimalistic lifestyle and manages his finances carefully.",
    personality: ["Creative", "Curious", "Introverted"],
    interests: ["Music", "Writing", "Holistic Health"],
    headerColor: personaBkg.src,
    goals: [
      "Publish a best-selling book within the next three years.",
      "Collaborate with a well-known musician to write lyrics for an album.",
      "Achieve a healthy work-life balance to prevent blues and depression due to excessive creation."
    ],
    painPoints: [
      "Creative blocks and mental fatigue hindering consistent quality content creation.",
      "Feeling isolated as an introvert and struggling to find an inspiring environment."
    ],
    motivations: [
      "Optimizing creative environment and routines to explore his creativity further.",
      "Improving overall well-being and mental clarity to fuel his writing career.",
      "Achieving recognition for his writing and creative endeavors."
    ],
    coreNeeds: [
      "Reliable source of inspiration and relaxation.",
      "Creative and supportive community for collaboration and feedback.",
      "Personal growth and mindfulness enhancement."
    ]
  },
  {
    name: "Elise Wu",
    portrait: "/assets/projects/mengfeng/persona/elise.webp",
    age: 40,
    job: "Physician",
    status: "Married with children",
    summary: "Emily is a dedicated physician, working long hours in a busy hospital. She's passionate about promoting health and wellness, not only for her patients but also for herself. She's an early adopter of new technologies and loves exploring gadgets that can enhance her well-being. Emily enjoys staying active and regularly works out at home or goes for runs in the park. She lives with her partner and two children, and they have a comfortable financial status.",
    personality: ["Compassionate", "Tech-savvy", "Proactive"],
    interests: ["Wellness", "Technology", "Fitness"],
    headerColor: personaBkg.src,
    goals: [
      "Introduce telemedicine services in her practice to reach more patients in rural areas.",
      "Complete a marathon within the next two years.",
      "Strike a better work-life balance to spend more quality time with her family."
    ],
    painPoints: [
      "High-stress job with limited personal time for passions and family.",
      "Feeling overwhelmed by managing family and professional responsibilities."
    ],
    motivations: [
      "Providing better healthcare access through telemedicine services.",
      "Achieving personal fitness goals and maintaining overall well-being.",
      "Creating a positive impact on her family's lives and finding effective ways to balance her priorities."
    ],
    coreNeeds: [
      "Time-efficient solutions for daily tasks.",
      "Improvement of overall well-being through fitness and holistic health practices.",
    ]
  }
];

export default () => (
  <>
    <Article name='Product Design' spaced={true} >
      <Title
        label='Product Design'
        summary={<>
          The design of MengFeng embodies a synthesis of materials and forms that resonate with both sturdiness and elegance. Crafted from Oak wood imitation and polished aluminum, the choice of materials ensures solidity without compromising on the product's lightness. Drawing inspiration from ancient vases, the curvaceous form of the device invites a sense of tranquility into any space.
          <br />The challenge lay in creating a multi-functional object that seamlessly integrates into various home decors, a piece that isn't just an appliance, but an aesthetic statement.
          <br />Through its gentle contours, MengFeng brings the essence of wellness into the heart of homes, serving as a testament to the harmonious relationship between function and design.
        </>}
      />
      <Body flexDirection='vertical'>
        <Video id={632750562} placeholder={'/assets/thumbnails/mengfeng.webp'} />
        <Gallery galleries={galleryRoutes} galleryKey='product' />
      </Body>
    </Article>

    <Article name='Logotype' spaced={true}>
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

    <Article name='persona' spaced={true} className='plain'>
      <Title
        label='User personas'
        summary={<>
          MengFeng's core goal is rooted in enhancing the well-being of individuals amidst a world dominated by speed and over-productivity.
          <br />The challenge was to capture a diverse spectrum of users—ranging in socio-economic backgrounds and interests—unified by the shared goal of improving their lifestyles.
        </>}
      />
      <PersonaSlider personas={personaMap} />
    </Article>



    <Article name='application' spaced={false} className='plain'>
      <Title
        label='Mobile application'
        summary={<>
          MengFeng's electronic device seamlessly integrates with a comprehensive application, offering users an array of functionalities to curate their well-being experience.
          <br />Navigating the challenge of accommodating an extensive feature set while maintaining simplicity, the application provides a user-friendly interface designed to alleviate stress. Users can effortlessly program soothing playlists, aromatic diffusion routines, yoga sessions, and alarms. The application's vibrant imagery and color palette envelop users in a cocoon of reassurance, ensuring a calming journey through every interaction.
        </>}
      />
    </Article>
    <Article name='UI Overview' spaced={true} className='purpleBkg'>
      <Parallax src='/assets/projects/mengfeng/wide_parallax.webp' />
    </Article>

    <Article header='Pod pairing' spaced={true} className='purpleBkg round'>
      <Body flexAlignement='centered' style={{ textAlign: 'center' }}>
        <div>
          <h2>Pod pairing</h2>
          <p>The process of pairing the pod with a smartphone is elegantly streamlined into a seamless three-step journey, ensuring a hassle-free connection.
          The interface guides the customer seamlessly through each stage, making the pairing process short, intuitive and straightforward.</p>
        </div>
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

    {/*<Article name='widgets' spaced={true} className='purpleBkg round'>
          <Body>
            <div className='compress'>
              <h2>Widgets based interface</h2>
              <p>In order to access the numerous pod’s features such as diffuser, speaker or light, the user access to a simple widget board.</p>
            </div>
            <div style={{flexBasis:'30%'}}>
              <Img src="/assets/projects/mengfeng/mockups/module.webp"/>
            </div>
          </Body>
        </Article>
        */}

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

    <Article name='Userflow' spaced={true} className='purpleBkg round'>
      <Body flexDirection='vertical' title='Userflow'>
        <div id='userflow'>
          <Img src="/assets/projects/mengfeng/userflow.svg" />
        </div>
      </Body>
    </Article>


  </>
);
