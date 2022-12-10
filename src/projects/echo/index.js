import { Gallery, Article, Body } from '../../components/article';

const galleryRoutes = {
  g1:[ 
    {type:'window',folder:'/echo/', pictures:['echo1', 'echo2']},
    {type:'window',folder:'/echo/', pictures:['echo3', 'echo4']} 
  ]
}

export default () => (

  <>
    <Article>
        <Body flexDirection='vertical'>
          <Gallery galleries={galleryRoutes} galleryKey='g1'/>
        </Body>
    </Article>

  </>
);
