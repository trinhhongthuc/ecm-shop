import Image from "../assets/images/product-1.svg";

import Contact from "./../components/Contact";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import ProductItem from "./../components/ProductItem";
import Review from "./../components/Review";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import TwitterIcon from "@mui/icons-material/Twitter";

import Data from "../fakeAPI/product";

const DetailProduct = () => {
  return (
    <>
      <Header border={true} />

      <div className="detail-product container">
        <section className="detail-product__top">
          <div className="detail-product__top__left">
            <div className="detail-product__top__left__items">
              <div className="detail-product__top__left__items__img">
                <img src={Image} alt="" />
              </div>
              <div className="detail-product__top__left__items__img">
                <img src={Image} alt="" />
              </div>
              <div className="detail-product__top__left__items__img">
                <img src={Image} alt="" />
              </div>
              <div className="detail-product__top__left__items__img">
                <img src={Image} alt="" />
              </div>
            </div>
            <div className="detail-product__top__left__avatar">
              <img src={Image} alt="" />
            </div>
          </div>
          <div className="detail-product__top__right">
            <h2 className="detail-product__top__right__title">Lira Earring</h2>
            <div className="detail-product__top__right__price">$200000</div>

            <div className="detail-product__top__right__star">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span>1 customer review</span>
            </div>
            <div className="detail-product__top__right__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dolores perspiciatis voluptatibus modi eius est
              corrupti aut. Hic possimus autem, est consectetur tempore, sunt
              quis saepe eveniet enim optio nostrum?
            </div>

            <div className="detail-product__top__right__wrapper-count">
              <div className="detail-product__top__right__wrapper-count__quantity">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="detail-product__top__right__wrapper-count__add-cart">
                <button>Add to cart</button>
              </div>
            </div>
            <div className="detail-product__top__right__social">
              <div className="detail-product__top__right__social__icon">
                <FavoriteIcon />
              </div>

              <div className="detail-product__top__right__social__icon">
                <EmailIcon />
              </div>

              <div className="detail-product__top__right__social__icon">
                <FacebookIcon />
              </div>

              <div className="detail-product__top__right__social__icon">
                <InstagramIcon />
              </div>
              <div className="detail-product__top__right__social__icon">
                <TwitterIcon />
              </div>
            </div>

            <div className="detail-product__top__right__note">
              <span>SKU:</span>
              <span>12</span>
            </div>

            <div className="detail-product__top__right__note">
              <span>Categories:</span>
              <span>Fashion, style</span>
            </div>
          </div>
        </section>

        <section className="detail-product__nav">
          <div className="detail-product__nav__menu">
            <div className="detail-product__nav__menu__item ">Description</div>

            <div className="detail-product__nav__menu__item active">
              Aditional information
            </div>

            <div className="detail-product__nav__menu__item">Reviews</div>
          </div>

          <div className="detail-product__nav__description">
            <p>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip lorem ipsum dolor sit amet, consectetur
              adip lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>

          <div className="detail-product__nav__aditional-information">
            <div className="detail-product__nav__aditional-information__note">
              <span>Weight:</span>
              <span>0.3kg</span>
            </div>

            <div className="detail-product__nav__aditional-information__note">
              <span>dimentions:</span>
              <span>15 x 10 x 1cm</span>
            </div>

            <div className="detail-product__nav__aditional-information__note">
              <span>colours:</span>
              <span>Black, Browns, White</span>
            </div>
            <div className="detail-product__nav__aditional-information__note">
              <span>Material:</span>
              <span>Metal</span>
            </div>
          </div>

          <div className="detail-product__nav__review">
            <Review />
            <Contact />
          </div>
        </section>

        <section className="detail-product__related">
          <h2 className="detail-product__related__title">Similar Items</h2>
          <div className="detail-product__related__product">
            {Data.slice(0, 6).map((item, index) => (
              <ProductItem item={item} col={3} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DetailProduct;
