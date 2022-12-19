import { Img, Space, Article, Body } from '../../components/article';

export default () => (
  <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
      <div data-board-name='Lombard street'><Img src="/assets/projects/stylized/bayview.jpg" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='La halte'><Img src="/assets/projects/stylized/horse_1.jpg" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='La cour intérieure'><Img src="/assets/projects/stylized/night alley.jpg" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name="The fall at Ozu's"><Img src="/assets/projects/stylized/tatami_shot.jpg" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='The stone guardian'><Img src="/assets/projects/stylized/tower_1 copie.jpg" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='The taste of tea'><Img src="/assets/projects/stylized/teabay.jpg" alt="junkyard" /></div>
      <Space type='small'/>
    </Body>
  </Article>
);
