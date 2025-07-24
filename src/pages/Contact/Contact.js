import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>تواصل معانا 🚀</h2>
            <p>
              عندك أي سؤال عن برجراتنا الكونية؟ حابب تحجز ترابيزة في مطعمنا اللي معمول على طراز الفضاء؟
ابعتلنا في أي وقت! إحنا دايمًا بنحب نسمع من عشّاق البرجر  
            </p>
            <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
          </div>
          <div className="contact-info">
            <div className="info-box">
              <h3>الموقع</h3>
              <p> ميدان التحرير القاهرة</p>
            </div>
            <div className="info-box">
              <h3>مواعيد العمل</h3>
              <p> 11:00 AM - 12:00 AM</p>
            </div>
            <div className="info-box">
              <h3>تواصل علي</h3>
              <p>+20 100 000 0000</p>
              <p>wahmy@burger.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
