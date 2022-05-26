import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Gird from "./Gird";

import { Product } from "../interface/Product";
import { formatToCurrency } from "../utils/formatPrice";

interface Props {
  item: Product;
  col: number;
}

const ProductItem: React.FC<Props> = ({ item, col }) => {
  const navigate = useNavigate();

  const cartRef = useRef<HTMLInputElement | null>(null);

  const handleDisplayButtonAddCart = (): void => {
    if (cartRef.current?.classList[1] === "active-btn-cart")
      cartRef.current?.classList.remove("active-btn-cart");
    else cartRef.current?.classList.add("active-btn-cart");
  };

  const handleRedirectDetailProduct = (): void => {
    navigate(`/shop/${item.id}`);
  };

  return (
    <Gird col={col}>
      <div className="product-item">
        <div className="product-item__image">
          <img src={item.image} alt="" />
          <div className="product-item__option">
            <div
              className="product-item__option__icon"
              onClick={handleDisplayButtonAddCart}
            >
              <ShoppingCartIcon />
            </div>
            <div className="product-item__option__icon">
              <RemoveRedEyeIcon onClick={handleRedirectDetailProduct} />
            </div>
            <div className="product-item__option__icon">
              <FavoriteIcon />
            </div>
          </div>

          <div className="product-item__image__add-cart" ref={cartRef}>
            add to cart
          </div>
        </div>

        <div className="product-item__title">{item.title}</div>
        <div className="product-item__price">
          {formatToCurrency(Number(item.price))}
        </div>
      </div>
    </Gird>
  );
};

export default ProductItem;
