import Hero from '../Hero/Hero';
import Menu from '../../pages/Menu/Menu'
import Contact from '../../pages/Contact/Contact';
import About from '../../pages/About/About';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
