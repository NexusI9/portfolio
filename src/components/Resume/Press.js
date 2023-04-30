import Content from './Content';
import { Multi } from '../Inputs';
import press01 from '@/assets/resume/press01.webp';
import press02 from '@/assets/resume/press02.webp';
import press03 from '@/assets/resume/press03.webp';
import press04 from '@/assets/resume/press04.webp';

const Press = ({language}) => (
    <div className='content press grid'>
      <Content
        card={true}
        visual={press01.src}
        date="2021"
        header={<a href='https://www.fedelab.fr/philip-pentacle-animal-chamber-apocalypse-beat-october-tone/' target='_blank' rel="noreferrer">PHILIP PENTACLE – ANIMAL CHAMBER APOCALYPSE BEAT [OCTOBER TONE]</a>}
        detail="Fedelab.fr"
       />
  
      <Content
        card={true}
        visual={press02.src}
        date={ 
          <Multi 
            eng="April 19th, 2021" 
            fr="19 avril 2021"  
            zh="2021年4月19日" 
            language={language} 
            /> 
          }
        header={<a rel="noreferrer" href='https://www.lalsace.fr/culture-loisirs/2021/04/19/un-nouveau-clip-tres-anime-pour-philip-pentacle?fbclid=IwAR1678dXucyRIkv5ItoE2wi3ena8-KaOiQTVzDe32l8zNvTJe_XqVm1ij94' target='_blank'>Un nouveau clip très animé pour Philip Pentacle</a>}
        detail="Lalsace.fr"
       />
  
      <Content
        card={true}
        visual={press03.src}
        date={ 
          <Multi 
            eng="March 3rd, 2021" 
            fr="3 mars 2021"  
            zh="2021年3月3日" 
            language={language} 
          /> 
        }
        header={<a rel="noreferrer" href='https://www.mesenceintesfontdefaut.com/2021/03/03/nouveaute-philip-pentacle-animal-chamber-apocalypse-beat/' target='_blank'>[NOUVEAUTÉ] PHILIP PENTACLE – ANIMAL CHAMBER APOCALYPSE BEAT</a>}
        detail="Mesenceintesfontdefaut.com"/>
  
      <Content
        card={true}
        visual={press04.src}
        date={ 
          <Multi 
            eng="December 14th, 2020" 
            fr="14 décembre 2020"  
            zh="2020年12月4日" 
            language={language} 
            /> 
          }
        header={<a rel="noreferrer" href='https://phenixwebtv.com/2019/12/14/les-clips-de-la-semaine-39/' target='_blank'>Les clips de la semaine #39</a>}
        detail="Phenixwebtv.com"
       />
    </div>
  );

  export default Press;