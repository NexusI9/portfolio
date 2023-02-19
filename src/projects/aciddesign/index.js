import {Article, Body, Title, Gallery} from '../../components/Folio';

export default () => {

  const galleryRoute = {
    holospace:[
        { type:'base', folder:'/aciddesign/holospace/g1', pictures:['holo_1', 'holo_2', 'holo_3'] },
        { type:'split', folder:'/aciddesign/holospace/g2', pictures:['holo_4','holo_5']}
      ],
    comet:[
      { type:'base', folder:'/aciddesign/thecomet/g1', pictures:['comet_1', 'comet_2', 'comet_5'] },
      { type:'split', folder:'/aciddesign/thecomet/g2', pictures:['comet_3','comet_4']}
    ],
    spicejam:[
        { type:'base', folder:'/aciddesign/spicejam/g1', pictures:['sp_0', 'sp_1', 'sp_2'] },
        { type:'split', folder:'/aciddesign/spicejam/g2', pictures:['sp_4','sp_5','sp_6','sp_7']},
        { type:'invertedbase', folder:'/aciddesign/spicejam/g3', pictures:['sp_8','sp_9','sp_10']}
      ],
    eden:[
      { type:'base', folder:'/aciddesign/3den/g1', pictures:['3den_1', '3den_7', '3den_8'] },
      { type:'split', folder:'/aciddesign/3den/g2', pictures:['3den_6','3den_5']},
    ]
  };




  return(
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
}
