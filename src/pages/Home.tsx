import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Helmet from "./../components/Helmet";
import HeroSlide from "./../components/HeroSlide";
import ProductItem from "./../components/ProductItem";

import Data from "../fakeAPI/product";

const Home = () => {
  return (
    <Helmet title="trang chu">
      <Header />
      <HeroSlide />

      <section className="home__show__product container">
        <div className="home__show__product__title">Show the latest</div>
        <div className="home__show__product__see-all">view all</div>
      </section>

      <section className="container home__wrapper_product">
        {Data.map((item, index) => (
          <ProductItem key={index} item={item} col={3} />
        ))}
      </section>

      <Footer />
    </Helmet>
  );
};

export default Home;
