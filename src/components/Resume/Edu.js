import { Multi } from '../Inputs';
import logo_iup from '@/assets/logos/IUP_logo.png';
import logo_ensad from '@/assets/logos/ensad-nancy_1.png';
import Label from './Label';
import Content from './Content';

const Edu = ({language}) => (
    <>
      <Content
        date={
          <Multi
          eng="2019 - 2020"
          fr="2019 - 2020"
          zh="2019 至 2020"
          language={language}/>
        }
        body={
          <Multi
            eng='DNSEP (Superior National Diploma of Plastic Expression) with summa cum laude'
            fr='DNSEP (Diplôme National Supérieur d’Expression Plastique) obtenu avec les félicitations du jury'
            zh='DNSEP (Superior National Diploma of Plastic Expression) 以最優等的成績畢業'
            language={language}/>
          }
        icon={logo_ensad.src}
        header={
            <Multi
              eng="Master's degree in Digital Art."
              fr="Master en Art Numérique."
              zh="數位藝術碩士"
              language={language}/>
        }
        detail={
          <Multi
            eng="ENSAD (École Nationale Supérieure d’Art et de Design) :: Nancy, France"
            fr="ENSAD (École Nationale Supérieure d’Art et de Design) :: Nancy, France"
            zh="ENSAD (École Nationale Supérieure d’Art et de Design) :: 南錫，法國"
            language={language}/>
        }
      />

      <Content
        date={
          <Multi
          eng="2018 - 2019"
          fr="2018 - 2019"
          zh="2019 至 2010"
          language={language}/>
        }
        icon={logo_iup.src}
        header={
          <Multi
            eng="International exchange program."
            fr="Programme d’échange international."
            zh="交換項目"
            language={language}/>
          }
        body={
            <Multi
            eng='Web & Game Design, Illustration, 3D Animation'
            fr='Web & Game Design, illustration et animation 3D'
            zh='網絡與遊戲設計 、 插圖 、 3D動畫'
            language={language}/>
        }
        detail={
          <Multi
            eng="IUP (Indiana University of Pennsylvania) :: Indiana (PA), USA"
            fr="IUP (Indiana University of Pennsylvania) :: Indiana (PA), USA"
            zh="IUP (Indiana University of Pennsylvania) :: 印第安納 (PA)，美國"
            language={language}/>
        }
      />

      <Content
        separator={false}
        date={
          <Multi
          eng="2016 - 2018"
          fr="2016 - 2018"
          zh="2016 至 2018"
          language={language}/>
        }
        icon={logo_ensad.src}
        header={
          <Multi
            eng="Bachelor's degree in Digital Art."
            fr="Licence en Art Numérique."
            zh="數位藝術学士"
            language={language}/>
          }
        body={
          <Multi
          eng='DNA (National Diploma of Art) with honors'
          fr='DNA (Diplôme National d’Art) obtenu avec Mention'
          zh='DNA (National Diploma of Art) 以榮譽的成績畢業'
          language={language}/>
        }
        detail={
          <Multi
            eng="ENSAD (École Nationale Supérieure d’Art et de Design) :: Nancy, France"
            fr="ENSAD (École Nationale Supérieure d’Art et de Design) :: Nancy, France"
            zh="ENSAD (École Nationale Supérieure d’Art et de Design) :: 南錫，法國"
            language={language}/>
        }
      />
    </>
);


export default Edu;