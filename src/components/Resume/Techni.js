import Content from './Content';
import { Multi } from '@/components/Inputs';

const techList = {

  design: {
    subtitle: { eng: "Design", fr: "Design", zh: "設計" },
    list: ["Photoshop", "Illustrator", "Premiere Pro", "Figma", "XD", "After Effects", "InDesign", "Audition", "Logic Pro X"]
  },
  development: {
    subtitle: { eng: "Development", fr: "Développement", zh: "開發" },
    list: ["HTML", "CSS", "JavaScript", "Python", "SQL (basic)", "PHP", "C# (basic)"]
  },
  production: {
    subtitle: { eng: "3D Production", fr: "Production 3D", zh: "3D製作" },
    list: ["Maya", "ZBrush", "Blender", "Substance Painter", "Unity"]
  },
  mapping: {
    subtitle: { eng: "Video Mapping", fr: "Vidéo Mapping", zh: "Video Mapping" },
    list: ["TouchDesigner", "Resolume Arena", "MaxMSP"]
  }
}

const Techni = ({ language }) => (
  <div className='content technical'>
    {Object.keys(techList).map(key => {
      const item = techList[key];
      return (<section key={'section' + key} className='border-light round padleft padright'>
        <section>
          <small className='discrete'>
            <Multi
              eng={item.subtitle.eng}
              fr={item.subtitle.fr}
              zh={item.subtitle.zh}
              language={language}
            />
          </small>
          <ul>
            {item.list.map(software => <li key={'soft' + software}><b>{software}</b></li>)}
          </ul>
        </section>
      </section>);

    })
    }
  </div>
);

export default Techni;