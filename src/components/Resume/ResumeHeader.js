import { Multi } from '../Inputs';

const ResumeHeader = ({ innerRef = (e) => 0, language = 'english', header = "Nassim El Khantour", subtitle = true }) => (
  <section ref={e => innerRef(e)} id="resume-header">
    <div>
      <h2>{header}</h2>
      {subtitle && <p style={{ fontSize: '1.3em' }}>
        <Multi
          eng='Multimedia Designer :: Art Director :: Developer'
          fr='Designer Multimédia :: Directeur Artistique :: Développeur'
          zh='多媒體設計師  ::  藝術總監  ::  網站工程師'
          language={language} />
      </p>}

      <Multi
        eng={<>I am a French creative with an expertise in Web and Motion Design, but also proficiencies in development, 3D design, and illustration.
          An extended skill set I put at work in various projects for the past 7 years such as music videos, web apps, as well as audiovisual interactive setups.
        </>}
        fr={<>Je suis un Créatif français avec une expertise en Web et Motion Design, et des compétences en développement, design 3D, ainsi qu’en illustration. <br /> Un vaste panel de compétences que j’ai pu mettre à l’œuvre ces 7 dernières années dans une variété de projets tels que la réalisation de clips musicaux,
          d’applications web, mais aussi au sein d’installations audiovisuelles interactives.
        </>}
        zh={<>
          我是一個法國人的多媒體設計帥，擅長網站與動態圖形設計。也製作
          3D設計，網站開發以及插圖的內容。已有七年以上視覺設計師相關經
          歷。我現在要去台灣定居
        </>}
        language={language}
      />

    </div>
  </section>
);

export default ResumeHeader;