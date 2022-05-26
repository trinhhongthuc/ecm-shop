import React from "react";
import { useNavigate } from "react-router-dom";

import { ButtonLine } from "./Button";

import ShippingBagItem from "./ShippingBagItem";

interface Props {
  classActive: string;
  handleHiddenShippingBag: () => void;
}

const ShippingBag: React.FC<Props> = ({
  classActive,
  handleHiddenShippingBag,
}) => {
  const navigate = useNavigate();

  const handleRedirectCart = () => {
    handleHiddenShippingBag();
    navigate("/cart");
  };

  return (
    <>
      <div
        className={`shipping-bag-bg ${classActive}`}
        onClick={handleHiddenShippingBag}
      ></div>
      <div className={`shipping-bag ${classActive}`}>
        <div className="shipping-bag__title">Shopping bag</div>
        <div className="shipping-bag__count">5 items</div>
        <ul className="shipping-bag__list">
          <li className="shipping-bag__list__item">
            <ShippingBagItem />
          </li>
          <li className="shipping-bag__list__item">
            <ShippingBagItem />
          </li>
          <li className="shipping-bag__list__item">
            <ShippingBagItem />
          </li>
          <li className="shipping-bag__list__item">
            <ShippingBagItem />
          </li>
        </ul>

        <div className="shipping-bag__wrapper">
          <div className="shipping-bag__wrapper__subtotal">
            <span>Subtotal(5 item)</span>

            <span>$100000</span>
          </div>

          <div className="shipping-bag__wrapper__view-cart">
            <ButtonLine fill={false} handleRedirect={handleRedirectCart}>
              View cart
            </ButtonLine>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingBag;
