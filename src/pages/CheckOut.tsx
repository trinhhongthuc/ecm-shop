import { Link } from "react-router-dom";
import { ButtonLine } from "../components/Button";

import CheckOutDetail from "./../components/CheckOutDetail";
import CheckoutOrder from "./../components/CheckoutOrder";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const CheckOut = () => {
  return (
    <>
      <Header border={true} />
      <div className="check-out container">
        <div className="check-out__wrapper">
          <div className="title">Checkout</div>
          <div className="check-out__wrapper__top">
            <p className="check-out__wrapper__top__note">
              <span>Returning customer?</span>
              <Link to="/login">Click here to login</Link>
            </p>

            <p className="check-out__wrapper__top__note">
              <span>Have a coupon? </span>
              <Link to="/login">Click here to enter your code</Link>
            </p>

            <div className="check-out__wrapper__top__coupon">
              <div className="check-out__wrapper__top__coupon__title">
                If you have a coupon code, please apply it below.
              </div>

              <div className="check-out__wrapper__top__coupon__input">
                <input type="text" name="" placeholder="Coupon code" id="" />

                <ButtonLine fill={true}>Apply coupon</ButtonLine>
              </div>
            </div>
          </div>

          <div className="check-out__wrapper__content">
            <CheckOutDetail />
            <CheckoutOrder />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
