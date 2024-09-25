import {
  navbar,
  logo, 
  navbarBox,  
  navbarLogo, 
  navbarNav, 
  navbarLinks
} from './Navbar.module.css';

const Navbar = () => {
  const links = ['home', 'about', 'lab'];
  return (
    <header id="header">
      <nav className={navbar}>
        <div className={navbarLogo}>
          <img src='/icons/logo.svg' alt='logo' className={logo} />
        </div>
        <div className={navbarBox}>
          <ul className={navbarNav}>
            {links.map(link => (
              <li key={link}>
                <a className={navbarLinks} href={link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;