import Content from './Content';
import { Multi } from '../Inputs';


const Events = ({language}) =>(
    <div id='perf'>
    <Content
      header={<b>Maison Mimir fête ses 10 ans</b>}
      body={
        <Multi
          eng={<small>With Philip Pentacle and Epic Schmetterling.</small>}
          fr={<small>With Philip Pentacle and Epic Schmetterling.</small>}
          zh={<small>跟 Philip Pentacle 和 Epic Schmetterling</small>}
          language={language}
        />
      }
      detail={ <Multi eng="March 3rd, 2020  :: MOLODOÏ, Strasbourg, France" fr="3 Mars 2020  :: MOLODOÏ, Strasbourg, France " zh="2020年3月3日 :: MOLODOÏ，斯特拉斯堡，法國 " language={language} /> }
     />
  
    <Content
      header={<b>ART’ung Live</b>}
      body={
        <Multi
          eng={<small>With Philip Pentacle, Epic Schmetterling and Noyus.</small>}
          fr={<small>Avec Philip Pentacle, Epic Schmetterling et Noyus.</small>}
          zh={<small>跟 Philip Pentacle，Epic Schmetterling 和 Noyus</small>}
          language={language}
        />
      }
      detail={ <Multi eng="February 15th, 2020 :: Local ART’ung, Willerhoff, France " fr="15 février 2020 :: Local ART’ung, Willerhoff, France " zh="2020年2月15日 :: Local ART’ung，Willerhoff，法國" language={language} /> }
     />
  
  
    <Content
      header={<b>CELEBRATION</b>}
      body={
        <Multi
          eng={<small>With Epic Schmetterling.</small>}
          fr={<small>Avec Epic Schmetterling.</small>}
          zh={<small>跟 Epic Schmetterling</small>}
          language={language}
        />
      }
      detail={ <Multi eng="February 15th, 2020 :: Local ART’ung, Willerhoff, France " fr="15 février 2020 :: Local ART’ung, Willerhoff, France " zh="2019年12月5日 :: ENSAD，南錫，法國 " language={language} /> }
     />
  
  
    <Content
      header={<b>Limedia Party #1</b>}
      body={
        <Multi
          eng={<small>As part of the RING festival, with CTL! soundsystem.</small>}
          fr={<small>Dans le cadre du RING festival, avec CTL! soundsystem.</small>}
          zh={<small>RING音樂節的一部分，跟 CTL! soundsystem</small>}
          language={language}
        />
      }
      detail={ <Multi eng="April 14th, 2018 :: Théatre de la Manufacture, Nancy, France" fr="14 avril 2018 :: Théatre de la Manufacture, Nancy, France" zh="2018年14月4日 :: Théatre de la Manufacture，南錫，法國" language={language} /> }
     />
  
  
    <Content
      header={<b>TECHNO</b>}
      body={
        <Multi
          eng={<small>with ENSAD (BDE).</small>}
          fr={<small>avec ENSAD (BDE).</small>}
          zh={<small>跟 ENSAD (BDE)</small>}
          language={language}
        />
      }
      detail={ <Multi eng="February 22nd, 2018 :: LNVRS club, Nancy, France " fr="22 février 2018 :: LNVRS club, Nancy, France" zh="2018年2月22日 :: LNVRS 夜店，南錫，法國 " language={language} /> }
     />
  
    <Content
      header={<b>CTL PARTY!</b>}
      body={
        <Multi
          eng={<small>With CTL! soundsystem.</small>}
          fr={<small>Avec CTL! soundsystem.</small>}
          zh={<small>跟 CTL! soundsystem</small>}
          language={language}
        />
      }
      detail={ <Multi eng="November 4th, 2017 :: Ostra club, Nancy, France " fr="4 novembre 2017 :: Ostra club, Nancy, France " zh="2017年11月4日 :: Ostra 夜店，南錫，法國" language={language} /> }
     />
  
  
    <Content
      header={<b>Ph pas neutre : Jaquarius</b>}
      body={
        <Multi
          eng={<small>With CTL! soundsystem.</small>}
          fr={<small>Avec CTL! soundsystem.</small>}
          zh={<small>跟 CTL! soundsystem</small>}
          language={language}
        />
      }
      detail={ <Multi eng="October 6th, 2017 :: LNVRS club, Nancy, France" fr="6 octobre 2017 :: LNVRS club, Nancy, France"  zh="2017年10月6日 :: LNVRS 夜店，南錫，法國 " language={language} /> }
     />
  
  
    <Content
      header={<b>Festival Moumouth Fest</b>}
      body={
        <Multi
          eng={<small>With Epic Schmetterling.</small>}
          fr={<small>Avec Epic Schmetterling.</small>}
          zh={<small>跟 Epic Schmetterling</small>}
          language={language}
        />
      }
      detail={ <Multi eng="May 7th, 2017 :: Tanneries, Dijon, France" fr="7 mai 2017 :: Tanneries, Dijon, France "  zh="2017年5月7日 :: Tanneries，迪戎，法國" language={language} /> }
     />
  
    <Content
      header={<b>ARK4-Artem</b>}
      body={
        <Multi
          eng={<small>With Latitudes 5.4.</small>}
          fr={<small>Avec Latitudes 5.4.</small>}
          zh={<small>跟 Latitudes 5.4</small>}
          language={language}
        />
      }
      detail={ <Multi eng="Januray 19th, 2017 :: CCAM, Vandoeuvre-les-Nancy, France" fr="19 janvier 2017 :: CCAM, Vandoeuvre-les-Nancy, France"  zh="2017年1月19日 :: CCAM，旺多厄夫爾萊南西，法國" language={language} /> }
     />
  
  
    <Content
      separator={false}
      header={<b>Freshmen homecoming</b>}
      body={
        <Multi
          eng={<small>With ENSAD (BDE).</small>}
          fr={<small>Avec ENSAD (BDE).</small>}
          zh={<small>跟 ENSAD (BDE)</small>}
          language={language}
        />
      }
      detail={ <Multi eng="December 8th, 2016 :: Appart club, Nancy, France " fr="8 décembre 2016 :: Appart club, Nancy, France "  zh="2016年12月8日 :: Appart 夜店，南錫，法國 " language={language} /> }
     />
  
    </div>
  );


export default Events

