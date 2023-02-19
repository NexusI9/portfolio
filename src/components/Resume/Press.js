import Content from './Content';
import { Multi } from '../Inputs';

const Press = ({language}) => (
    <>
      <Content
        header={<small><a href='https://www.fedelab.fr/philip-pentacle-animal-chamber-apocalypse-beat-october-tone/' target='_blank' rel="noreferrer">PHILIP PENTACLE – ANIMAL CHAMBER APOCALYPSE BEAT [OCTOBER TONE]</a></small>}
        detail="2021 :: Fedelab.fr"
       />
  
      <Content
        header={<small><a rel="noreferrer" href='https://www.lalsace.fr/culture-loisirs/2021/04/19/un-nouveau-clip-tres-anime-pour-philip-pentacle?fbclid=IwAR1678dXucyRIkv5ItoE2wi3ena8-KaOiQTVzDe32l8zNvTJe_XqVm1ij94' target='_blank'>Un nouveau clip très animé pour Philip Pentacle</a></small>}
        detail={ <Multi eng="April 19th, 2021 :: Lalsace.fr" fr="19 avril 2021 :: Lalsace.fr"  zh="2021年4月19日 :: Lalsace.fr" language={language} /> }
       />
  
      <Content
        header={<small><a rel="noreferrer" href='https://www.mesenceintesfontdefaut.com/2021/03/03/nouveaute-philip-pentacle-animal-chamber-apocalypse-beat/' target='_blank'>[NOUVEAUTÉ] PHILIP PENTACLE – ANIMAL CHAMBER APOCALYPSE BEAT</a></small>}
        detail={ <Multi eng="March 3rd, 2021 :: Mesenceintesfontdefaut.com" fr="3 mars 2021 :: Mesenceintesfontdefaut.com"  zh="2021年3月3日 :: Mesenceintesfontdefaut.com" language={language} /> }
       />
  
      <Content
        separator={false}
        header={<small><a rel="noreferrer" href='https://phenixwebtv.com/2019/12/14/les-clips-de-la-semaine-39/' target='_blank'>Les clips de la semaine #39</a></small>}
        detail={ <Multi eng="December 14th, 2020 :: Phenixwebtv.com" fr="14 décembre 2020 :: Phenixwebtv.com"  zh="2020年12月4日 :: Phenixwebtv.com" language={language} /> }
       />
    </>
  );

  export default Press;