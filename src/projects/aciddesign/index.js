import {Article, Body, Title, Gallery} from '../../components/Folio';
import galleryRoute from './gallery';

export default () => (
    <>
        <Article spaced={true} name='#01 Holospace'>
          <Title
            label='#01 Holospace' 
            summary="Sold by Trilobeat, the Holospace is a holographic audio speaker projecting soundwaves and a spectrum of others visuals according to the user's music playing"
            className='half' 
          />
          <Body flexDirection='vertical' >
            <Gallery galleries={galleryRoute} galleryKey='holospace'/>
          </Body>
        </Article>

        <Article spaced={true} name='#02 The Comet'>
        <Title
            label='#02 The Comet'
            summary="The Comet is galaxy's largest Space community and Astrophysics news feed." 
            className='half' 
          />
          <Body flexDirection='vertical' >
            <Gallery galleries={galleryRoute} galleryKey='comet'/>
          </Body>
        </Article>

        <Article spaced={true} name='#03 Spice Jam'>
        <Title
            label='#03 SPICE JAM'
            summary="Famously known for it's top quality psychotropic brewings and herbal blends, Spice Jam is a nutrition company making it's consummer dream and transcend since 1969."
            className='half' 
          />
          <Body flexDirection='vertical' >
            <Gallery galleries={galleryRoute} galleryKey='spicejam'/>
          </Body>
        </Article>


        <Article spaced={true} name='#04 3DEN'>
        <Title
            label='#04 3DEN'
            summary={
            <>
              Since 3045, 3DEN has seen itself becoming the #1 electronic retailers of erotic and adult products.
              Selling a variety of goods going from top quality Simstims* to androids, 3DEN is a place where everyone can unleash their deepest, and way too often, darkest pleasures.
            </>}
            className='half' 
          />
          <Body flexDirection='vertical' >
            <Gallery galleries={galleryRoute} galleryKey='eden'/>
          </Body>
        </Article>


    </>
  );
