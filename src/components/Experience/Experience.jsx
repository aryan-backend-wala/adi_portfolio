import {
  box,
  heading,
  card,
  cardImage,
  cardContent,
  gra,
  gridBox
} from './Experience.module.css';

export default function Experience() {

  const obj = [
    {img: '/icons/bookmark.svg'},
    {img: '/icons/bulb.svg'},
    {img: '/icons/cup.svg'},
    {img: '/icons/glass.svg'},
  ];

  return <section id='experience'>
    <div className={box}>
      <div className={gra}></div>
      <h2 className={heading}>Work Experience</h2>
      <div className={gridBox}>
        {obj.map(card => (
          <Card key={card.img} img={card.img} />
        ))}
      </div>
      <img src='/icons/Skills.svg' style={{ marginTop: "160px", alignSelf: "center"}} />
    </div>
  </section>
}

function Card({img}) {
  return <div className={card}>
    <img src={img} className={cardImage} />
    <div className={cardContent}>
      <p style={{ width: "256px", fontSize: "26px", lineHeight: '31px' }}>CIB on the Mobile</p>
      <p style={{ width: "232px", fontSize: "10px", lineHeight: "10.5px" }}>
        Take your client onboard seamlessly by our amazing
        tool of digital onboard process.
      </p>
      <button>Learn More</button>
    </div>
  </div>
}