import React from "react";

import Footer from "../components/Footer";
import Header from "./../components/Header";
import Helmet from "./../components/Helmet";
import ProductItem from "./../components/ProductItem";

import SearchIcon from "@mui/icons-material/Search";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import Data from "../fakeAPI/product";
function valuetext(value: number) {
  return `${value}°C`;
}

const Shop = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Helmet title="shop">
      <Header border={true} />

      <div className="shop container">
        <h1 className="shop__title">Shop the latest</h1>
        <div className="shop__wrapper">
          <div className="shop__left">
            <div className="shop__left__search">
              <input type="text" name="" id="" placeholder="Search product" />
              <SearchIcon />
            </div>

            <div className="shop__left__select-sort">
              <select name="" id="">
                <option value="">Shop Buy</option>
              </select>
            </div>

            <div className="shop__left__ranger-slide">
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>

              <div className="shop__left__ranger-slide__item">
                <div className="shop__left__ranger-slide__item__price">
                  Price: $40 - $80
                </div>

                <div className="shop__left__ranger-slide__item__txt">
                  Filter
                </div>
              </div>
            </div>
          </div>
          <div className="shop__right">
            {Data.map((item, index) => (
              <ProductItem key={index} item={item} col={3} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Helmet>
  );
};

export default Shop;
