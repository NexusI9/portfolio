import { Multi } from '../Inputs';
import Content from './Content';

const StatIcon = () =>
(<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.75 15.75H2.25V14.25H15.75V15.75ZM6 7.5H3V12.75H6V7.5ZM10.5 2.25H7.5V12.75H10.5V2.25ZM15 4.5H12V12.75H15V4.5Z" fill="#444D66"/>
</svg>);


const Lang = ({language}) => (
  <div className='content language grid'>
  <Content
    card={false}
    className='border-light round'
     header={
      <Multi eng={<>French <small className='discrete'><StatIcon/>native</small></>}
       fr={<>Français <small className='discrete'><StatIcon/>maternelle</small></>}
       zh={<>法文 <small className='discrete'><StatIcon/>母語</small></>}
       language={language}
       />
   }/>
  <Content
     card={false}
     className='border-light round'
     header={
      <Multi eng={<>English <small className='discrete'><StatIcon/>fluent</small></>}
       fr={<>Anglais <small className='discrete'><StatIcon/>bilingue</small></>}
       zh={<>英文 <small className='discrete'><StatIcon/>流利</small></>}
       language={language}
       />
   }/>
  <Content
     card={false}
     className='border-light round'
     header={
      <Multi eng={<>Mandarin <small className='discrete'><StatIcon/>intermediate</small></>}
       fr={<>Mandarin <small className='discrete'><StatIcon/>intermédiaire</small></>}
       zh={<>中文 <small className='discrete'><StatIcon/>中階</small></>}
       language={language}
       />
   }/>
  <Content
     card={false}
     className='border-light round'
     separator={false}
     header={
      <Multi eng={<>German <small className='discrete'><StatIcon/>basic</small></>}
       fr={<>Allemand <small className='discrete'><StatIcon/>notions</small></>}
       zh={<>德文 <small className='discrete'><StatIcon/>初級</small></>}
       language={language}
       />
   }/>
  </div>
);

export default Lang;
