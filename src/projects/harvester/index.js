import {Article, Body, Space, Img} from '../../components/Folio';

export default () => (
  
  <Article>
    <Body flexDirection='vertical' flexAlignement='centered'>
      <Img src="/assets/projects/harvester/the_lone_harvester.webp"   alt="theloveharvester" />
      <Space type='small'/>
      <Img src="/assets/projects/harvester/concept_tent_1.webp"   alt="theloveharvester_concept_tent" />
      <Space type='small'/>
      <Img src="/assets/projects/harvester/cook_room.webp"   alt="theloveharvester_cook_room" />
      <Space type='small'/>
      <Img src="/assets/projects/harvester/inside.webp"   alt="theloveharvester_inside" />   
    </Body>
  </Article>

);
