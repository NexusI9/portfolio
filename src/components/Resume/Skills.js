import { Multi } from '../Inputs';
import Content from './Content';

const Skills = ({language}) => (
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

export default Skills;