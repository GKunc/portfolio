import './App.css';
import Header from './components/header/Header';
import HomePage from './components/pages/home/HomePage';
import { useEffect, useRef } from 'react';
import ProjectsPage from './components/pages/projects/ProjectsPage';

function App() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  
  const nextSlide = () => {
    (sectionRef1.current as any)?.classList.add('hidden');
    (sectionRef1.current as any)?.classList.remove('visible');
    (sectionRef2.current as any)?.classList.add('visible');
    (sectionRef2.current as any)?.classList.remove('hidden');
  }

  useEffect(() => {
    window.addEventListener('wheel', nextSlide);
    return () => window.removeEventListener('wheel', nextSlide);
  }, []);

  return (
      <div className="app">
        <Header />

        <main onClick={nextSlide} ref={sectionRef1}>
          <HomePage />
        </main>

        <main ref={sectionRef2} className='hidden'>
          <ProjectsPage />
        </main>
      </div>
  );
}

export default App;
