import { useNavigate } from "react-router-dom";

import { ButtonLine } from "./Button";

const CheckoutOrder = () => {
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate("/order-confirmation");
  };

  return (
    <div className="check-out-order">
      <div className="check-out-order__title">Your checkout</div>

      <div className="check-out-order__wrapper">
        <div className="check-out-order__wrapper__heading check-out-order__wrapper__heading--mt-none">
          <span>Product</span>

          <span>total</span>
        </div>

        <ul className="check-out-order__wrapper__product-txt check-out-order__wrapper__product-txt--mt">
          <li>
            <span>Lira earrings</span>
            <span>$64</span>
          </li>
          <li>
            <span>Lira earrings</span>
            <span>$64</span>
          </li>
          <li>
            <span>Lira earrings</span>
            <span>$64</span>
          </li>
        </ul>
        <div className="check-out-order__wrapper__heading">
          <span>Subtotal</span>

          <span className="check-out-order__wrapper__heading-txt">$85</span>
        </div>

        <div className="check-out-order__wrapper__heading">
          <span>shipping</span>

          <span className="check-out-order__wrapper__heading-txt">
            Free shipping
          </span>
        </div>

        <div className="check-out-order__wrapper__heading check-out-order__wrapper__heading-bd-none">
          <span>Total</span>

          <span>$85</span>
        </div>

        <div className="check-out-order__wrapper__payment">
          <div className="check-out-order__wrapper__payment__check-radio">
            <input type="radio" name="payment" id="bank" />
            <label htmlFor="bank">Direct bank transfer</label>
          </div>
          <p className="check-out-order__wrapper__payment__description">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account
          </p>
          <div className="check-out-order__wrapper__payment__check-radio">
            <input type="radio" name="payment" id="check-payments" />
            <label htmlFor="check-payments">Check payments</label>
          </div>
          <div className="check-out-order__wrapper__payment__check-radio">
            <input type="radio" name="payment" id="cash-on-delivery" />
            <label htmlFor="cash-on-delivery">Cash on delivery</label>
          </div>
          <div className="check-out-order__wrapper__payment__check-radio">
            <input type="radio" name="payment" id="payPal" />
            <label htmlFor="payPal">Paypal</label>
          </div>
        </div>

        <div className="check-out-order__wrapper__button">
          <ButtonLine fill={true} handleRedirect={handleRedirect}>
            Place order
          </ButtonLine>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrder;
