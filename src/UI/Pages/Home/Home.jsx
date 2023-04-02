import React, { useState, useEffect } from 'react';
import './Home.scss';
import Cover from './Cover.jsx';
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
    <div className='Home'>
      <ThreeBackground />
      <Cover linkToRef={linkToRef} />
      <Advice />
      <Profile />
      <Contact />
      {scrollPos > 1049 && window.innerWidth >= 750 && <Navbar linkToRef={linkToRef} />}
      {window.innerWidth < 750 && <Navbar linkToRef={linkToRef} />}
    </div>
  );
};

export default Home;
