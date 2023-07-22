import { Article, Body, Gallery, Title, Img, Video, Parallax, Persona } from '@/components/Folio';

const galleryRoutes = {
  product: [
    { type: 'window', folder: '/mengfeng/', pictures: ['prod_1', 'prod_2'] },
    { type: 'base', folder: '/mengfeng/', pictures: ['prod_3', 'prod_4', 'prod_5'] }
  ],
  logo: [
    { type: 'split', folder: '/mengfeng/', pictures: ['brandpack', 'visitcard'] },
    { type: 'split', folder: '/mengfeng/', pictures: ['logo_black', 'logo_mid', 'logo_AIO'] }
  ]
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
      <Body flexDirection='vertical' title='Product Design'>
        <Video id={632750562} placeholder={'/assets/thumbnails/mengfeng.webp'} />
        <Gallery galleries={galleryRoutes} galleryKey='product' />
      </Body>
    </Article>

    <Article name='Logotype' spaced={true}>
      <Body flexDirection='vertical' title='Logotype & Branding'>
        <Gallery galleries={galleryRoutes} galleryKey='logo' />
      </Body>
    </Article>

    <Article name='persona' spaced={true} className='plain'>
      <Title label='User personas' />
      <div className='persona-slider'>
        {personaMap.map(perso => <Persona key={`${perso.name}personacard`} {...perso} />)}
      </div>

    </Article>


    <Article header='Pod pairing' spaced={true} className='purpleBkg round'>
      <Body flexAlignement='centered' style={{ textAlign: 'center' }}>
        <div>
          <h2>Pod pairing</h2>
          <p>The user pair the pod to a smartphone through a simple 3 steps process.</p>
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
          <small>
            In an effort to bring a sense of tranquility and ease to the user, the application strongly focuses on the use of imagery as a way to convey the information.
            <br /><br />
            By using joyful and vibrant illustrations, the interaction speaks thus to the user’s emotions rather than it’s intellect.
          </small>
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
      <Title label='Meditation program' className='half' summary='A frequently updated meditation package is avalaible to the user, offering new inner experiences every weeks.' />

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
          <p>The app also offer a sleep tracking system where the user can set the desired amount of sleep each night.</p>
        </div>
      </Body>
    </Article>

    <Article name='Music' spaced={true} className='purpleBkg round'>
      <Body>

        <div className="musicWave"></div>
        <div className="musicWave"></div>
        <div>
          <h2>Music speaker</h2>
          <p>As the pod is also a music speaker, the app offers a playlist system where the user can play recommended mixes or create personal playlists.</p>
        </div>
        <div style={{ flexBasis: '80%' }}> <Img className='padded small' src="/assets/projects/mengfeng/mockups/speaker.webp" /> </div>
      </Body>
    </Article>

    <Article name='Routine setup' spaced={true} className='purpleBkg round'>
      <Body>
        <Img className='padded small' src="/assets/projects/mengfeng/mockups/schedule.webp" />
        <div className='compress'>
          <h2>Routine setup</h2>
          <p>Most of the previous features can be scheduled in weekly routines.</p>
        </div>
      </Body>
    </Article>


    {/*<Article name='Wireframes' spaced={true}>
            <Body title="Wireframes">
                <Img src="/assets/projects/mengfeng/wireframe.webp"/>
            </Body>
        </Article>*/}

    <Article name='UI Overview' spaced={true} className='purpleBkg'>
      <Parallax src='/assets/projects/mengfeng/wide_parallax.webp' />
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
