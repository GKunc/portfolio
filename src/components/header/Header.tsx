import './Header.css';

function Header() {
  return (
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
  );
}

export default Header;
