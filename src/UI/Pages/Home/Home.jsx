import React, { useState, useEffect } from 'react';
import '../../../App.scss';
import Cover from './Cover.jsx';
import CoverOverlay from './CoverOverlay.jsx';
import Advice from './Advice.jsx';
import Profile from './Profile.jsx';
import Contact from './Contact.jsx';
import Navbar from '../../Components/Navbar.jsx';
import ThreeBackground from './ThreeBackground.jsx';

const Home = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkToRef = (ref) => {
    const linkOffset = 0;
    const refPosition = document.getElementById(ref).getBoundingClientRect().top;
    const offsetPosition = refPosition + window.pageYOffset - linkOffset;
    window.scrollTo({ top: offsetPosition - 30, behavior: 'smooth' });
  };

  return (
    <div className='App'>
      <ThreeBackground />
      <Cover linkToRef={linkToRef} />
      <CoverOverlay scrollPos={scrollPos} />
      <Advice />
      <Profile linkToRef={linkToRef} />
      <Contact />
      {scrollPos > 1049 && window.screen.width >= 1000 && <Navbar linkToRef={linkToRef} />}
      {window.screen.width < 1000 && <Navbar linkToRef={linkToRef} />}
    </div>
  );
};

export default Home;
