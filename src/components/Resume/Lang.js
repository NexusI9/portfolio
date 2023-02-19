import { Multi } from '../Inputs';
import Content from './Content';

const Lang = ({language}) => (
  <div className='langueSection'>
  <Content
     header={
      <Multi eng={<>French <small className='discrete'>(native)</small></>}
       fr={<>Français <small className='discrete'>(maternelle)</small></>}
       zh={<>法文 <small className='discrete'>(母語)</small></>}
       language={language}
       />
   }/>
  <Content
     header={
      <Multi eng={<>English <small className='discrete'>(fluent)</small></>}
       fr={<>Anglais <small className='discrete'>(bilingue)</small></>}
       zh={<>英文 <small className='discrete'>(流利)</small></>}
       language={language}
       />
   }/>
  <Content
     header={
      <Multi eng={<>Mandarin <small className='discrete'>(intermediate)</small></>}
       fr={<>Mandarin <small className='discrete'>(intermédiaire)</small></>}
       zh={<>中文 <small className='discrete'>(中階)</small></>}
       language={language}
       />
   }/>
  <Content
     separator={false}
     header={
      <Multi eng={<>German <small className='discrete'>(basic)</small></>}
       fr={<>Allemand <small className='discrete'>(notions)</small></>}
       zh={<>德文 <small className='discrete'>(初級)</small></>}
       language={language}
       />
   }/>
  </div>
);

export default Lang;
