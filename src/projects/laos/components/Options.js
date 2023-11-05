export default () => (
    <div id="laos_options">
  
      <div id="op_topBanner">
          <img src="/assets/projects/laos/LAOS_about.svg" />
         <section style={{fontSize: '80%', color: '#777', fontWeight: '300'}}> settings</section>
      </div>
  
      <label id="openLaos" className="ui">
        Open LAOS
        <input type="button"></input>
      </label>
      <br />
  
      <span className="sepbar"></span>
  
      <div className="setting_box">
  
      <div className="laos_setting">
        <p>Hover translation</p>
        <label className="switch">
          <input type="checkbox" name="hoverTrans" defaultChecked />
          <span className="slider ui"></span>
        </label>
      </div>
  
      <div className="laos_setting">
        <p>Display zhuyin</p>
        <label className="switch">
          <input type="checkbox" name="dispZhuyin" defaultChecked />
          <span className="slider ui"></span>
        </label>
      </div>
  
      <div className="laos_setting">
        <p>Notifications</p>
        <label className="switch">
          <input type="checkbox" name="activeNotif" />
          <span className="slider ui"></span>
        </label>
      </div>
  
      <div className="laos_setting ui nogap round">
        <label className="radio">
          <input defaultChecked type="radio" name="tradsimp" value="simplified" />
          <span></span>
          <p>Simplified</p>
        </label>
  
        <label className="radio">
          <input type="radio" name="tradsimp" value="traditional" defaultChecked />
          <span></span>
          <p>Traditional</p>
        </label>
  
      </div>
  
    </div>
  
      <div id="about">
        <a> about </a>
      </div>
    </div>
  
  );