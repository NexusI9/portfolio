import {Article, Body, Space, Img} from '../../components/Folio';

export default () => (
  <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
      <div data-board-name='Lombard street'><Img src="/assets/projects/stylized/bayview.webp" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='La halte'><Img src="/assets/projects/stylized/horse_1.webp" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='La cour intérieure'><Img src="/assets/projects/stylized/night alley.webp" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name="The fall at Ozu's"><Img src="/assets/projects/stylized/tatami_shot.webp" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='The stone guardian'><Img src="/assets/projects/stylized/tower_1 copie.webp" alt="junkyard" /></div>
      <Space type='small'/>
      <div data-board-name='The taste of tea'><Img src="/assets/projects/stylized/teabay.webp" alt="junkyard" /></div>
      <Space type='small'/>
    </Body>
  </Article>
);
