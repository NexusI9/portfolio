import { Article, Gallery, Body, Video } from '../../components/article';

const galleryRoutes = {
  g1:[
    {type:'split', folder:'/cyberrave',pictures:['cr_1','cr_4','cr_2']},
    {type:'base', folder:'/cyberrave',pictures:['cr_8','cr_3','cr_5']},
    {type:'split', folder:'/cyberrave',pictures:['cr_6','cr_7']}
  ]
}

export default () => (
  <>

    <Article spaced={true}>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='g1'/>
      </Body>
    </Article>


    <Article spaced={true}>
      <Body flexDirection='vertical'>
          <div><Video id={503762124} placeholder={'/assets/thumbnails/cyber1.jpg'} autoplay={true} pending={true}/></div>
      </Body>
    </Article>

    <Article spaced={true}>
      <Body flexDirection='vertical'>
          <div><Video id={503762148} placeholder={'/assets/thumbnails/cyber2.jpg'} autoplay={true} pending={true}/></div>
      </Body>
    </Article>

  </>
);
