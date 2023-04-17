import {Article, Body, Img, Video} from '../../components/Folio';

export default () => (
  <>
   <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
      <Video id={510782114} placeholder={'/assets/thumbnails/urbexe.webp'}/>
    </Body>
    </Article>

    <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
    <Img src="/assets/projects/urbexe/0.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/1.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/2.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/3.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/4.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/5.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/6.webp" alt="UrbEXE" />
    <Img src="/assets/projects/urbexe/7.webp" alt="UrbEXE" />
    </Body>
    </Article>
  </>
);
