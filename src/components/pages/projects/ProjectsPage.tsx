import { useState } from "react";
import Banner from "../../banner/Banner";
import './ProjectsPage.css';

function ProjectsPage() {
    const [cardIndex, setCardIndex] = useState(0);
    const cards = [1, 2, 3];

    return (
        <Banner>
            <div className='banner__title'>Projects {cardIndex}</div>
            <div className="projects">

                <div className="arrow arrow--left" onClick={() => cardIndex > 0 ?? setCardIndex(cardIndex - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 1024 1024"><path fill="#fff" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/></svg>
                </div>
                <div className="arrow arrow--right" onClick={() => cardIndex < cards.length ?? setCardIndex(cardIndex + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 1024 1024"><path fill="#fff" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/></svg>

                </div>

                {
                    cards.map((card, i) => 
                        <div className={`${i === cardIndex ? 'projects__card--show' : ''} projects__card`}>
                        <div className="projects__card--preview"></div>
                        <div className="projects__card--info">
                            <div className="projects__card--title">Test {card}</div>
                            <div className="projects__card--Description">super boring project</div>
                        </div>
                    </div>
                    )
                }
            </div>

            <div className='banner__description'>Like what you see?</div>
            <button  className='header__cta'>Contact Us</button>
        </Banner>
    );
}

export default ProjectsPage;
