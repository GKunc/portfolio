import './App.css';
import Header from './components/header/Header';
import HomePage from './components/pages/home/HomePage';
import { useRef, useState } from 'react';
import ProjectsPage from './components/pages/projects/ProjectsPage';
import FeaturesPage from './components/pages/features/FeaturesPage';
import { debounce } from 'lodash';

function App() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = debounce((e: any) => {
    if(e.deltaY < 0) {
      return
    }
    if(sectionRef1.current?.classList.contains('visible') && currentSlide === 0) {
      sectionRef1.current?.classList.add('hidden');
      sectionRef1.current?.classList.remove('visible');
      sectionRef2.current?.classList.add('visible');
      sectionRef2.current?.classList.remove('hidden');
    }

    if(sectionRef2.current?.classList.contains('visible')  && currentSlide === 1) {
      sectionRef2.current?.classList.add('hidden');
      sectionRef2.current?.classList.remove('visible');
      sectionRef3.current?.classList.add('visible');
      sectionRef3.current?.classList.remove('hidden');
    }
    setCurrentSlide(state => state + 1);
  }, 300)
  
  return (
      <div onWheel={nextSlide} className="app">
        <Header />

        <main ref={sectionRef1} className='visible'>
          <HomePage />
        </main>

        <main ref={sectionRef2} className='hidden'>
          <ProjectsPage />
        </main>

        <main ref={sectionRef3} className='hidden'>
          <FeaturesPage />
        </main>
      </div>
  );
}

export default App;
