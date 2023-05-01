import { Multi } from '../Inputs';
import logo_mmvm from '@/assets/logos/mmvm_logo.png';
import logo_WIUP from '@/assets/logos/WIUP.png';
import logo_ENSAD from '@/assets/logos/ensad-nancy_1.png';
import logo_HG from '@/assets/logos/HG_logo.svg';
import Content from './Content';
import Label from './Label';

const Commu = ({language}) => (
  <>
  <Content
    icon={logo_mmvm.src}
    header={<Multi eng="Montrez-moi vos muscles Records" fr="Label Montrez-moi vos muscles" zh="Montrez-moi vos muscles 唱片公司" language={language} /> }
    body={
        <Multi
          eng="Member and visual Artist at the music record Montrez-moi vos muscles (VJ, music video...)"
          fr="Membre et artiste visuel du label Montrez-moi vos muscles (VJ, clips...)"
          zh="Montrez-moi vos muscles 唱片公司會員、視覺設計師 (VJ, 音樂視頻...)"
          language={language}
        />
    }

    date={ 
      <Multi 
        eng="2019 - 2021" 
        fr="2019 - 2021" 
        zh="2019 至 2021" 
        language={language} 
        /> 
      }

    detail={ 
      <Multi 
        eng="Strasbourg, France" 
        fr="Strasbourg, France" 
        zh="斯特拉斯堡，法國" 
        language={language} 
        /> 
      }
   />

  <Content
    icon={logo_WIUP.src}
    header={ <Multi eng="WIUP radio station" fr="Station radio WIUP" zh="WIUP 廣播電台" language={language} />}
    body={
        <Multi
          eng="Member of the Music Team, selecting new musics and helping the Web Team."
          fr="Membre de la Music Team, selection des nouveaux morceaux et assistance à la Web Team."
          zh="音樂團體會員 : 選擇新的音樂要直播、網站團體助理"
          language={language}
        />
    }

    date={ 
      <Multi 
          eng="2018 - 2019" 
          fr="2018 - 2019" 
          zh="2018 至 2019" 
          language={language} 
          /> 
      }

    detail={ 
      <Multi 
          eng="Indiana (PA), USA" 
          fr="Indiana (PA), USA" 
          zh="印第安納 (PA)，美國" 
          language={language} 
          /> 
        }
   />

  <Content
    icon={logo_HG.src}
    header="HUMMUß GAFFER"
    body={
        <Multi
          eng="Experiential art research with Clémence Fontaine."
          fr="Duo de recherche en art expérientiel avec Clémence Fontaine."
          zh="跟Clémence Fontaine一起藝術研究"
          language={language}
        />
    }

    date={ 
      <Multi 
        eng="2016 - 2018" 
        fr="2016 - 2018" 
        zh="2016 至 2018" 
        language={language} 
        /> 
      }

    detail={ 
      <Multi 
        eng="Nancy, France" 
        fr="Nancy, France" 
        zh="南錫，法國" 
        language={language} 
        /> 
      }
   />

  <Content
    icon={logo_ENSAD.src}
    header={ <Multi eng="ENSAD’s BDE (student office)" fr="BDE de l'ENSAD (bureau des étudiants)" zh="ENSAD BDE (學生辦公室)" language={language} />}
    body={
        <Multi
          eng="Communication manager, designing events’ communication medias."
          fr="Chargé de communication, design et diffusion des affiches et bannières."
          zh="通訊經理、廣告畫設計"
          language={language}
        />
    }

    date={ 
      <Multi 
          eng="2016 - 2017" 
          fr="2016 - 2017" 
          zh="2016 至 2017" 
          language={language} 
        /> 
    }

    detail={ 
        <Multi 
            eng="Nancy, France" 
            fr="Nancy, France" 
            zh="南錫，法國" 
            language={language} 
          /> 
      }
   />

  </>
);

export default Commu;