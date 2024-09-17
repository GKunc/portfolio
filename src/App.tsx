import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import { useEffect, useRef } from 'react';

function App() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  
  const nextSlide = () => {
    (sectionRef1.current as any)?.classList.add('hidden');
    (sectionRef2.current as any)?.classList.add('visible');
  }

  // useEffect(() => {
  //   window.removeEventListener('click', nextSlide);
  //   window.addEventListener('click', nextSlide);

  //   return () => window.removeEventListener('click', nextSlide);
  // }, [sectionRef1]);

  return (
      <div className="app">
        <Header />

        <main onClick={nextSlide} ref={sectionRef1}>
          <Banner title={'Hello there!'}/>
        </main>

        <main ref={sectionRef2} className='hidden'>
          <Banner title={'Next'}/>
        </main>
      </div>
  );
}

export default App;
