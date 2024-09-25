import {
  box,
  project,
  gra,
  left,
  right,
  glow
} from './Featured.module.css';

export default function Featured(){
  return <section>
    <div className={box}>  
      <div className={project}>
        {/* <div className={gra}></div> */}
        <div className={left}>
          <p style={{ color: "#9857D3", fontSize: "16px", lineHeight: "24px"}}>Featured  Project</p>
          <h3 style={{ color: "#CCD6F6", fontSize: "34px", lineHeight: "51px"}}>Example Project</h3>
          <div className={glow}>
            
          </div>
        </div>
        <div className={right}></div>
      </div>
    </div>
  </section>
}