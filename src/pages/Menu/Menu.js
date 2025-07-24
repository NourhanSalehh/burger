import './Menu.css';
import one from '../../assets/big-wahmy-mix.webp'
import two from '../../assets/burger-ranch.jpg'
import three from '../../assets/corn.webp'
import four from '../../assets/cranchy-dip.webp'
import five from '../../assets/elabtal.webp'
import six from '../../assets/fries.webp'
import seven from '../../assets/makok-wahmy.webp'
import eight from '../../assets/mega-angos.webp'
import nine from '../../assets/wahmy-gangam.webp'
import ten from '../../assets/talabat-elfada.webp'

function Menu() {
  const menuItems = [
    {
      category:"المنيو",
      items: [
        {
          name: " فرايز ",
          price: "EGP 70",
          img: six
        },
        {
          name: "مكوك وهمي  ",
          price: "EGP 170",
          img: seven
        },
        {
          name: "الابطال ",
          price: "EGP 200",
          img: five
        },
        {
          name: "ميجا انجوس ",
          price: "EGP 290",
          img: eight
        },
        {
          name: "وهمي جانجم ديب",
          price: "EGP 180",
          img: nine
        },
        {
          name: "كرانشي ديب",
          price: "EGP 150",
          img: four
        },
        {
          name: " كورن",
          price: "EGP 50",
          img: three
        },
        {
          name: "طلبات الفضاء",
          price: "EGP 130",
          img: ten
        },
        {
          name: "بيج وهمي مكس",
          price: "EGP 120",
          img: one
        },
        {
          name: "برجر رانش",
          price: "EGP 160",
          img: two
        },
        
      ]
    },
      
  ];

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1>منيو المجرة بتاعتنا </h1>
          <p>من أول لقمة هتحس إنك في عالم تاني</p>
        </div>
      </section>
      <section className="full-menu">
        <div className="container">
          {menuItems.map(category => (
            <div key={category.id} className="menu-category">
              <h2>{category.category}</h2>
              <div className="category-items">
                {category.items.map(item => (
                  <div className="menu-item">
                    <div className="item-image">
                      <img src={item.img} alt={`${item.name}`} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
