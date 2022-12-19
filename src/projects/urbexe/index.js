import { Img, Video, Article, Body } from '../../components/article';

export default () => (
  <>
   <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
      <Video id={510782114} placeholder={'/assets/thumbnails/urbexe.jpg'}/>
    </Body>
    </Article>

    <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
    <Img src="/assets/projects/urbexe/0.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/1.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/2.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/3.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/4.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/5.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/6.jpg" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/7.jpg" alt="UrbEXE" />
    </Body>
    </Article>
  </>
);
