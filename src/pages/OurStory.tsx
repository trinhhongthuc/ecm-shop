import Footer from "../components/Footer";
import Header from "./../components/Header";

import Img from "../assets/images/blog-detail.svg";

const OurStory = () => {
  return (
    <>
      <Header />
      <div className="our-story container">
        <div className="our-story__wrapper">
          <div className="title">About</div>

          <div className="our-story__wrapper__note">
            Who we are and why we do what we do!
          </div>

          <p className="our-story__wrapper__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eaque accusamus saepe cumque, a expedita tenetur iure qui, nemo est
            ipsa alias ut iusto hic laboriosam fugiat aperiam odit commodi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eaque accusamus saepe cumque, a expedita tenetur iure qui, nemo est
            ipsa alias ut iusto hic laboriosam fugiat aperiam odit commodi!
          </p>

          <div className="our-story__wrapper__title">Top trends</div>

          <div className="our-story__wrapper__banner">
            <img src={Img} alt="" />
          </div>

          <p className="our-story__wrapper__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eaque accusamus saepe cumque, a expedita tenetur iure qui, nemo est
            ipsa alias ut iusto hic laboriosam fugiat aperiam odit commodi!
          </p>

          <ul className="our-story__wrapper__list">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>

          <div className="our-story__wrapper__title">Produced with care</div>

          <div className="our-story__wrapper__banner">
            <img src={Img} alt="" />
          </div>

          <p className="our-story__wrapper__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eaque accusamus saepe cumque, a expedita tenetur iure qui, nemo est
            ipsa alias ut iusto hic laboriosam fugiat aperiam odit commodi!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurStory;
