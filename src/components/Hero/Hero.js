import { Link } from 'react-router-dom';
import './Hero.css';
import team from '../../assets/hero.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>وهمي برجر احلي برجر</h1>
            <p className="subtitle">ملوك البرجر المشوي بساندوتشات عملاقه غرقانة جبنه و فرايز بطعم خيالي و من عالم تاني 
</p>
            <Link to="/menu" className="btn btn-primary">شوف المنيو بتاعنا</Link>
          </div>
          <div className="hero-image">
            <img src={team} alt="our team" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
