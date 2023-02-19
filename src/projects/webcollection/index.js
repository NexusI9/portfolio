import {Article, Body, Gallery, Video} from '../../components/Folio';

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

      <Article name='Samsara' spaced={true}>
        <Body title='#02 Samsara' flexDirection='vertical'>
          <Video id='624838990' placeholder={'/assets/thumbnails/samsara2.jpg'}/>
          <Gallery galleries={galleryRoutes} galleryKey='samsara' />
          {/*<Video id='624828044' />*/}
        </Body>
      </Article>

    </>
  );
}
