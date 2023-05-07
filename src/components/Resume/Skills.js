import { Multi } from '../Inputs';


const skillsList = {
  eng: ["Illustration","Visual development","Web design","Concept art","Motion graphic","Photography","Video compositing","Video editing","Sound design"],
  fr: ["Illustration", "Visual development", "Web design", "Concept art", "Motion graphic", "Photographie", "Video compositing", "Video editing"],
  zhg: ["插圖", "網絡設計", "概念藝術", "動態圖像設計", "攝影", "視頻剪輯", "聲音設計", "視頻合成"]
}

const Skills = ({language}) => (
  <div className='content skills'>
      <Multi 
        eng={skillsList.eng.map(item => <small key={'skill'+item}><b>{item}</b></small>)}
        fr={skillsList.fr.map(item => <small key={'skill'+item}><b>{item}</b></small>)}
        zh={skillsList.zhg.map(item => <small key={'skill'+item}><b>{item}</b></small>)}
        language={language}
        />
    </div>
);

export default Skills;