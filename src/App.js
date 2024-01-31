import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Sidemenu from './components/Sidemenu';

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [closeClicked, setCloseClicked] = useState(false);
  const [isThresholdReached, setIsThresholdReached] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const currSrollPosition = window.scrollY;

      if (currSrollPosition > prevScrollPosition) {
        setScrollDirection('down');
      }
      else {
        setScrollDirection('up');
      }

      setPrevScrollPosition(currSrollPosition);

      if (currSrollPosition > scrollThreshold) {
        setIsThresholdReached(true);
      } else {
        setIsThresholdReached(false);
      }
    };

    const handleLinkClick = (event) => {
      event.preventDefault();
      const clickedId = event.target.getAttribute('href').substring(1);
      const clickedElement = document.getElementById(clickedId);

      if (clickedElement) {
        console.log("absolutely yes");
        window.scrollTo({
          top: clickedElement.offsetTop,
          behavior: 'smooth',
        });
      }

    }

    window.addEventListener('scroll', handleScroll);

    const navLinks = document.querySelectorAll('.headersection-1 a');
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', handleLinkClick);
    })

    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener('click', handleLinkClick);
      })
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPosition])
  return (
    <div className="App">
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} setCloseClicked={setCloseClicked} scrollDirection={scrollDirection} isThresholdReached={isThresholdReached}/>
      <Sidemenu menuClicked={menuClicked} setMenuClicked={setMenuClicked} closeClicked={closeClicked} setCloseClicked={setCloseClicked}/>
      <Home />
      <About />
      <Education />
      <Skills  />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
