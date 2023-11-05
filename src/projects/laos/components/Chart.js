import Masonry from 'react-responsive-masonry';

export default () => (
    <Masonry columnsCount={ window?.matchMedia('(min-width:825px').matches ? 2 : 1} gutter='20px'>
    <div className="infobox guidesheet" key='chart_1'>
      <section className="header">
        <span className='app' style={{backgroundImage: "url('/assets/projects/laos/laos_logo.svg')" }}></span>
        <section>
          <h5>Hover Popup</h5>
        </section>
      </section>
      <table>
        <tbody>
        <tr>
          <td>Primary color</td>
          <td className="guide_prim round" colSpan="1" style={{backgroundColor:'#ECECEC'}}><small>#ECECEC</small></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr>
          <td>Background</td>
          <td className="guide_bkg round" colSpan="1" id="guide_popup">&emsp;</td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr>
          <td rowSpan="4">Typography</td>
        </tr>
  
        <tr className="compare">
          <td className="noto" style={{fontSize:'1.3em'}}>喜歡</td>
          <td>1.1em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto">xǐ huan</td>
          <td>1em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto">to like</td>
          <td>1em</td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
  
        <tr>
          <td rowSpan="5">Tones</td>
        </tr>
  
        <tr className="tone_1 compare">
          <td>tone 1</td>
          <td>#4fa2f7</td>
        </tr>
  
        <tr className="tone_2 compare">
          <td>tone 2</td>
          <td>#ff6a55</td>
        </tr>
  
        <tr className="tone_3 compare">
          <td>tone 3</td>
          <td>#70bd0e</td>
        </tr>
  
        <tr className="tone_4 compare">
          <td>tone 4</td>
          <td>#e54ff2</td>
        </tr>
      </tbody>
      </table>
    </div>
  
    <div className="infobox guidesheet" key='chart_2'>
      <section className="header">
        <span className='app' style={{backgroundImage: "url('/assets/projects/laos/lotus.webp')" }}></span>
        <section>
          <h5>List mode</h5>
        </section>
      </section>
      <table>
        <tbody>
        <tr>
          <td>Primary color</td>
          <td className="guide_prim round" colSpan="2" style={{color:'white', backgroundColor:'#04B3FF'}}><small>#04B3FF</small></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr>
          <td>Background</td>
          <td className="guide_bkg round" colSpan="2" style={{backgroundImage:'linear-gradient(-45deg, #b3dfff 0%, #f8eaff 100%)'}}>&emsp;</td>
          <td>&emsp;</td>
          <td colSpan="2" className="guide_bkg round" style={{backgroundColor:'#222222', color:'white'}}><small>#222222</small></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr className="tspace">
          <td></td>
          <td colSpan="2"></td>
          <td></td>
          <td colSpan="2" className="darkmode begin"></td>
        </tr>
  
        <tr>
          <td rowSpan="4">Typography</td>
        </tr>
  
        <tr className="compare">
          <td className="noto" style={{fontSize:'1.3em'}}>喜歡</td>
          <td>1.1em</td>
          <td></td>
          <td className="noto white darkmode" style={{fontSize:'1.3em'}}>喜歡</td>
          <td className="white darkmode">1.1em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto">xǐ huan</td>
          <td>1em</td>
  
          <td></td>
  
          <td className="noto white darkmode">xǐ huan</td>
          <td className="white darkmode">1em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto">to like</td>
          <td>1em</td>
  
          <td></td>
  
          <td className="noto white darkmode">to like</td>
          <td className="white darkmode">1em</td>
        </tr>
  
        <tr className="tspace">
          <td></td>
          <td colSpan="2"></td>
          <td></td>
          <td colSpan="2" className="darkmode"></td>
        </tr>
        <tr className="tspace">
          <td></td>
          <td colSpan="2"></td>
          <td></td>
          <td colSpan="2" className="darkmode"></td>
        </tr>
        <tr>
          <td>Default</td>
          <td colSpan="2" className="guide_case round" style={{backgroundColor:'#FFFFFF'}}><small>#FFFFFF</small></td>
          <td></td>
          <td colSpan="2" className="darkmode"><span  className="guide_case white round" style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%', backgroundColor:'#888888'}}><small>#888888</small></span></td>
        </tr>
  
        <tr className="tspace">
          <td></td>
          <td colSpan="2"></td>
          <td></td>
          <td colSpan="2" className="darkmode"></td>
        </tr>
  
        <tr>
          <td>Selected</td>
          <td colSpan="2" className="guide_case round" style={{backgroundColor:'white', backgroundImage:'linear-gradient(90deg, rgba(255, 0, 115, 0.46) 0%, rgba(4, 179, 255, 0.69) 100%)' }} >&emsp;</td>
          <td></td>
          <td colSpan="2" className="darkmode"><span className="guide_case white round" style={{display: 'block', width: '100%', backgroundSize: 'contain', backgroundColor:'white', backgroundImage:'linear-gradient(90deg, rgba(255, 0, 115, 0.46) 0%, rgba(4, 179, 255, 0.69) 100%)' }}>&emsp;</span></td>
        </tr>
  
        <tr className="tspace">
          <td></td>
          <td colSpan="2"></td>
          <td></td>
          <td colSpan="2" className="darkmode end"></td>
        </tr>
  
      </tbody>
      </table>
    </div>
  
    <div className="infobox guidesheet" key='chart_3'>
      <section className="header">
        <span className='app' style={{backgroundImage: "url('/assets/projects/laos/yin.webp')" }}></span>
        <section>
          <h5>Flashcards</h5>
        </section>
      </section>
      <table>
        <tbody>
        <tr>
          <td>Primary color</td>
          <td className="guide_prim round" colSpan="1" style={{backgroundColor:'#EB3467', color:'white' }}><small>#EB3467</small></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="2"></td>
          <td></td>
          <td colSpan="2"></td>
        </tr>
  
        <tr>
          <td>Background</td>
          <td className="guide_bkg round" colSpan="1" style={{backgroundImage:'linear-gradient(131deg, #61AFFF -69%, white 100%)'}}>&emsp;</td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr>
          <td rowSpan="4">Typography</td>
        </tr>
  
        <tr className="compare">
          <td className="noto sanguin top" style={{fontSize:'1.3em'}}>喜歡</td>
          <td className="sanguin"></td>
          <td className="sanguin top">2.4em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto sanguin bottom" style={{fontSize:'1.3em'}}>xǐ huan</td>
          <td className="sanguin"></td>
          <td className="sanguin bottom">2.4em</td>
        </tr>
  
        <tr className="compare">
          <td style={{fontFamily:'noto-bold', color:'black' }}>to like</td>
          <td></td>
          <td>bold / 1em</td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
  
        <tr className="laos_card">
          <td>Cards</td>
          <td></td>
          <td>&emsp;</td>
          <td></td>
        </tr>
  
      </tbody>
      </table>
    </div>
  
    <div className="infobox guidesheet" key='chart_4'>
      <section className="header">
        <span className='app' style={{backgroundImage: "url('/assets/projects/laos/fire.webp')"}}></span>
        <section>
          <h5>Fast type</h5>
        </section>
      </section>
      <table>
        <tbody>
        <tr>
          <td>Primary color</td>
          <td className="guide_prim round" style={{backgroundColor:'#FF9600', color:'white' }}><small>#FF9600</small></td>
        </tr>
  
        <tr className="tspace">
          <td></td>
        </tr>
  
        <tr>
          <td>Background</td>
          <td className="guide_bkg round" style={{backgroundImage:'linear-gradient(0deg, #090078 0%, #8d2dfd 100%)'}}>&emsp;</td>
        </tr>
  
        <tr className="tspace">
          <td></td>
        </tr>
  
        <tr>
          <td rowSpan="4">Typography</td>
        </tr>
  
        <tr className="compare">
          <td className="noto" style={{fontSize:'1.3em'}}>喜歡</td>
          <td>7em</td>
        </tr>
        <tr className="compare">
          <td className="noto"  style={{fontSize:'1.3em'}}>xǐ huan</td>
          <td className="">7em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto"> to like</td>
          <td className="">1em</td>
        </tr>
  
        <tr className="tspace">
          <td></td>
        </tr>
  
      </tbody>
      </table>
    </div>
  
    <div className="infobox guidesheet" key='chart_5'>
      <section className="header">
        <span className='app' style={{backgroundImage: "url('/assets/projects/laos/chakra.webp')"}}></span>
        <section>
          <h5>Fill the blank</h5>
        </section>
      </section>
      <table>
        <tbody>
        <tr>
          <td>Primary color</td>
          <td className="guide_prim round" colSpan="1" style={{color:'white', backgroundColor:'#FF00EB'}}><small>#FF00EB</small></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr>
          <td>Background</td>
          <td className="guide_bkg round" colSpan="1" style={{backgroundImage:"linear-gradient(325deg, #ffafee 0%, #bdb1ff 100%)"}}>&emsp;</td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="3"></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="2"></td>
        </tr>
  
        <tr>
          <td rowSpan="4">Typography</td>
        </tr>
  
        <tr className="compare">
          <td className="noto whitebkg top" style={{fontSize:'1.5em'}}>喜歡</td>
          <td className="whitebkg"></td>
          <td className="whitebkg top">2.4em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto whitebkg"  style={{color:'#FF00EB'}}>xǐ huan</td>
          <td className="whitebkg"></td>
          <td className="whitebkg" style={{color:'#FF00EB'}}>1em</td>
        </tr>
  
        <tr className="compare">
          <td className="noto whitebkg bottom">to like</td>
          <td className="whitebkg"></td>
          <td className="whitebkg bottom">1em</td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="2"></td>
        </tr>
  
  
        <tr>
          <td>Blank areas</td>
          <td colSpan="2" className="guide_case round" style={{backgroundColor:'#FFFFFF',   boxShadow: 'inset 0px 0px 3px #444' }}>&emsp;</td>
          <td></td>
          <td></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="2"></td>
        </tr>
  
        <tr>
          <td>Word bubble</td>
          <td colSpan="2" className="guide_case round" style={{backgroundColor:'#ffffff', filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.3))' }}>&emsp;</td>
          <td></td>
          <td></td>
        </tr>
  
        <tr className="tspace">
          <td colSpan="2"></td>
        </tr>
  
      </tbody>
      </table>
    </div>
    </Masonry>
  );