import { useNavigate } from "react-router-dom";

import { ButtonLine } from "../components/Button";
import CartItem from "../components/CartItem";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const Cart = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/check-out");
  };

  return (
    <>
      <Header />
      <div className="cart container">
        <div className="cart__wrapper">
          <div className="title">Shopping cart</div>

          <div className="cart__wrapper__content">
            <div className="cart__wrapper__content__left">
              <ul className="cart__wrapper__content__left__list">
                <li>
                  <CartItem />
                </li>

                <li>
                  <CartItem />
                </li>

                <li>
                  <CartItem />
                </li>

                <li>
                  <CartItem />
                </li>
              </ul>

              <div className="cart__wrapper__content__left__update-cart">
                <ButtonLine fill={false}>Update cart</ButtonLine>
              </div>

              <div className="cart__wrapper__content__left__coupon">
                <input type="text" name="" placeholder="Coupon code" id="" />
                <div className="cart__wrapper__content__left__coupon__apply">
                  <ButtonLine fill={true}>Coupon Cart</ButtonLine>
                </div>
              </div>
            </div>
            <div className="cart__wrapper__content__right">
              <div className="cart__wrapper__content__right__title">
                Cart totals
              </div>

              <div className="cart__wrapper__content__right__wrapper">
                <div className="cart__wrapper__content__right__wrapper__title">
                  Subtotal
                </div>

                <div className="cart__wrapper__content__right__wrapper__content">
                  <div className="cart__wrapper__content__right__wrapper__content__note">
                    $65000
                  </div>
                </div>
              </div>

              <div className="cart__wrapper__content__right__wrapper">
                <div className="cart__wrapper__content__right__wrapper__title">
                  Shipping
                </div>

                <div className="cart__wrapper__content__right__wrapper__content">
                  <div className="cart__wrapper__content__right__wrapper__content__note">
                    Shipping costs will be calculated once you have provided
                    address.
                  </div>

                  <div className="cart__wrapper__content__right__wrapper__content__heading">
                    Calculated Shipping
                  </div>

                  <select name="" id="">
                    <option value="" className="selected-option">
                      SELECT A COUNTRY
                    </option>
                    <option value="" className="selected-option">
                      1
                    </option>
                    <option value="" className="selected-option">
                      1
                    </option>
                  </select>

                  <select name="" id="">
                    <option value="" className="selected-option">
                      CITY
                    </option>
                    <option value="" className="selected-option">
                      1
                    </option>
                    <option value="" className="selected-option">
                      1
                    </option>
                  </select>

                  <select name="" id="">
                    <option value="" className="selected-option">
                      POST CODE / ZIP
                    </option>
                    <option value="" className="selected-option">
                      1
                    </option>
                    <option value="" className="selected-option">
                      1
                    </option>
                  </select>

                  <div className="cart__wrapper__content__right__wrapper__content__update-total">
                    <ButtonLine fill={false}>Update total</ButtonLine>
                  </div>
                </div>
              </div>

              <div className="cart__wrapper__content__right__txt">
                <span>totla</span>
                <span>$87000</span>
              </div>
              <div className="cart__wrapper__content__right__checkout">
                <ButtonLine fill={true} handleRedirect={handleRedirect}>
                  produce checkout
                </ButtonLine>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
