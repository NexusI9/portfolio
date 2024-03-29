import { Article, Body, Gallery, Title, Space, Pointer, Img, Parallax } from '../../components/Folio';
import PersonaSlider from '@/components/Folio/PersonaSlider';
import logo from './assets/xtralogo.svg';
import baijam from './assets/baijam.svg';
import persona from './persona';
import gallery from './gallery';



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
        src='/assets/projects/xtra/wide-parallax_xtra.webp'
        title='The Website'
        description={<>
          The XTRA website serves as a comprehensive platform to showcase the brand's extensive range of B2C and B2B services and products. In an era where data privacy is of paramount importance, the brand's strategic approach focuses on not only educating customers about the significance and necessity of cybersecurity but also on highlighting why XTRA stands out as a reliable expert in secure IT equipment setup.
          <br />This strategic direction aims to foster trust among prospects as they navigate the site.
          A notable challenge was crafting inclusive content that caters to both individuals seeking small-scale solutions and established businesses looking to scale their infranet. The site's design ensures accessibility while addressing the diverse needs of users.
        </>}
      />
    </Article>

    <Article spaced={true} name='snapshots'>
      <Body flexDirection='vertical' title="Design & Wireframes">
        <Gallery galleries={gallery} galleryKey='website' />
      </Body>
    </Article>


    <Article id='xtraLogo_introduce' spaced={true} className='backdrop center fill whitecolor'>
      <Title
        label="The style guide"
        className='compressed'
        style={{ textAlign: 'center' }} />
      <Space type='small' />
      <Body flexAlignement='centered'>
        <section className='half'>
          <h5>The logotype</h5>
          <p>
            XTRA’s logo borrows futuristic visual language such as diagonals and streamlined curves to convey a sense of speed, strength but also stability.
            Echoing a shield or a flight company that will skyrocket your business with its powerful and secure tools.
          </p>
        </section>
        <img alt='xtra logo' src={logo.src} />
      </Body>
      <hr />
      <Space type='small' />
      <Body flexDirection='vertical' id='xtra_typecolor'>
        <section className='half' >
          <h5>Typeface & Color swatch</h5>
          <p className='article-margin-bottom'>XTRA branding mainly takes inspiration in science-fiction’s aesthetic, wether in its typeface or choice of colors. <br /> The design also put in contrast darker areas brighten up by visuals, with white-themed sections for a clear and segmented navigation.</p>
        </section>
          <Gallery galleries={gallery} galleryKey='guidestyle' />

      </Body>
      <hr />
      <Space type='small' />
      <Body flexDirection='vertical'>
        <section className='half'>
          <h5>Visual semantic</h5>
          <p>
            The brand heavily rely on tech and cybernetics illustrations to break the usual austerity and sometimes complex Data Privacy semantic, giving the customer a sense of comfort as his journey is enlightened by appealing visuals.
          </p>
        </section>
      </Body>
      <Body flexDirection='horizontal' className='reverse vcenter'>
        <Img alt='poster mode' src='/assets/projects/xtra/cybernetic.webp' />
        <Pointer style={{ flexBasis: '40%' }} title='Cybernetic visuals' theme='dark' description='In order to enhance user’s navigation, each XTRA’s page use a themed cybernetic illustration to give customer hints about what to except on this page on top of making his experience visually richer.' />
      </Body>
      <Space type='small' />
      <Body flexDirection='horizontal' className='vcenter'>
        <Pointer style={{ flexBasis: '40%' }} side='right' theme='dark' title='Material textures' description={
          <>
            By providing server installations for customers or businesses, XTRA’s services not only live in the digital world but also within the physical one.
            <br />It thus felt important to inject some materiality in the website by the use of abstract textures to expand the art direction out of the digital world boundaries.
          </>
        } />
        <Img alt='poster mode' src='/assets/projects/xtra/textures.webp' />
      </Body>
      <hr />
      <Space type='small' />
      <Body flexDirection='vertical'>
        <section className='half'>
          <h5>Collaterals & Signage</h5>
          <p>
            XTRA's holistic branding strategy extends beyond the digital realm, creating a 360-degree experience that permeates various touchpoints.
            This comprehensive approach includes a range of collaterals designed to reinforce the brand's identity and message, both within the digital landscape and in physical spaces.
            <br /><br />
          </p>
        </section>
        <Gallery galleries={gallery} galleryKey='brand' />
      </Body>
    </Article>

    <Article name='Strategy'>
      <Body flexAlignement='centered' flexDirection='vertical' style={{ textAlign: 'center' }}>
        <div>
          <h2>Digital strategy</h2>
        </div>
      </Body>
    </Article>


    <Article name='Persona' className='plain'>
      <Body flexDirection='vertical'>
        <div>
          <h5>User personas</h5>
          <p>
            The following personas offer insights into the diverse needs and motivations of different types of customers that XTRA might encounter,
            whether they are B2B corporate entities or individual entrepreneurs.
            This understanding can guide XTRA in tailoring their cybersecurity services to effectively address the specific challenges faced by each persona.
          </p>
        </div>
      </Body>
      <Space type='small' />
      <PersonaSlider personas={persona} />
    </Article>
    <Article name='Blog'>
      <Body style={{ columnGap: '5%' }} className='flex vcenter' >
        <div>
          <h5>Nurturing the SEO through a content strategy</h5>
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
          <h5>Lead generation form</h5>
          <br />
          <p>
            As an emerging brand working to establish its presence, XTRA recognizes the importance of adopting a lead generation strategy alongside their inbound approach.
            <br /> Throughout most of the pages, the newsletter subscription form allows leads to receive the latest promotions and updates on cybersecurity.
            <br />This strategy not only enhances user engagement but also lays the foundation for a growing community of individuals interested in staying informed about the evolving landscape of information security.
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
