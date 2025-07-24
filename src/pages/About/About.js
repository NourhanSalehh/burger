import './About.css';
import logo from '../../assets/logo.webp'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>إزاي وصلنا من الفضاء لبرجر</h1>
        </div>
      </section>
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>مين وهمي دا </h2>
              <p>
                في قلب مصر، تحديدًا وسط الزحمة والحركة، قررنا نفتح مطعم مش عادي… مطعم جاي من الفضاء! 🚀
"وهمي برجر " هو مطعم برجر مختلف، بنقدّم تجربة طعم خيالية، كأنك بتسافر للمجرة مع كل لقمة! استخدمنا أجود أنواع اللحوم، وتبّلات سرية من كواكب تانية، علشان كل ساندويتش يبقى أسطوري.
              </p>
            </div>
            <div className="story-image">
              <img src={logo} alt="Chef Ali Mohamed posing with astronauts at NASA Houston" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
