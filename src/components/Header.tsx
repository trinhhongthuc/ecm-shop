import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/SHOPPE.svg";
import ShippingBag from "./ShippingBag";

interface Props {
  border?: boolean;
}

const Header: React.FC<Props> = ({ border }) => {
  const navigate = useNavigate();
  const [classActive, setClassActive] = useState<string>("");

  const handleRedirectPage = (link: string): void => {
    navigate(link);
  };

  const handleDisplayShippingBag = (): void => {
    setClassActive("active");
    document.getElementsByTagName("body")[0].classList.add("hidden");
  };

  const handleHiddenShippingBag = (): void => {
    setClassActive("");
    document.getElementsByTagName("body")[0].classList.remove("hidden");
  };

  return (
    <div className={`header container ${border ? "border" : ""}`}>
      <Link to="/" className="header__logo">
        <Logo />
      </Link>

      <div className="header__menu">
        <div className="header__menu__items">
          <ul className="header__menu__items__list">
            <li className="header__menu__items__list__li">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="header__menu__items__list__li">
              {" "}
              <Link to="/blog">Blog</Link>
            </li>
            <li className="header__menu__items__list__li border">
              {" "}
              <Link to="/our-story">our Story</Link>
            </li>
            <li className="header__menu__items__list__li">
              <SearchIcon />
            </li>
            <li className="header__menu__items__list__li">
              <ShoppingCartIcon onClick={handleDisplayShippingBag} />
            </li>
            <li className="header__menu__items__list__li">
              <SupervisorAccountIcon
                onClick={() => handleRedirectPage("/account")}
              />
            </li>
          </ul>
        </div>
      </div>

      <ShippingBag
        classActive={classActive}
        handleHiddenShippingBag={handleHiddenShippingBag}
      />
    </div>
  );
};

export default memo(Header);
