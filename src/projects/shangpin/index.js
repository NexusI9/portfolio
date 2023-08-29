import {Article, Body, Gallery, Title, Video} from '../../components/Folio';

const galleryRoutes = {
    technology:[
      {type:'base', folder:'/shangpin/technology/', pictures:['miapackage', 'miacloth', 'mialogo']},
      {type:'split', folder:'/shangpin/technology/', pictures:['poster_1', 'poster_2']}
    ],
    cosmetic:[
        {type:'base', folder:'/shangpin/cosmetic/', pictures:['lipstick_cherry'] },
        {type:'invertedbase', folder:'/shangpin/cosmetic/', pictures:['ardente','casadelia','marsperfume'] }
    ],
    food:[
      {type:'base', folder:'/shangpin/food/', pictures:['manmanchi','bingcha','bingcha_1'] },
      {type:'split', folder:'/shangpin/food/', pictures:['yuebing','islandsoda'] },
      {type:'invertedbase', folder:'/shangpin/food/', pictures:['traditionaltea','traditionaltea_2','traditionaltea_1'] }
    ],
    clothing:[
        {type:'base', folder:'/shangpin/clothing', pictures:['sneaker'] },
        {type:'base', folder:'/shangpin/clothing', pictures:['watch'] }
    ]
  }

export default () => {

    return (
        <>

            <Article spaced={true}>
                <Body>
                    <Video id={787395416} autoplay={true} controls={false}/>
                </Body>
            </Article>

            <Article spaced={true}>
                <Title  label='#01 Technology'  className='half' />
                <Body flexDirection='vertical'>
                    <Gallery galleries={galleryRoutes} galleryKey='technology'/>
                </Body>
            </Article>

            <Article spaced={true}>
                <Title  label='#02 Cosmetic'  className='half' />
                <Body flexDirection='vertical'>
                    <Gallery galleries={galleryRoutes} galleryKey='cosmetic'/>
                </Body>
            </Article>

            <Article spaced={true}>
                <Title  label='#03 Food'  className='half' />                
                <Body flexDirection='vertical'>
                    <Gallery galleries={galleryRoutes} galleryKey='food'/>
                </Body>
            </Article>

            <Article spaced={true}>
                <Title  label='#04 Clothing'  className='half' />             
                <Body flexDirection='vertical'>
                    <Gallery galleries={galleryRoutes} galleryKey='clothing'/>
                </Body>
            </Article>
        
        </>
    );

}