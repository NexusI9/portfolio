import {Article, Body, Gallery, Title, Img, Video, Parallax} from '@/components/Folio';

const galleryRoutes = {
  product:[
    {type:'window', folder:'/mengfeng/', pictures:['prod_1', 'prod_2']},
    {type:'base', folder:'/mengfeng/', pictures:['prod_3', 'prod_4', 'prod_5']}
  ],
  logo:[
    {type:'split', folder:'/mengfeng/', pictures:['brandpack','visitcard'] },
    {type:'split', folder:'/mengfeng/', pictures:['logo_black','logo_mid','logo_AIO'] }
  ]
}

export default () => (
  <>
        <Article name='Product Design' spaced={true} >
            <Body flexDirection='vertical' title='Product Design'>
              <Video id={632750562} placeholder={'/assets/thumbnails/mengfeng.jpg'}/>
              <Gallery galleries={galleryRoutes} galleryKey='product' />
            </Body>
        </Article>

        <Article name='Logotype' spaced={true}>
            <Body flexDirection='vertical' title='Logotype & Branding'>
              <Gallery galleries={galleryRoutes} galleryKey='logo' />
            </Body>
        </Article>

        {
        /*<Article header='Banner' spaced={true}>
            <Body>
              <Img src="/assets/projects/mengfeng/banner.jpg" className='round'/>
            </Body>
        </Article>*/
        }


        <Article name='UI Overview' spaced={true} className='purpleBkg'>
            <Parallax src='/assets/projects/mengfeng/parallax.jpg'/>
        </Article>


        <Article header='Pod pairing' spaced={true} className='purpleBkg round'>
            <Body flexAlignement='centered' style={{textAlign:'center'}}>
              <div>
                <h2>Pod pairing</h2>
                <p>The user pair the pod to a smartphone through a simple 3 steps process.</p>
              </div>
            </Body>
            <Body id='pairing' className='padded'>
                <Img className='compress' src="/assets/projects/mengfeng/mockups/wake_1.png"/>
            </Body>
        </Article>

        <Article header='Profile setup' spaced={true} className='purpleBkg round'>
            <Body>
                  <div><Img className='padded small' src="/assets/projects/mengfeng/mockups/profile.png"/></div>
                  <div>
                    <h2>Profile setup</h2>
                    <p>The user will now enter various information and preferences so the application will adapts itself to the user preferences (music, meditation level...)</p>
                    <br/>
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
              <Img src="/assets/projects/mengfeng/mockups/module.png"/>
            </div>
          </Body>
        </Article>
        */}

      <Article name='Meditation' spaced={true} className='purpleBkg round'>
        <Title label='Meditation program' className='half' summary='A frequently updated meditation package is avalaible to the user, offering new inner experiences every weeks.'/>

          <Body>
            <div className='compress' style={{position:'relative'}}> <Img style={{height:'100%'}} id='zenIllu' className='hidtablet' src="/assets/projects/mengfeng/zen.png"/> </div>
            <div> <Img className='padded small'  src="/assets/projects/mengfeng/mockups/meditation.png"/> </div>
          </Body>
        </Article>

        <Article name='Diffuser' spaced={true} id='diffuse_lumino' className='backdrop center'>
          <Body>
            <div className='padright'>
              <h2>Diffuser Controls</h2>
              <p>The user can in a touch activate the pod’s essential oil diffuser as well as controlling either the diffusion time or the flow intensity </p>
            </div>
            <div style={{flexBasis:'80%'}}> <Img src="/assets/projects/mengfeng/mockups/luminoDiffuse.png"/> </div>
            <div className='padleft'>
              <h2>Lumino therapy</h2>
              <p>Lumino therapy is also one the many features the pod can do ! The user can thus choose between various animations and light programs.</p>
            </div>
          </Body>
        </Article>




        <Article name='Sleep session' spaced={true} className='purpleBkg round'>
          <Body className='reverse'>
            <div style={{flexBasis:'50%'}}> <Img className='padded small'  src="/assets/projects/mengfeng/mockups/alarm_1.png"/> </div>
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
            <div style={{flexBasis:'80%'}}> <Img className='padded small'  src="/assets/projects/mengfeng/mockups/speaker.png"/> </div>
          </Body>
        </Article>

        <Article name='Routine setup' spaced={true} className='purpleBkg round'>
          <Body>
            <Img className='padded small' src="/assets/projects/mengfeng/mockups/schedule.png"/>
            <div className='compress'>
              <h2>Routine setup</h2>
              <p>Most of the previous features can be scheduled in weekly routines.</p>
            </div>
          </Body>
        </Article>


        {/*<Article name='Wireframes' spaced={true}>
            <Body title="Wireframes">
                <Img src="/assets/projects/mengfeng/wireframe.png"/>
            </Body>
        </Article>*/}

        <Article name='Userflow' spaced={true} className='purpleBkg round'>
            <Body flexDirection='vertical' title='Userflow'>
              <div id='userflow'>
                <Img src="/assets/projects/mengfeng/userflow.svg"/>
              </div>
            </Body>
        </Article>


  </>
);
