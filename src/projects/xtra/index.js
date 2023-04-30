import {Article, Body, Gallery, Title, Space, Pointer, Img, Parallax} from '../../components/Folio';

import logo from './assets/xtralogo.svg';
import baijam from './assets/baijam.svg';

export default () => (
    <>
      <Article spaced={true} name='Introduction'>
        <Space type='small' />
        <Body style={{columnGap:'10%'}} className='flex' >
          <div style={{flexBasis: '50%', boxSizing:'border-box'}}>
            <h2>An <i><b>XTRA</b></i> project</h2>
            <br/>
            <p>
                XTRA is a data privacy company providing many services such as cybersecurity analysis as well as server installation and infranet setups. The company also offers awareness programs to help business educates their employees on best practices.
                <br /><br/>
                Hence, the following websites gather a certain amount of services and functionalities to bring out XTRA wealth of services in the most efficient way. 
            </p>
          </div>
          <div style={{flexBasis: '70%'}} >
            <Img src='/assets/projects/xtra/homepage.webp' />
          </div>
        </Body>
        <Space type='small'/>
        <Body flexDirection='vertical'>
          <Gallery galleries={
            {
              gallery_1: [
                {type:'base', folder:'/xtra/g1/', pictures:['xtra_0','xtra_1', 'xtra_3']},
                {type:'split', folder:'/xtra/g2/', pictures:['xtra_5','xtra_6']},
                {type:'invertedbase', folder:'/xtra/g3/', pictures:['xtra_4','xtra_7', 'xtra_8']},
                {type:'split', folder:'/xtra/g4/', pictures:['xtra_9','xtra_10', 'xtra_11']},
                {type:'split', folder:'/xtra/g5/', pictures:['xtra_12','xtra_13', 'xtra_14']},
                ]}} galleryKey='gallery_1'/>
        </Body>
      </Article>
  
  
      <Article spaced={true}>
         <Parallax src='/assets/projects/xtra/wide_parallax_xtra.webp'/>
      </Article>

  
      <Article name='Infinity scroll' spaced={true} className='backdrop center fill'>
        <Title label="Overall aesthetic" className='half' summary='The brand heavily rely on tech and cybernetics illustrations to break the usual austerity and sometimes complex Data Privacy semantic, giving the customer a sense of comfort as his journey is supported by visuals.' />
        <Space type='small'/>
        <Body flexDirection='horizontal' className='reverse vcenter'>
          <Img className='stickToLeft' alt='poster mode' src='/assets/projects/xtra/cybernetic.webp'/>
          <Pointer style={{flexBasis:'40%'}} title='Cybernetic visuals' description='In order to enhance user’s navigation, each XTRA’s page use a themed cybernetic illustration to give customer hints about what to except on this page on top of making his experience visually richer.'/>
        </Body>
        <Space type='small'/>
        <Body flexDirection='horizontal' className='vcenter'>
          <Pointer style={{flexBasis:'40%'}} side='right' title='Material textures' description={
            <>
            By providing server installations for customers or businesses, XTRA’s services not only live in the digital world but also within the physical one. 
            <br/>It thus felt important to inject some materiality in the website by the use of abstract textures to expand the art direction out of the digital world boundaries.
            </>
          }/>
          <Img className='stickToRight' alt='poster mode' src='/assets/projects/xtra/textures.webp' />
        </Body>
        <Space type='small'/>
      </Article>



      <Article id='xtraLogo_introduce' spaced={true} className='backdrop center fill whitecolor'>
        <Title label="The guidestyle" className='compressed' style={{textAlign:'center'}}/>
        <Space type='small'/>
        <Body flexDirection='vertical'>
                <section className='half'>
                    <h5>The logotype</h5>
                    <p>
                        XTRA’s logo borrows futuristic elements such as diagonals and streamlined curves to convey a sense of speed, strength but also stability. 
                        Similar to a flight company that will skyrocket your business with its powerful and secure tools.
                    </p>
                </section>
                <img alt='xtra logo' src={logo.src}/>
            </Body>
            <Body flexDirection='vertical' id='xtra_typecolor'>
            <section className='half' >
              <h5>Typeface & Color swatch</h5>
              <p>XTRA branding mainly takes inspiration in science-fiction’s aesthetic, wether in its typeface or choice of colors. <br/> The design also put in contrast darker areas brighten up by visuals, with white-themed sections for a clear and segmented navigation.</p>
            </section>
            <div className='tableGroup'>
            <table>
                <thead>
                  <tr>
                    <td>
                      <h5>Typeface</h5>
                    </td>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <img src={baijam.src} />
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
                        <span className='colorswatch primaryColor' style={{backgroundColor: '#F8F7F4'}}></span>
                        <span className='colorswatch primaryColor' style={{backgroundColor: '#D74545'}}></span>
                        <span className='colorswatch primaryColor' style={{backgroundColor: '#132534'}}></span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Secondary swatch</p>
                      <div className='packColor'>
                        <span className='colorswatch' style={{backgroundColor: '#E6E7F4'}} ></span>
                        <span className='colorswatch' style={{backgroundColor: '#DFDDE6'}} ></span>
                        <span className='colorswatch' style={{backgroundColor: '#D8A6A6'}} ></span>
                        <span className='colorswatch' style={{backgroundColor: '#C02C41'}} ></span>
                        <span className='colorswatch' style={{backgroundColor: '#4F5465'}} ></span>
                        <span className='colorswatch' style={{backgroundColor: '#050101',border: 'solid 1px #444d6660'}} ></span>
                      </div>
                    </td>
                  </tr>
                    
                </tbody>
            </table>

            </div>
            </Body>
            <Space type='small'/>
      </Article>
  


      <Article name='Blog'>
        <Body style={{columnGap:'10%'}} className='flex vcenter' >
          <div>
            <h2>A blog to enhance customers awareness</h2>
            <br/>
            <p>
              In order to stay relevant SEO wise as well as positioning themselves as experts in the field, XTRA has also a blog where they can share news about the cyberworld but also sharing their latests installations and webinars.
              <br/><br/>
              The customer can search specific articles either by keywords of by categories (such as Data Privacy, Infranet, Webinars...) 
            </p>
          </div>
          <div style={{flexBasis:'110%'}}>
            <Img src='/assets/projects/xtra/blog.webp' />
          </div>
        </Body>
        <Space type='small'/>
      </Article>

      <Article name='Newsletter' spaced={true}>
        <Space type='small'/>
        <Body style={{columnGap:'10%'}} className='reverse'>
        <div style={{flexBasis:'50%'}}>
            <Img src='/assets/projects/xtra/newsletter.webp' />
          </div>
          <div>
            <h2>Lead magnet & newsletter</h2>
            <br/>
            <p>
              For every businesses but especially small ones, it is important to start building a database of qualified leads for loyalty concerns.
              <br/>
              As a result, each pages conclude with a form inviting the customer to subscribe to the company’s newsletter.
              </p>
          </div>
        </Body>
      </Article>

      <Article spaced={true} name='The map' id='xtra_map' className='backdrop whitecolor'>
      <Title 
        label='The map'
        summary="As a local business it felt important for the company to make sure its customer will be able to be serviced by the company. Thus XTRA’s website also has a map with a location filtering system, allowing the customer to know if his district or area is serviced by XTRA." 
        className='half'
        />
        <Space type='small'/>
        <Img alt='laos dark theme screenshot' src='/assets/projects/xtra/map.webp' />
      </Article>

  
  </>
  );
  