import './Header.css';
import Menu from './Menu';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          GKUNC
        </div>
        <div className='header__navigation'>
          <a className='header__link'>Home</a>
          <a className='header__link'>About</a>
          <a className='header__link'>Contact</a>
        </div>
        <button  className='header__cta'>Contact Us!</button>
      </header>

      <header className='header__mobile'>
        <div className='header__logo'>
          GKUNC
        </div>
        <Menu />
      </header>
    </>
  );
}

export default Header;
