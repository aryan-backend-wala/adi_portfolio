import {
  box
} from './Footer.module.css';

export default function Footer() {
  const obj = [
    {imag: "/icons/insta.svg"},
    {imag: "/icons/ball.svg"},
    {imag: "/icons/google.svg"},
  ]
  return <search id='footer'>
    <div className={box}>
      <p>Contact</p>
      <p style={{ width: "703px", paddingTop: "70px"}}>
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design. or have a project in mind? Let's connect.
      </p>
      <p style={{ paddingTop: "30px"}}>ibrhaimmemon930@gmail.com</p>
      <div style={{
        display: "flex",
        gap: "25px",
        marginTop: "30px"
      }}>
        {
          obj.map(icon => (
            <a key={icon.imag}>
              <img src={icon.imag} />
            </a>
          ))
        }
      </div>
    </div>
  </search>
}