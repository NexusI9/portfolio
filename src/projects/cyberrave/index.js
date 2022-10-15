import { Article, Gallery, Body, Video } from '../../components/article';

const galleryRoutes = {
  g1:[
    {type:'split', folder:'/cyberrave',pictures:['cr_1','cr_4','cr_2']}
  ],
  g2:[
    {type:'split', folder:'/cyberrave',pictures:['cr_3','cr_5']}
  ],
  g3:[
    {type:'split', folder:'/cyberrave',pictures:['cr_6','cr_7']}
  ]
}

export default () => (
  <>

    <Article>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='g1'/>
      </Body>
    </Article>

    <Article>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='g2'/>
      </Body>
    </Article>
    <Article>

      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='g3'/>
      </Body>
    </Article>

    <Article>
      <Body flexDirection='horizontal'>
          <div><Video id={503762124} placeholder={'/assets/thumbnails/cyber1.jpg'}/></div>
          <div><Video id={503762148} placeholder={'/assets/thumbnails/cyber2.jpg'}/></div>
      </Body>
    </Article>

  </>
);
