import Label from './Label';
import Content from './Content';
import List from './List';
import { Multi } from '../Inputs';
import logo_rdb from '@/assets/logos/redbox_logo.png';
import logo_N from '@/assets/logos/N_logo.png';
import logo_NEK from '@/assets/logos/NEK.png';


const Pro = ({language}) => (
    <>
      <Content
        header={<Label ico={logo_rdb.src}><Multi eng='Lead Designer: Motion, Web & Print productions' fr='Lead Designer: Motion, Web & Print design' zh='領導視覺計師 : 動態圖形設 、 網站 、 印刷製作' language={language}/></Label>}
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
        header={<Label ico={logo_N.src}><Multi eng='Freelance in audiovisual & Web Design' fr='Freelance en audiovisuel et Web Design' zh='網絡設計師與音像製作自由職業者' language={language}/></Label>}
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
        header={<Label ico={logo_NEK.src}><Multi eng='Graphic and Multimedia designer' fr='Designer Graphique et Multimédia' zh='視覺與多媒體設計師' language={language}/></Label>}
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


export default Pro;