import Banner from "../../banner/Banner";

function HomePage() {
    return (
        <Banner>
            <div className='banner__title'>Hello</div>
            <div>
                <div className='banner__description'>Do you want to get more information?</div>
                <div className='banner__description'>Contact us and give as some details</div>
                <div className='banner__description'>We will respond as soon as possible!</div>
            </div>
            <div>
                <button  className='header__cta'>Contact Us</button>
            </div>
        </Banner>
    );
}

export default HomePage;
