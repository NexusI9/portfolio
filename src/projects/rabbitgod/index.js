import { Article, Gallery, Body } from '../../components/article';


const galleryRoute = {
  g1:[ {type:'base', folder:'/rabbitgod',pictures:['rabbit_1','rabbit_2','rabbit_4']} ],
  g2:[ {type:'split', folder:'/rabbitgod',pictures:['rabbit_3','rabbit_5','rabbit_6']} ]
}

export default () => (
  <>
    <Article>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoute} galleryKey='g1' />
      </Body>
    </Article>

    <Article>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoute} galleryKey='g2' />
      </Body>
    </Article>
  </>
);
