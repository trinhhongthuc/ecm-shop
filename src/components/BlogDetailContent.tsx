import Img from "../assets/images/blog-detail.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CommentsBlog from "./CommentsBlog";

interface Props {
  slideBar: boolean;
}

const BlogDetailContent: React.FC<Props> = ({ slideBar }) => {
  return (
    <div className={`blog-detail-content ${slideBar ? "slide-bar" : ""}`}>
      <div className="title">Fast fashion, and faster Fashion</div>

      <div className="blog-detail-content__make">
        by <span>Any johnson</span> october 8, 2020
      </div>

      <div className="blog-detail-content__banner">
        <img src={Img} alt="" />
      </div>

      <div className="blog-detail-content__wrapper">
        <div className="blog-detail-content__wrapper__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eaque, autem aliquid, odio aspernatur quod, quisquam
            itaque nostrum dicta minima excepturi! Esse voluptatum in similique
            vitae illum. Iste, labore. Quis. Delectus, eius voluptatum
            aspernatur ea ratione architecto, unde, quae aliquam repellendus
            eveniet accusantium perspiciatis veritatis corrupti quia tempora.
            Quas sint repellat omnis nam explicabo, excepturi autem eveniet.
            Est, sequi reprehenderit!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eaque, autem aliquid, odio aspernatur quod, quisquam
            itaque nostrum dicta minima excepturi! Esse voluptatum in similique
            vitae illum. Iste, labore. Quis. Delectus, eius voluptatum
            aspernatur ea ratione architecto, unde, quae aliquam repellendus
            eveniet accusantium perspiciatis veritatis corrupti quia tempora.
            Quas sint repellat omnis nam explicabo, excepturi autem eveniet.
            Est, sequi reprehenderit!
          </p>
        </div>

        <div className="blog-detail-content__wrapper__banner-bottom">
          <img src={Img} alt="" />
        </div>

        <div className="blog-detail-content__wrapper__top-trends">
          <div className="blog-detail-content__wrapper__top-trends__title">
            Top Trends
          </div>

          <p className="blog-detail-content__wrapper__top-trends__note">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            numquam hic, facere illum, aperiam veritatis dignissimos fugiat
            repellendus atque ipsa ullam eius praesentium voluptate corrupti
            nostrum corporis, molestias doloribus sequi!
          </p>

          <ul className="blog-detail-content__wrapper__top-trends__list">
            <li className="blog-detail-content__wrapper__top-trends__list__item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="blog-detail-content__wrapper__top-trends__list__item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="blog-detail-content__wrapper__top-trends__list__item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="blog-detail-content__wrapper__top-trends__list__item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
          </ul>

          <div className="blog-detail-content__wrapper__top-trends__socail">
            <div className="blog-detail-content__wrapper__top-trends__socail__content">
              <div className="blog-detail-content__wrapper__top-trends__socail__content__title">
                Tags
              </div>
              <div className="blog-detail-content__wrapper__top-trends__socail__content__line"></div>

              <div className="blog-detail-content__wrapper__top-trends__socail__content__text">
                Fashions, Styles, seasons
              </div>
            </div>

            <div className="blog-detail-content__wrapper__top-trends__socail__content">
              <div className="blog-detail-content__wrapper__top-trends__socail__content__title">
                Shares
              </div>
              <div className="blog-detail-content__wrapper__top-trends__socail__content__line"></div>

              <div className="blog-detail-content__wrapper__top-trends__socail__content__text">
                <FacebookIcon /> <InstagramIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-detail-content__wrapper__reply">
          <div className="blog-detail-content__wrapper__reply__title">
            Leave a Reply
          </div>

          <div className="blog-detail-content__wrapper__reply__note">
            Your email address will not be published fields are maked*
          </div>

          <div className="blog-detail-content__wrapper__reply__input">
            <input type="text" name="" placeholder="Enter name*" id="" />
          </div>
          <div className="blog-detail-content__wrapper__reply__input">
            <input type="text" name="" placeholder="Enter email*" id="" />
          </div>
          <div className="blog-detail-content__wrapper__reply__input">
            <input type="text" name="" placeholder="Enter Website*" id="" />
          </div>

          <div className="blog-detail-content__wrapper__reply__input">
            <input type="text" name="" placeholder="Your comment*" id="" />
          </div>

          <div className="blog-detail-content__wrapper__reply__accept">
            <input type="checkbox" id="accept" />
            <label htmlFor="accept">
              Save my name, email and website in the browser for the next time
              comment
            </label>
          </div>

          <div className="blog-detail-content__wrapper__reply__button">
            <button>post comment</button>
          </div>
        </div>

        <div className="blog-detail-content__wrapper__comments">
          <CommentsBlog />
          <ul>
            <li>
              <CommentsBlog />
            </li>

            <li>
              <CommentsBlog />
            </li>
          </ul>
        </div>
        <div className="blog-detail-content__wrapper__comments">
          <CommentsBlog />
        </div>
        <div className="blog-detail-content__wrapper__comments">
          <CommentsBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailContent;
