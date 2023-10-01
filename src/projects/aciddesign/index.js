import { Article, Body, Title, Gallery, Space } from '../../components/Folio';
import galleryRoute from './gallery';

export default () => (
  <>
    <Article spaced={true} name='#01 Holospace'>
      <Title
        label='Holospace'
        summary={<>
          The Holospace (by Trilobeat), reimagines audio speakers as a dynamic holographic experience. This innovative product expands the traditional audio listening experience by projecting soundwaves synchronizing with the consummer’s music.
          <br />The core concept of the Holospace revolves around merging cutting-edge audio technology with captivating yet subtle visuals, offering consumers an immersive and multisensory music experience that easily fit in any context and environment.
        </>}
      />
      <Body flexDirection='vertical' >
        <h4>Product Design & Packaging</h4>
        <p className='article-margin-bottom'>
          Holospace's product design and packaging are characterized by a blend of primitivism and sustainability. Crafted from a durable and solid dark metal alloy, the product exudes a sense of minimalistic elegance reminiscent of furniture.
          <br />Its shape draws inspiration from monoliths, projecting an aura of strength and upward movement, visually echoing the audio waves it emits.
          The product's control system follows a minimalistic approach, seamlessly integrated at the top for user easy access. The packaging is thoughtfully designed to align with the product's aesthetics, taking on the shape of a prism adorned with strong and elemental geometric shapes such as triangles, circles, and ellipses.
          This design approach not only enhances the overall user experience but also underscores the brand's commitment to sustainability through the use of eco-conscious and sustainable materials.
        </p>
        <Gallery galleries={galleryRoute} galleryKey='holospace_product' />
      </Body>
      <Space type='small' />
      <Body flexDirection='vertical' >
        <h4>Branding</h4>
        <p className='article-margin-bottom'>
          Trilobeat's branding uses a juxtaposition of modernism and nature-inspired elements. The logotype itself "Trilobeat" blends modernistic typography with a contemporary color palette along with textures evoking the rugged beauty of nature, including rock formations, oceanic motifs, and the fluidity of waves.
          <br />This strong contrast creates a unique visual identity that embodies both technological paradigm and a deep connection to the natural world. The challenge was to strike a harmonious balance between these seemingly disparate elements, ultimately creating a brand that resonates with consumers seeking a blend of innovation and authenticity in their audio technology choices.
        </p>
        <Gallery galleries={galleryRoute} galleryKey='holospace_branding' />
      </Body>
    </Article>

    <Article spaced={true} name='#02 The Comet'>
      <Title
        label='The Comet'
        summary={<>
          The Comet is a space community and astrophysics news app on an astronomical scale.
          This innovative platform aims to connect space enthusiasts and astrophysicists across the galaxy by providing a central hub for discussions and information sharing.
          The core concept is to facilitate user-driven communities and collaboration in the field of space exploration.
        </>}
      />
      <Body flexDirection='vertical' >
        <h4>App UX/UI Design</h4>
        <p className='article-margin-bottom'>
          Design wise, the app's UX/UI draws inspiration from well-known forums and social media platforms, incorporating familiar layout and functionalities for users comfort. It includes features like boards, channels, and story-like mechanics, enabling users to build and share in their own communities. This direction enhances user engagement and fosters a sense of community ownership.
        </p>
        <Gallery galleries={galleryRoute} galleryKey='comet' />
      </Body>
    </Article>

    <Article spaced={true} name='#03 Spice Jam'>
      <Title
        label='SPICE JAM'
        summary={<>
          Famously known for it's top quality psychotropic brewings and herbal blends, Spice Jam is a nutrition company making it's consummer dream and transcend since 1969.
          <br />Drawing inspiration from a rich history of psychotropic brews and herbal blends, Spice Jam not only seeks to fulfill consumers' dreams, but also to sparks excitement and curiosity through a visually appealing and playful wide products variety. The project main concept revolves around incorporate contemporary customer values in a vintage inspired aesthetic.
          <br />A notable challenge was to seamlessly introduce the nostalgia of yesteryears while avoiding the sense of kitsch often given to the psychedelic genre, offering a product that not only caters to the senses but also nourishes the body.
        </>}
      />
      <Body flexDirection='vertical' >
        <h4>Packaging & collaterals</h4>
        <p className='article-margin-bottom'>
          The packaging of Spice Jam represents a careful fusion of eco-consciousness and psychedelic vibrancy. By opting for natural and eco-friendly materials like craft paper, this section of the project addresses the growing consumer demand for sustainability.
          <br />At the same time, the packaging design contrasts the modest craft paper material with vivid illustrations of mountains, paired with a burst of colors reminiscent of the psychedelic era.
          <br />The challenge here was to strike the perfect balance between sustainability and visually appealing, immersive packaging.
        </p>
        <Gallery galleries={galleryRoute} galleryKey='spicejam_packaging' />
      </Body>
      <Space type='small' />
      <Body flexDirection='vertical' >
        <h4>Logotype & application</h4>
        <p className='article-margin-bottom'>
          Spice Jam’s logo draws inspiration from the iconic "Orange Sunshine" emblem, paying homage to an era marked by cultural and artistic revolution. The logotype itself, with its strong typeface, mirrors the hazy, enigmatic atmosphere of the psychedelic era.
          <br />But the true strength lies in the use of holographic reflective textures on business cards. This choice not only echoes the brand's psychedelic roots but also adds a futuristic and captivating dimension to its identity. The challenge here is to maintain a delicate balance between nostalgia and forward-looking innovation, ultimately creating a brand that resonates with both past and future generations fitting today’s customers needs and concerns.
        </p>
        <Gallery galleries={galleryRoute} galleryKey='spicejam_branding' />
      </Body>
    </Article>


    <Article spaced={true} name='#04 3DEN'>
      <Title
        label='3DEN'
        summary={
          <>
            Established since 3045, 3DEN has firmly positioned itself as the foremost electronic retailer of erotic and adult products in its era. The brand's diverse range of offerings spans from high-quality Simstims to state-of-the-art androids, providing a space where individuals can explore their most intimate desires. The brand boldly delves into the depths of human desire and offers a wide spectrum of products and experiences, often considered taboo or controversial. The challenge for 3DEN lies in creating an environment that is both welcoming, appealing and unapologetically provocative, catering to a diverse and evolving consumer base.
          </>}
      />

      <Body flexDirection='vertical' >
        <h4>Logotype & collaterals</h4>
        <p className='article-margin-bottom'>
        The logotype of 3DEN embodies a distinctive visual identity that mirrors the brand's bold and unapologetic nature. It features a strong gothic typeface with a tailor-made design, enhanced by bold bevel textures. The color palette leans heavily on vibrant pink hues, accentuating the brand's audacious and daring character. 3DEN understands that it sells products and services that provoke debate and scrutiny, and it fully embraces this aspect of its identity. 
        <br/>The logotype serves as a visual representation of the brand's commitment to pushing boundaries and challenging societal norms. The challenge in this design was to strike a balance between a bold, provocative aesthetic and a coherent and recognizable brand image that speaks to its target audience.
        </p>
        <Gallery galleries={galleryRoute} galleryKey='eden' />
      </Body>
    </Article>


  </>
);
