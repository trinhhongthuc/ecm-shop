import Footer from "./../components/Footer";
import Header from "./../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found container">
        <div className="not-found__wrapper">
          <div className="title">404 ERROR</div>

          <div className="not-found__wrapper__note">
            This is page not found. back to home and start again
          </div>

          <div className="not-found__wrapper__button">
            <button>HOMEPAGE</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
