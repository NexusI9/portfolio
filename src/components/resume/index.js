import { Multi } from '../inputs';
import logo_rdb from '../../assets/logos/redbox_logo.png';
import logo_iup from '../../assets/logos/IUP_logo.png';
import logo_ensad from '../../assets/logos/ensad-nancy_1.png';
import logo_mmvm from '../../assets/logos/mmvm_logo.png';
import logo_N from '../../assets/logos/N_logo.png';
import logo_NEK from '../../assets/logos/NEK.png';
import logo_WIUP from '../../assets/logos/WIUP.png';


const Label = ({ico,children}) => (

  <div style={{display:'flex', alignItems:'center'}}>
      <span className='ico'><img src={ico}/></span>
      <b>
      {children}
      </b>
  </div>
);

const List = ({li}) => (
  <ul>
    {li.map( (item,i) => <li key={Math.random()+i}><small>{item}</small></li>)}
  </ul>
);

const Content = ({header, body, detail, separator=true }) => (
  <div>

      <div className='contentHeader'>{header}</div>
      {body}
      <small className='discrete detail'>{detail}</small>

      {separator && <span className='separator'></span>}
  </div>
)


export const ResumeHeader = ({innerRef, language='english'}) => (
   <section ref={ e => innerRef } id="resumeHeader">
            <div>
            <h2>Nassim El Khantour</h2>
            <p style={{fontSize:'1.3em'}}>
              <Multi
                eng='Multimedia Designer :: Art Director :: Developer'
                fr='Designer Multimédia :: Directeur Artistique :: Développeur'
                zh='多媒體設計師  ::  藝術總監  ::  網站工程師'
                language={language}/>
            </p>

            <small>
            <Multi eng={<>I am a French creative with an expertise in Web and Motion Design, but also proficiencies in development, 3D design, and illustration.
            An extended skill set I put at work in various projects for the past 5 years such as music videos, web apps, as well as audiovisual interactive setups.
            </>}
                    fr={<>Je suis un Créatif français avec une expertise en Web et Motion Design, et des compétences en développement, design 3D, ainsi qu’en illustration. <br/> Un vaste panel de compétences que j’ai pu mettre à l’œuvre ces 5 dernières années dans une variété de projets tels que la réalisation de clips musicaux,
            d’applications web, mais aussi au sein d’installations audiovisuelles interactives.
            </>}
                    zh={<>
                      我是一個法國人的多媒體設計帥，擅長網站與動態圖形設計。
                      也製作3D設計，網站開發以及插圖的內容。
                      已有4年以上視覺設計師相關經歷。
                </>}
                language={language}
            />
            </small>
            </div>
        </section>
);

export const Pro = ({language}) => (
    <>
      <Content
        header={<Label ico={logo_rdb}><Multi eng='Lead Designer: Motion, Web & Print productions' fr='Lead Designer: Motion, Web & Print design' zh='領導視覺計師 : 動態圖形設 、 網站 、 印刷製作' language={language}/></Label>}
        body={<>
          <small><Multi
            eng='Design of visual and interactive content going from websites to print and motion design assets'
            fr='Design de contenu visuel et interactifs allant de site web au print et motion design'
            zh='視覺與互動式內容設計、從網站到平面與動態圖形材料'
            language={language}/>
          </small>
          <List li={[
            <Multi
              eng='Production of motion design materials and sound design (Google, Meta, TikTok ads, marketing collaterals, as well as product showcases...)'
              fr='Production de divers éléments Motion Design et Sound Design (Google, Meta, TikTok ads, matériel marketing, ainsi que la présentation de produits)'
              zh='動態圖形與聲音設計製作 ( 從Google、 Meta、 TikTok 廣告到產品文宣 )'
              language={language}/>,
              <Multi
              eng='Supervision of junior designers ensuring their work fit the established art directions.'
              fr='Supervision des designers junior, assurant le bon suivi des directions artistiques établies.'
              zh='初級設計師負責。 確保他們的創造適合客戶藝術指導'
              language={language}/>,
            <Multi
              eng='Design of websites and print assets.'
              fr='Design de sites web et de fichiers prints.'
              zh='網站設計與多種平面元件打造'
              language={language}/>,
            <Multi
              eng='Branding/ visual identity design.'
              fr="Design d'identité visuelles et de branding, session de brainstorm marketing."
              zh='對客戶進行品牌設計'
              language={language}/>,
            <Multi
              eng="Videography and photo editing of the agency's events and venues."
              fr="Vidéographie et édition photo des évènements de l'agence."
              zh='企業活動攝影和攝像、後處理 ( 視頻與照片剪輯 )'
              language={language}/>,
            <Multi
              eng='Providing web developers JS libraries to improve websites user experience (3D WebGL interactive content, SVG/CSS/GSAP animations...)'
              fr='Assistance aux web developers en leur fournissant des bibliothèques JavaScript pour améliorer l’expérience utilisateur des sites (intégration 3D WebGL, animations CSS/SVG/GSAP…)'
              zh='上級網站工程師助理，開發3D WebGL的內容 、 SVG/CSS/GSAP 互動式動畫' language={language}/>,
            <Multi
              eng='Setup and development of web apps and Adobe Extensions to enhance the agency workflow.'
              fr="Mise en place et développement d'applications web et extensions Adobe pour améliorer le workflow de l’agence."
              zh='為進步企業工作流製作Adobe Extensions與網絡應用程式'
              language={language}/>
          ]}/>
          </>
        }

        detail={
          <Multi
            eng={<>Redbox Media Inc. <br /> 2022 - present :: Montréal, Canada </>}
            fr={<>Redbox Media Inc. <br /> 2022 - aujourd'hui :: Montréal, Canada  </>}
            zh={<>Redbox Media Inc. <br /> 2022 — 在職中  :: 蒙特婁，加拿大 </>}
          language={language}
          />
        }
      />


      <Content
        header={<Label ico={logo_N}><Multi eng='Freelance in audiovisual & Web Design' fr='Freelance en audiovisuel et Web Design' zh='網絡設計師與音像製作自由職業者' language={language}/></Label>}
        body={<>
          <List li={[
            <Multi
              eng='Development and Web Design of an e-commerce coupled with a dedicated SQL client for products management (LAMP stack).'
              fr='Développement et Web Design d’un e-commerce ainsi que d’un client SQL pour la gestion des produits (stack LAMP).'
              zh='電子商務開發與UI/UX設計、產品管理將SQL客戶機軟件開發 (LAMP stack)'
              language={language}/>,
            <Multi
              eng='Development and UX/UI design of a web browser extension to improve Mandarin learning (popup translator, OCR recognition).'
              fr='Développement et UX/UI design d’une extension Google Chrome pour l’apprentissage du mandarin (traducteur popup, reconnaissance OCR).'
              zh='Google Chrome擴充功能開發與UI/UX設計'
              language={language}
            />,
            <Multi
              eng='Development and UX/UI design of a website archiving various cinematographic content (MERN stack).'
              fr='Développement et UX/UI d’un site d’archivage de contenu	cinématographique (MERN stack).'
              zh='電影攝影的上網檔案館開發與UI/UX設計 (MERN stack)'
              language={language}
            />,
            <Multi
              eng='Art direction, background painting and animation for an animated short-movie (music video).'
              fr='Direction artistique, background painting et animation pour un court-métrage d’animation (clip musical).'
              zh='短片打造 ( 藝術總監、背景畫、動畫師 )'
              language={language}
            />,
          ]}/>
          </>
        }

        detail={
          <Multi
            eng={<>Freelance <br /> 2020 - 2021 :: Strasbourg, France </>}
            fr={<>Freelance <br /> 2020 - 2021 :: Strasbourg, France  </>}
            zh={<>自由職業 <br /> 2019 至 2020 :: 斯特拉斯堡，法國 </>}
          language={language}
          />
        }
      />


      <Content
        separator={false}
        header={<Label ico={logo_NEK}><Multi eng='Graphic and Multimedia designer' fr='Designer Graphique et Multimédia' zh='視覺與多媒體設計師' language={language}/></Label>}
        body={<>
          <small><Multi
            eng='Providing visuals for various cultural structures such as associations, music acts and soundsystem.'
            fr='Création de contenus visuels pour diverses structures culturelles telles que des associations, groupes de musique et soundsystems.'
            zh='提供多種文化機構( 社團、音樂活動、Soundsystem )多媒體材料'
            language={language}/>
          </small>
          <List li={[
            <Multi eng='Spatial organisation and scenography of various video-mapping installations.'
                   fr='Mise en espace et scénographie de nombreuses installations vidéo-mapping.'
                   zh='光彫投影裝置、空間佈局 (scenography)'
                   language={language}/>,
            <Multi
                   eng='Art direction and animation for an animated short-movie (music video).'
                   fr='Direction artistique et animation pour un court-métrage d’animation (clip musical).'
                   zh='短片打造 (藝術總監、動畫師)'
                   language={language}/>,
            <Multi eng='3D modelling, animation and compositing of more than a 100 visual samples made to be projected during cultural events.'
                   fr='Modélisation, animation et compositing de plus de 100 samples visuels visés à être projetés lors d’évènements culturels.'
                   zh='為多種文化話動進行更多一百視頻樣本製作 ( 3D設計、動畫、視頻合成 )'
                   language={language}/>,
            <Multi eng='Development and UI design of interactive audio-visual software (motion design, generative art).'
                   fr='Développement et UX/UI design de logiciels audio-visuels interactifs (motion design, art génératif).'
                   zh='音像軟件開發與UI/UX設計（ 動態圖像設計、自動生成藝術 )'
                   language={language}/>,
          ]}/>
          </>
        }

        detail={
          <Multi
            eng={<>Independent Contractor <br /> 2016 - 2020 :: Nancy, France  </>}
            fr={<>Prestataire indépendant <br /> 2016 - 2020 :: Nancy, France  </>}
            zh={<>工讀生 <br /> 2016 至 2020 :: 南錫，法國 </>}
            language={language}/>
        }
      />


    </>

);


export const Edu = ({language}) => (
    <>
      <Content
        header={
          <Label ico={logo_ensad}>
          <Multi
            eng='DNSEP (Superior National Diploma of Plastic Expression) with summa cum laude'
            fr='DNSEP (Diplôme National Supérieur d’Expression Plastique) obtenu avec les félicitations du jury'
            zh='DNSEP (Superior National Diploma of Plastic Expression) 以最優等的成績畢業'
            language={language}/>
            </Label>
          }
        body={
          <Multi
            eng={<small>Master's degree in Digital Art.</small>}
            fr={<small>Master en Art Numérique.</small>}
            zh={<small>數位藝術碩士</small>}
            language={language}/>
        }
        detail={
          <Multi
            eng={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2019 - 2020 :: Nancy, France </>}
            fr={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2019 - 2020 :: Nancy, France </>}
            zh={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2019 至 2020 | 南錫，法國</>}
            language={language}/>
        }
      />

      <Content
        header={
          <Label ico={logo_iup}>
          <Multi
            eng='Web & Game Design, Illustration, 3D Animation'
            fr='Web & Game Design, illustration et animation 3D'
            zh='網絡與遊戲設計 、 插圖 、 3D動畫'
            language={language}/>
            </Label>
          }
        body={
          <Multi
            eng={<small>International exchange program.</small>}
            fr={<small>Programme d’échange international.</small>}
            zh={<small>交換項目</small>}
            language={language}/>
        }
        detail={
          <Multi
            eng={<>IUP (Indiana University of Pennsylvania) <br /> 2018 - 2019 :: Indiana (PA), USA </>}
            fr={<>IUP (Indiana University of Pennsylvania) <br /> 2018 - 2019 :: Indiana (PA), USA</>}
            zh={<>IUP (Indiana University of Pennsylvania) <br /> 2018 至 2019 :: 印第安納 (PA)，美國</>}
            language={language}/>
        }
      />

      <Content
        separator={false}
        header={
          <Label ico={logo_ensad}>
          <Multi
            eng='DNA (National Diploma of Art) with honors'
            fr='DNA (Diplôme National d’Art) obtenu avec Mention'
            zh='DNA (National Diploma of Art) 以榮譽的成績畢業'
            language={language}/>
            </Label>
          }
        body={
          <Multi
            eng={<small>Bachelor's degree in Digital Art.</small>}
            fr={<small>Licence en Art Numérique.</small>}
            zh={<small>數位藝術学士</small>}
            language={language}/>
        }
        detail={
          <Multi
            eng={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2016 - 2018 :: Nancy, France </>}
            fr={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2016 - 2018 :: Nancy, France </>}
            zh={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2016 至 2018 :: 南錫，法國</>}
            language={language}/>
        }
      />
    </>
);


export const Skills = ({language}) => (
  <>
    <Content
      separator={false}
       body={<small><Multi eng='Illustration — Visual development — Web design — Concept art — Motion graphic — Photography — Video compositing — Video editing — Sound design'
       fr='Illustration — Visual development — Web design — Concept art — Motion graphic — Photographie — Video compositing — Video editing'
       zh='插圖 — 網絡設計 — 概念藝術 — 動態圖像設計 — 攝影 — 視頻剪輯 — 聲音設計 — 視頻合成'
       language={language}
       /></small>}
    />
  </>
);

export const Lang = ({language}) => (
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
)

export const Techni = () => (
  <div className='techniSection'>
  <Content header={<small><b>Photoshop, Illustrator, Premiere Pro, Figma, XD, After Effects, InDesign, Audition, Logic Pro X</b></small>}/>
  <Content header={<small><b>HTML, CSS, Javascript, Python, SQL (basic), PHP, C# (basic)</b></small>}/>
  <Content header={<small><b>Maya, ZBrush, Blender, Substance Painter, Unity</b></small>}/>
  <Content header={<small><b>TouchDesigner, Resolume Arena, MaxMSP</b></small>} separator={false}/>
  </div>
);

export const Commu = ({language}) => (
  <>
  <Content
    header={ <Label ico={logo_mmvm}><Multi eng="Montrez-moi vos muscles Records" fr="Label Montrez-moi vos muscles" zh="Montrez-moi vos muscles 唱片公司" language={language} /></Label> }
    body={
      <small>
        <Multi
          eng="Member and visual Artist at the music record Montrez-moi vos muscles (VJ, music video...)"
          fr="Membre et artiste visuel du label Montrez-moi vos muscles (VJ, clips...)"
          zh="Montrez-moi vos muscles 唱片公司會員、視覺設計師 (VJ, 音樂視頻...)"
          language={language}
        />
      </small>
    }

    detail={ <Multi eng="2019 - 2021 :: Strasbourg, France" fr="2019 - 2021 :: Strasbourg, France" zh="2019 至 2021 :: 斯特拉斯堡，法國" language={language} /> }
   />

  <Content
    header={ <Label ico={logo_WIUP}><Multi eng="WIUP radio station" fr="Station radio WIUP" zh="WIUP 廣播電台" language={language} /></Label> }
    body={
      <small>
        <Multi
          eng="Member of the Music Team, selecting new musics and helping the Web Team."
          fr="Membre de la Music Team, selection des nouveaux morceaux et assistance à la Web Team."
          zh="音樂團體會員 : 選擇新的音樂要直播、網站團體助理"
          language={language}
        />
      </small>
    }

    detail={ <Multi eng="2018 - 2019 :: Indiana (PA), USA" fr="2018 - 2019 :: Indiana (PA), USA" zh="2018 至 2019 :: 印第安納 (PA)，美國" language={language} /> }
   />

  <Content
    header="HUMMUß GAFFER"
    body={
      <small>
        <Multi
          eng="Experiential art research with Clémence Fontaine."
          fr="Duo de recherche en art expérientiel avec Clémence Fontaine."
          zh="跟Clémence Fontaine一起藝術研究"
          language={language}
        />
      </small>
    }

    detail={ <Multi eng="2016 - 2018 :: Nancy, France" fr="2016 - 2018 :: Nancy, France" zh="2016 至 2018 :: 南錫，法國" language={language} /> }
   />

  <Content
    separator={false}
    header={ <Multi eng="ENSAD’s BDE (student office)" fr="BDE de l'ENSAD (bureau des étudiants)" zh="ENSAD BDE (學生辦公室)" language={language} />}
    body={
      <small>
        <Multi
          eng="Communication manager, designing events’ communication medias."
          fr="Chargé de communication, design et diffusion des affiches et bannières."
          zh="通訊經理、廣告畫設計"
          language={language}
        />
      </small>
    }

    detail={ <Multi eng="2016 - 2017 :: Nancy, France" fr="2016 - 2017 :: Nancy, France" zh="2016 至 2017 :: 南錫，法國" language={language} /> }
   />

  </>
);


export const Events = ({language}) =>(
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

export const Press = ({language}) => (
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
