import { Img, Video, Article, Body, Gallery } from '../../components/article';

const galleryRoute = {
  acab:[
      { type:'split', folder:'/acab/', pictures:['acab_1', 'acab_2', 'acab_3'] },
      { type:'split', folder:'/acab/', pictures:['acab_4', 'acab_5', 'acab_6'] },
      { type:'split', folder:'/acab/', pictures:['acab_7', 'acab_8', 'acab_9'] },
      { type:'split', folder:'/acab/', pictures:['acab_10', 'acab_11', 'acab_12'] },
      { type:'split', folder:'/acab/', pictures:['acab_13', 'acab_14', 'acab_15'] },
      { type:'split', folder:'/acab/', pictures:['acab_16', 'acab_17', 'acab_18'] },
      { type:'split', folder:'/acab/', pictures:['acab_19', 'acab_20', 'acab_21'] },
      { type:'split', folder:'/acab/', pictures:['acab_22', 'acab_23', 'acab_24'] },
    ],
};

export default () => (
  <>
    <Article name='Music video'>
      <Body flexDirection='vertical' flexAlignement='centered'>
       <Video id={502583843}/>
      </Body>
    </Article>
    <Article>
      <Body flexDirection='vertical' flexAlignement='centered'>
          <Img src="/assets/projects/acab/acab_2.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_1.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_3.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_4.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_5.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_6.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_7.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_8.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_9.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_10.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_11.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_12.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_13.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_14.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_15.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_16.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_17.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_18.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_19.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_20.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_21.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_22.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_23.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_24.jpg" alt="acab"/>
          <Img src="/assets/projects/acab/acab_25.jpg" alt="acab"/>
      </Body>
    </Article>
    
  </>
);
