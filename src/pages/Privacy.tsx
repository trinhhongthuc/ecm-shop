import Footer from "../components/Footer";
import Header from "./../components/Header";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="privacy container">
        <div className="privacy__wrapper">
          <div className="title">Privacy Policy</div>

          <p className="privacy__wrapper__note">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            itaque, odit quos doloribus quia inventore, officia est illo veniam
            voluptate sunt quae doloremque harum optio dignissimos sequi aut
            magnam accusantium?
          </p>

          <div className="privacy__wrapper__title">Security</div>

          <p className="privacy__wrapper__note">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            itaque, odit quos doloribus quia inventore
          </p>

          <div className="privacy__wrapper__title">Cookies</div>

          <ul className="privacy__wrapper__list">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
