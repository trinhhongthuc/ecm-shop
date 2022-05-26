import { Link } from "react-router-dom";

import blog from "../assets/images/blog.svg";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <div className="blog-item__img">
        <img src={blog} alt="" />
      </div>

      <div className="blog-item__day">Fashion - October 8, 2020</div>

      <div className="blog-item__title">To Trends From Spring</div>

      <div className="blog-item__description">
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
        consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
        consectetur adip
      </div>

      <Link to="/blog-detail" className="blog-item__read-more">
        Read more
      </Link>
    </div>
  );
};

export default BlogItem;
