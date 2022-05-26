import ProductCartImage from "../assets/images/product-cart.svg";

import CloseIcon from "@mui/icons-material/Close";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={ProductCartImage} alt="" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__content__title">Lira earrings</div>

        <div className="cart-item__content__type">
          Black <span>/</span> Medium
        </div>

        <div className="cart-item__content__price">$20000</div>
      </div>
      <div className="cart-item__quantity">
        <span>-</span>
        <span>3</span>
        <span>+</span>
      </div>

      <div className="cart-item__close">
        <CloseIcon />
      </div>
    </div>
  );
};

export default CartItem;
