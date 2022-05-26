import heroSlide from "../assets/images/hero-slide.svg";
import Button from "./Button";

const HeroSlide = () => {
  return (
    <div className="hero-slide container">
      <div className="hero-slide__content">
        <div className="hero-slide__content__image">
          <img src={heroSlide} alt="" />
        </div>

        <div className="hero-slide__content__items">
          <p className="hero-slide__content__items__title">Gold Big hoops</p>
          <p className="hero-slide__content__items__price">$ 68,000</p>
          <Button title="View Product" bg={false} outLine={false} />
        </div>

        <div className="hero-slide__content__control">
          <ul className="hero-slide__content__control__ul">
            <li className="hero-slide__content__control__ul__li active"></li>
            <li className="hero-slide__content__control__ul__li"></li>
            <li className="hero-slide__content__control__ul__li"></li>
            <li className="hero-slide__content__control__ul__li"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
