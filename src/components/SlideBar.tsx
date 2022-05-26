import SearchIcon from "@mui/icons-material/Search";

const SlideBar = () => {
  return (
    <div className="slide-bar">
      <div className="slide-bar__search">
        <div className="slide-bar__search__input">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
      </div>

      <div className="slide-bar__nav">
        <div className="slide-bar__nav__title">Categories</div>

        <div className="slide-bar__nav__menu">
          <div className="slide-bar__nav__menu__item">Fashion</div>

          <div className="slide-bar__nav__menu__item">Style</div>

          <div className="slide-bar__nav__menu__item">Accessories</div>

          <div className="slide-bar__nav__menu__item">Season</div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
