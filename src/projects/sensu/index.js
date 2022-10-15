import { Img, Gallery, Article, Body } from '../../components/article';

const galleryRoute = {
  g1:[
    {type:'split', folder:'/sensu/', pictures:['og_3','og_6']}
  ]
}

export default () => (
  <>
    <Article>
      <Body>
        <Img alt="neom" src="/assets/projects/sensu/og_1.jpg" />
      </Body>
    </Article>

    <Article>
      <Body>
        <Img alt="neom" src="/assets/projects/sensu/og_2.jpg" />
      </Body>
    </Article>

    <Article>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoute} galleryKey='g1' />
      </Body>
    </Article>

    <Article>
      <Body>
        <Img alt="neom" src="/assets/projects/sensu/og_4.jpg" />
      </Body>
    </Article>

  </>
);
