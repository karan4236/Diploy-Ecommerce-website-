import bg from "../../assets/Img/bg0.gif";
import "./Home.css";
import { category } from "../../category";
// import Product from "../../Product/Product";
import { dummydata } from "../../dummydata";
import Product from "../../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-img">
        <img src={bg} alt="background img" />
      </div>
      <div className="cetogery-section">
        {category.map((items) => (
          <div className="category-cart" key={items.id}>
            <img src={items.img} alt={items.name} />
            <div className="category-item-name">
              <span>{items.name}</span>
            </div>
          </div>
        ))}
      </div>

      <h1>Tranding Product</h1>
      <div className="product-section">
        {dummydata.map((item) => (
          <Product name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
