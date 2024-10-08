import {
  box,
  purpleText,
  meImage,
  meBox,
  meContent,
  hello,
  imageBox,
  judge,
  gra,
  heading
} from './About.module.css';

const About = () => {
  return (
    <section id="about">
      <div className={box}>
        <p className={hello}>Hello! I am <span className={purpleText}>Aryan Verma</span></p>
        <div className={meBox}>
          <img src='/icons/me-g.svg' className={gra} />
          <div className={imageBox}>
            <img src='/icons/me.svg' className={meImage} />
          </div>
          <div className={meContent}>
            <span style={{ fontSize: '17px' }}>A Designer who</span>
            <div className={judge}>
              Judges a book
              by its <span className={purpleText}>Cover</span>
            </div>
            <span style={{ fontSize: '11px' }}>Because if the cover does not impress you what else can?</span>
          </div>
        </div>
        <div style={{ width: "697px", paddingTop: "96px"}}>
          <h2 className={heading}>I'm a Motion Designer</h2>
          <p style={{ fontSize: "19px", lineHeight: "31px", paddingTop: '24px', maxWidth: '674px'}}>
            Currently, I'm a Software Engineer at  
            <span> <img src='/icons/facebook.svg' style={{ verticalAlign: 'middle'}} /> </span> 
            Facebook,
          </p>
          <p style={{width: '870px', paddingTop: '70px', fontSize: '22px', letterSpacing: '2%', lineHeight: '31px'}}>
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;