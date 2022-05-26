import Notification from "../components/Notification";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const OrderConfirmation = () => {
  return (
    <>
      <Header border={true} />
      <div className="order-confirmation container">
        <Notification />

        <div className="order-confirmation__content">
          <div className="order-confirmation__content__details">
            <div className="order-confirmation__content__details__title">
              Order Details
            </div>

            <ul className="order-confirmation__content__details__list">
              <li>
                <h3>order number</h3>
                <p>1879605573994</p>
              </li>
              <li>
                <h3>DELIVERY OPTIONS</h3>
                <p>Standard delivery</p>
              </li>
              <li>
                <h3>Email</h3>
                <p>Vitathemes@gmail.com</p>
              </li>{" "}
              <li>
                <h3>DELIVERY ADDRESS</h3>
                <p>
                  Kristian holst 34 old street W1F 7NU london United Kingdom
                </p>
              </li>{" "}
              <li>
                <h3>PAYMENT METHOD</h3>
                <p>Mastercard*************7865</p>
              </li>{" "}
              <li>
                <h3>ORDER DATE</h3>
                <p>October 8,2020</p>
              </li>{" "}
              <li>
                <h3>CONTACT NUMBER</h3>
                <p>+44 8749790988</p>
              </li>
            </ul>
          </div>
          <div className="order-confirmation__content__summary">
            <div className="order-confirmation__content__summary__title">
              Order summary
            </div>

            <div className="order-confirmation__content__summary__wrapper">
              <div className="order-confirmation__content__summary__wrapper__heading">
                <span>product</span>
                <span>Total</span>
              </div>

              <div className="order-confirmation__content__summary__wrapper__list">
                <li>
                  <span>lira earrings</span>
                  <span>$64</span>
                </li>
                <li>
                  <span>lira earrings</span>
                  <span>$10</span>
                </li>
                <li>
                  <span>lira earrings</span>
                  <span>$10</span>
                </li>
              </div>

              <div className="order-confirmation__content__summary__wrapper__subheading">
                <span>subtotal</span>
                <span>$85</span>
              </div>
              <div className="order-confirmation__content__summary__wrapper__subheading">
                <span>shipping</span>
                <span>Free shipping</span>
              </div>

              <div className="order-confirmation__content__summary__wrapper__heading order-confirmation__content__summary__wrapper__heading--total">
                <span>total</span>
                <span>$85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmation;
