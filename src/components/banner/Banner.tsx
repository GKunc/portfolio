import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__content'>
            <div className='banner__title'>Hello there!</div>
            <div>
                <div className='banner__description'>Do you want to get more information?</div>
                <div className='banner__description'>Contact us and give as some details</div>
                <div className='banner__description'>We will respond as soon as possible!</div>
            </div>
            <div>
                <button  className='header__cta'>Contact Us</button>
            </div>
        </div>
        <div className='banner__content--bottom'>
                <div className='banner__content--bottom-inner'></div>
            </div>
    </div>
  );
}

export default Banner;
