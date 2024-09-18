import Banner from "../../banner/Banner";
import './ProjectsPage.css';

function ProjectsPage() {
    return (
        <Banner>
            <div className='banner__title'>Projects</div>
            <div className="projects">
                <div className="projects__card">
                    <div className="projects__card--preview"></div>
                    <div className="projects__card--info">
                        <div className="projects__card--title">Test 1</div>
                        <div className="projects__card--Description">super boring project</div>
                    </div>
                </div>
                <div className="projects__card">
                    <div className="projects__card--preview"></div>
                    <div className="projects__card--info">
                        <div className="projects__card--title">Test 1</div>
                        <div className="projects__card--Description">super boring project</div>
                    </div>
                </div>
                <div className="projects__card">
                    <div className="projects__card--preview"></div>
                    <div className="projects__card--info">
                        <div className="projects__card--title">Test 1</div>
                        <div className="projects__card--Description">super boring project</div>
                    </div>
                </div>
            </div>

            <div className='banner__description'>Like what you see?</div>
            <button  className='header__cta'>Contact Us</button>
        </Banner>
    );
}

export default ProjectsPage;
