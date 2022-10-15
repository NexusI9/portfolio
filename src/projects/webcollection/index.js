import { Article, Gallery, Body, Video, Img } from '../../components/article';

export default () => {

  /*

  {type:'split', folder:'/webcollection/soma', pictures:['breakdown_1', 'breakdown_2', 'breakdown_3']},
  {type:'split', folder:'/webcollection/soma', pictures:['breakdown_4', 'final_illu']}
  */
  const galleryRoutes = {
    soma:[
      {type:'base', folder:'/webcollection/soma', pictures:['1_abv', '2_popular', '3_new']},
      {type:'split', folder:'/webcollection/soma', pictures:['4_sale', '5_gems']},
    ],
    frost:[
      {type:'base', folder:'/webcollection/frost', pictures:['1_abovethefold', '2_tryptic','3_webgl']},
      {type:'split', folder:'/webcollection/frost', pictures:['4_phonecase', '5_slideshow','6_connecting']},
      {type:'window', folder:'/webcollection/frost', pictures:['7_footer', '8_whoarewe']},
    ],
    berryl:[
      {type:'base', folder:'/webcollection/berryl', pictures:['berryl_1']},
      {type:'split', folder:'/webcollection/berryl', pictures:['berryl_2','berryl_3']},
      {type:'split', folder:'/webcollection/berryl', pictures:['berryl_4', 'berryl_5','berryl_6']},
    ],
    samsara:[
      {type:'split', folder:'/webcollection/samsara', pictures:['1_abovethefold','2_picture','3_product']}
    ]
  };

  return(
    <>
      <Article name='Soma' spaced={true}>
        <Body title='#01 Soma' flexDirection='vertical'>
          <Gallery galleries={galleryRoutes} galleryKey='soma'/>
        </Body>
      </Article>

      <Article name='Frost'  spaced={true}>
        <Body title='#02 Frost' flexDirection='vertical'>
          <Gallery galleries={galleryRoutes} galleryKey='frost'/>
        </Body>
      </Article>

      <Article name='Samsara' spaced={true}>
        <Body title='#03 Samsara' flexDirection='vertical'>
          <Video id='624838990' placeholder={'/assets/thumbnails/samsara2.jpg'}/>
          <Gallery galleries={galleryRoutes} galleryKey='samsara' />
          {/*<Video id='624828044' />*/}
        </Body>
      </Article>

      <Article name='Berryl' spaced={true}>
        <Body title='#04 Berryl' flexDirection='vertical'>
          <Gallery galleries={galleryRoutes} galleryKey='berryl'/>
        </Body>
      </Article>
    </>
  );
}
