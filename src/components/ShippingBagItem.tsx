import ProductImg from "../assets/images/product-1.svg";

import CloseIcon from "@mui/icons-material/Close";

const ShippingBagItem = () => {
  return (
    <div className="shipping-bag-item">
      <div className="shipping-bag-item__img">
        <img src={ProductImg} alt="" />
      </div>

      <div className="shipping-bag-item__content">
        <div className="shipping-bag-item__content__title">Lira Earrings</div>

        <div className="shipping-bag-item__content__type">Black / Medium</div>

        <div className="shipping-bag-item__content__price">$20000</div>
      </div>

      <div className="shipping-bag-item__close">
        <CloseIcon />
      </div>
    </div>
  );
};

export default ShippingBagItem;
