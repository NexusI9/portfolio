import { Article, Body, Gallery, Title, Space, Pointer, Img, Parallax } from '../../components/Folio';

import logo from './assets/xtralogo.svg';
import baijam from './assets/baijam.svg';



export default () => (
  <>
    <Article spaced={true} name='Introduction'>
      <Space type='small' />
      <Body style={{ columnGap: '10%' }} className='flex' >
        <div style={{ flexBasis: '50%', boxSizing: 'border-box' }}>
          <h2>An <i><b>XTRA</b></i> project</h2>
          <br />
          <p>
            XTRA is a data privacy company providing many services such as cybersecurity analysis as well as server installation and infranet setups. The company also offers awareness programs to help business educates their employees on best practices.
            <br /><br />
            Hence, the following websites gather a certain amount of services and functionalities to bring out XTRA wealth of services in the most efficient way.
          </p>
        </div>
        <div style={{ flexBasis: '70%' }} >
          <Img src='/assets/projects/xtra/homepage.webp' />
        </div>
      </Body>
    </Article>

    <Article spaced={false}>
      <Parallax
        src='/assets/projects/xtra/wide_parallax_xtra.webp'
        title='The Website'
        description={<>
          The XTRA website serves as a comprehensive platform to showcase the brand's extensive range of B2C and B2B services and products. In an era where data privacy is of paramount importance, the brand's strategic approach focuses on not only educating customers about the significance and necessity of cybersecurity but also on highlighting why XTRA stands out as a reliable expert in secure IT equipment setup.
          <br />This strategic direction aims to foster trust among prospects as they navigate the site.
          A notable challenge was crafting inclusive content that caters to both individuals seeking small-scale solutions and established businesses looking to scale their infranet. The site's design ensures accessibility while addressing the diverse needs of users.
        </>}
      />
    </Article>

    <Article spaced={true} name='snapshots'>
      <Space type='small' />
      <Body flexDirection='vertical'>
        <Gallery galleries={
          {
            gallery_1: [
              { type: 'split', folder: '/xtra/g0/', pictures: ['xtra_15'] },
              { type: 'split', folder: '/xtra/g0/', pictures: ['xtra_16'] },
              { type: 'split', folder: '/xtra/g1/', pictures: ['xtra_0', 'xtra_1', 'xtra_3', 'xtra_5'] },
              { type: 'split', folder: '/xtra/g3/', pictures: ['xtra_6', 'xtra_4', 'xtra_7', 'xtra_8'] },
              { type: 'split', folder: '/xtra/g4/', pictures: ['xtra_9', 'xtra_10', 'xtra_11', 'xtra_12'] },
              { type: 'split', folder: '/xtra/g5/', pictures: ['xtra_13', 'xtra_14'] },
            ]
          }
        } galleryKey='gallery_1' />
      </Body>
    </Article>


    <Article name='Infinity scroll' spaced={true} className='backdrop center fill'>
      <Title label="Overall aesthetic" className='half' summary='The brand heavily rely on tech and cybernetics illustrations to break the usual austerity and sometimes complex Data Privacy semantic, giving the customer a sense of comfort as his journey is supported by visuals.' />
      <Space type='small' />
      <Body flexDirection='horizontal' className='reverse vcenter'>
        <Img className='stickToLeft' alt='poster mode' src='/assets/projects/xtra/cybernetic.webp' />
        <Pointer style={{ flexBasis: '40%' }} title='Cybernetic visuals' description='In order to enhance user’s navigation, each XTRA’s page use a themed cybernetic illustration to give customer hints about what to except on this page on top of making his experience visually richer.' />
      </Body>
      <Space type='small' />
      <Body flexDirection='horizontal' className='vcenter'>
        <Pointer style={{ flexBasis: '40%' }} side='right' title='Material textures' description={
          <>
            By providing server installations for customers or businesses, XTRA’s services not only live in the digital world but also within the physical one.
            <br />It thus felt important to inject some materiality in the website by the use of abstract textures to expand the art direction out of the digital world boundaries.
          </>
        } />
        <Img className='stickToRight' alt='poster mode' src='/assets/projects/xtra/textures.webp' />
      </Body>
      <Space type='small' />
    </Article>



    <Article id='xtraLogo_introduce' spaced={true} className='backdrop center fill whitecolor'>
      <Title label="The guidestyle" className='compressed' style={{ textAlign: 'center' }} />
      <Space type='small' />
      <Body flexAlignement='centered'>
        <section className='half'>
          <h5>The logotype</h5>
          <p>
            XTRA’s logo borrows futuristic elements such as diagonals and streamlined curves to convey a sense of speed, strength but also stability.
            Similar to a flight company that will skyrocket your business with its powerful and secure tools.
          </p>
        </section>
        <img alt='xtra logo' src={logo.src} />
      </Body>
      <Body flexDirection='vertical' id='xtra_typecolor'>
        <section className='half' >
          <h5>Typeface & Color swatch</h5>
          <p>XTRA branding mainly takes inspiration in science-fiction’s aesthetic, wether in its typeface or choice of colors. <br /> The design also put in contrast darker areas brighten up by visuals, with white-themed sections for a clear and segmented navigation.</p>
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
                    <span className='colorswatch primaryColor' style={{ backgroundColor: '#F3F7FC' }}></span>
                    <span className='colorswatch primaryColor' style={{ backgroundColor: '#D74545' }}></span>
                    <span className='colorswatch primaryColor' style={{ backgroundColor: '#132534' }}></span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <p>Secondary swatch</p>
                  <div className='packColor'>
                    <span className='colorswatch' style={{ backgroundColor: '#E6E7F4' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#DFDDE6' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#D8A6A6' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#C02C41' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#4F5465' }} ></span>
                    <span className='colorswatch' style={{ backgroundColor: '#050101', border: 'solid 1px #444d6660' }} ></span>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </Body>
      <Space type='small' />
    </Article>



    <Article name='Blog'>
      <Body style={{ columnGap: '5%' }} className='flex vcenter' >
        <div>
          <h2>Nurturing the SEO through a content strategy</h2>
          <br />
          <p>
            The blog page serves as a multi-purpose platform for XTRA to share their latest cybersecurity installations and updates.
            From a strategy standpoint, it's a space where the brand establishes itself as a thought leader and expert in the field, bolstering their inbound marketing efforts and enhancing their organic search visibility.
            <br />This dual functionality also encompasses archiving webinars, offering valuable resources for users seeking deeper insights into cybersecurity trends and practices.</p>
        </div>
        <div style={{ flexBasis: '90%' }}>
          <Img src='/assets/projects/xtra/blog.webp' />
        </div>
      </Body>
      <Space type='small' />
    </Article>

    <Article name='Newsletter' spaced={true}>
      <Space type='small' />
      <Body style={{ columnGap: '10%' }} className='reverse'>
        <div style={{ flexBasis: '50%' }}>
          <Img src='/assets/projects/xtra/newsletter.webp' />
        </div>
        <div>
          <h2>Lead generation form</h2>
          <br />
          <p>
            As an emerging brand working to establish its presence, XTRA recognizes the importance of adopting a lead generation strategy alongside their inbound approach.
            <br /> Throughout most of the pages, the newsletter subscription form allows leads to receive the latest promotions and updates on cybersecurity.
            This strategy not only enhances user engagement but also lays the foundation for a growing community of individuals interested in staying informed about the evolving landscape of information security.
          </p>
        </div>
      </Body>
    </Article>

    <Article spaced={true} name='The map' id='xtra_map' className='backdrop whitecolor'>
      <Title
        label='Interactive map'
        summary={
          <>
            An interactive map feature on the site empowers users to quickly determine whether XTRA's installation services extend to their city or region.
            This innovative addition greatly enhances user experience, providing a seamless way for potential customers to ascertain the brand's service availability.
            <br />By incorporating digital tools like this map, XTRA illustrates its commitment to making cybersecurity services accessible and tailored to individual or business needs.
          </>}
        className='half'
      />
      <Space type='small' />
      <Img alt='laos dark theme screenshot' src='/assets/projects/xtra/map.webp' />
    </Article>


  </>
);
