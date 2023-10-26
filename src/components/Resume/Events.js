import Content from './Content';
import { Multi } from '../Inputs';
import event01 from '@/assets/resume/event01.webp';
import event02 from '@/assets/resume/event02.webp';
import event03 from '@/assets/resume/event03.webp';
import event04 from '@/assets/resume/event04.webp';
import event05 from '@/assets/resume/event05.webp';
import event06 from '@/assets/resume/event06.webp';
import event07 from '@/assets/resume/event07.webp';
import event08 from '@/assets/resume/event08.webp';
import event09 from '@/assets/resume/event09.webp';
import event10 from '@/assets/resume/event10.webp';



const Events = ({language}) =>(
    <div className='content event grid'>
    <Content
      visual={event10.src}
      className='border-light'
      card={false}
      date={ 
        <Multi eng="March 3rd, 2020" 
                fr="3 Mars 2020" 
                zh="2020年3月3日" 
                language={language} 
                /> 
      }
      header={<b>Maison Mimir fête ses 10 ans</b>}
      body={
        <small><Multi
          eng="With Philip Pentacle and Epic Schmetterling."
          fr="With Philip Pentacle and Epic Schmetterling."
          zh="跟 Philip Pentacle 和 Epic Schmetterling"
          language={language}
        /></small>
      }
      detail={ 
        <Multi eng="MOLODOÏ, Strasbourg, France" 
               fr="MOLODOÏ, Strasbourg, France " 
               zh="MOLODOÏ，斯特拉斯堡，法國 " 
               language={language} 
        /> 
      }
     />
  
    <Content
      card={false}
      visual={event05.src}
      className='border-light'
      header={<b>ART’ung Live</b>}
      date={ 
        <Multi 
          eng="February 15th, 2020" 
          fr="15 février 2020" 
          zh="2020年2月15日" 
          language={language} 
        /> }
      body={
        <small><Multi
          eng="With Philip Pentacle, Epic Schmetterling and Noyus."
          fr="Avec Philip Pentacle, Epic Schmetterling et Noyus."
          zh="跟 Philip Pentacle，Epic Schmetterling 和 Noyus"
          language={language}
        /></small>
      }
      detail={ 
        <Multi 
          eng="Local ART’ung, Willerhoff, France " 
          fr="Local ART’ung, Willerhoff, France " 
          zh="Local ART’ung，Willerhoff，法國" 
          language={language} 
        /> }
     />
  
  
    <Content
      card={false}
      className='border-light'
      visual={event09.src}
      date={ 
          <Multi 
            eng="February 15th, 2020" 
            fr="15 février 2020" 
            zh="2019年12月5日" 
            language={language}
          /> 
      }
      header={<b>CELEBRATION</b>}
      body={
        <small><Multi
          eng="With Epic Schmetterling."
          fr="Avec Epic Schmetterling."
          zh="跟 Epic Schmetterling"
          language={language}
        /></small>
      }
      detail={ 
          <Multi 
            eng="Gallerie NaMiMa de l'ENSAD, Nancy, France" 
            fr="ENSAD NaMiMa Gallery, Nancy, France" 
            zh="ENSAD NaMiMa美术馆，南錫，法國" 
            language={language}
          /> 
      }
     />
  
  
    <Content
      card={false}
      visual={event04.src}
      className='border-light'
      header={<b>Limedia Party #1</b>}
      date={ 
        <Multi 
          eng="April 14th, 2018" 
          fr="14 avril 2018" 
          zh="2018年14月4日" 
          language={language} 
          /> 
      }
      body={
        <small><Multi
          eng="As part of the RING festival, with CTL! soundsystem."
          fr="Dans le cadre du RING festival, avec CTL! soundsystem."
          zh="RING音樂節的一部分，跟 CTL! soundsystem"
          language={language}
        /></small>
      }
      detail={ 
        <Multi 
          eng="Théatre de la Manufacture, Nancy, France"
          fr="Théatre de la Manufacture, Nancy, France"
          zh="Théatre de la Manufacture，南錫，法國"
          language={language} 
        /> 
      }
     />
  
  
    <Content
      card={false}
      visual={event08.src}
      className='border-light'
      header={<b>TECHNO</b>}
      date={ 
        <Multi 
          eng="February 22nd, 2018" 
          fr="22 février 2018" 
          zh="2018年2月22日" 
          language={language} 
          /> 
      }
      body={
        <small><Multi
          eng="with ENSAD (BDE)."
          fr="avec ENSAD (BDE)."
          zh="跟 ENSAD (BDE)"
          language={language}
        /></small>
      }
      detail={ 
        <Multi 
          eng="LNVRS club, Nancy, France " 
          fr="LNVRS club, Nancy, France" 
          zh="LNVRS 夜店，南錫，法國 " 
          language={language} 
          /> 
      }
     />
  
    <Content
      card={false}
      visual={event03.src}
      className='border-light'
      header={<b>CTL PARTY!</b>}
      date={ 
        <Multi 
          eng="November 4th, 2017" 
          fr="4 novembre 2017" 
          zh="2017年11月4日" 
          language={language} 
          /> 
      }
      body={
        <small><Multi
          eng="With CTL! soundsystem."
          fr="Avec CTL! soundsystem."
          zh="跟 CTL! soundsystem"
          language={language}
        /></small>
      }
      detail={ 
        <Multi 
          eng="Ostra club, Nancy, France " 
          fr="Ostra club, Nancy, France " 
          zh="Ostra 夜店，南錫，法國" 
          language={language} 
          /> 
      }
     />
  
  
    <Content
      card={false}
      visual={event07.src}
      className='border-light'
      header={<b>Ph pas neutre : Jaquarius</b>}
      date={ 
        <Multi 
          eng="October 6th, 2017" 
          fr="6 octobre 2017"  
          zh="2017年10月6日" 
          language={language} 
          /> 
      }
      body={
        <small><Multi
          eng="With CTL! soundsystem."
          fr="Avec CTL! soundsystem."
          zh="跟 CTL! soundsystem"
          language={language}
        /></small>
      }
      detail={ 
        <Multi 
          eng="LNVRS club, Nancy, France" 
          fr="LNVRS club, Nancy, France"  
          zh="LNVRS 夜店，南錫，法國 " 
          language={language} 
          /> 
      }
     />
  
  
    <Content
      card={false}
      visual={event02.src}
      className='border-light'
      date={
        <Multi 
          eng="May 7th, 2017"
          fr="7 mai 2017"  
          zh="2017年5月7日" 
          language={language} 
          /> 
      }
      header={<b>Festival Moumouth Fest</b>}
      body={
        <small><Multi
          eng="With Epic Schmetterling."
          fr="Avec Epic Schmetterling."
          zh="跟 Epic Schmetterling"
          language={language}
        /></small>
      }
      detail={
         <Multi 
          eng="Tanneries, Dijon, France"
          fr="Tanneries, Dijon, France "  
          zh="Tanneries，迪戎，法國" 
          language={language} 
          /> 
      }
     />
  
    <Content
      card={false}
      visual={event06.src}
      className='border-light'
      header={<b>ARK4-Artem</b>}
      date={ 
        <Multi 
          eng="Januray 19th, 2017" 
          fr="19 janvier 2017"  
          zh="2017年1月19日" 
          language={language} 
          /> 
        }
      body={
        <small><Multi
          eng="With Latitudes 5.4."
          fr="Avec Latitudes 5.4."
          zh="跟 Latitudes 5.4"
          language={language}
        /></small>
      }
      detail={ 
        <Multi 
          eng="CCAM, Vandoeuvre-les-Nancy, France" 
          fr="CCAM, Vandoeuvre-les-Nancy, France"  
          zh="CCAM，旺多厄夫爾萊南西，法國" 
          language={language} 
          /> 
        }
     />
  
  
    <Content
      card={false}
      className='border-light'
      visual={event01.src}
      header={<b>Freshmen homecoming</b>}
      date={
        <Multi 
           eng="December 8th, 2016" 
           fr="8 décembre 2016"  
           zh="2016年12月8日" 
           language={language} 
         /> 
       }
      body={
        <small><Multi
          eng="With ENSAD (BDE)."
          fr="Avec ENSAD (BDE)."
          zh="跟 ENSAD (BDE)"
          language={language}
        /></small>
      }
      detail={
         <Multi 
            eng="Appart club, Nancy, France " 
            fr="Appart club, Nancy, France "  
            zh="Appart 夜店，南錫，法國 " 
            language={language} 
          /> 
        }
     />
  
    </div>
  );


export default Events

