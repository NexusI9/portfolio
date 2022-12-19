import { Img, Space, Article, Body } from '../../components/article';

export default () => (
  
  <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
      <Img src="/assets/projects/harvester/the_lone_harvester.jpg"   alt="theloveharvester" />
      <Space type='small'/>
      <Img src="/assets/projects/harvester/concept_tent_1.jpg"   alt="theloveharvester_concept_tent" />
      <Space type='small'/>
      <Img src="/assets/projects/harvester/cook_room.jpg"   alt="theloveharvester_cook_room" />
      <Space type='small'/>
      <Img src="/assets/projects/harvester/inside.jpg"   alt="theloveharvester_inside" />   
    </Body>
  </Article>

);
