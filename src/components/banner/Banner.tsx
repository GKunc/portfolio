import { ReactNode } from 'react';
import './Banner.css';

function Banner({ children }: { children: ReactNode }) {
  return (
    <div className='banner'>
        <div className='banner__content content_animation'>
            {children}
        </div>
        {/* <div className='banner__content--bottom'>
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
            </div> */}
    </div>
  );
}

export default Banner;
