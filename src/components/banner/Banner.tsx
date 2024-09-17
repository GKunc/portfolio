import './Banner.css';

function Banner({title}: {title: string}) {
  return (
    <div className='banner'>
        <div className='banner__content'>
            <div className='banner__title'>{title}</div>
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
                <div className='banner__content--bottom-inner'>
                  <div className='banner__content--statistics'>
                    <div className='banner__content--big'>5</div> Years 
                  </div>
                  <div className='banner__content--statistics'>
                    <div className='banner__content--big'>10</div> Happy clients
                  </div>
                  <div className='banner__content--statistics'>
                    <div className='banner__content--big'>24/7</div> Support
                  </div>
                </div>
            </div>
    </div>
  );
}

export default Banner;
