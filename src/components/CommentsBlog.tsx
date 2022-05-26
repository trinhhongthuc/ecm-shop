import ReplyIcon from "@mui/icons-material/Reply";

import img from "../assets/images/avatar.svg";

const CommentsBlog = () => {
  return (
    <div className="comments-blog">
      <div className="comments-blog__avatar">
        <img src={img} alt="" />
      </div>

      <div className="comments-blog__content">
        <div className="comments-blog__content__wrapper">
          <div className="comments-blog__content__wrapper__title">
            Scarlet witch
          </div>

          <div className="comments-blog__content__wrapper__day">6 May 2020</div>
          <div className="comments-blog__content__wrapper__icon">
            <ReplyIcon /> Reply
          </div>
        </div>

        <p className="comments-blog__content__message">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
          doloremque expedita corrupti minima dolore obcaecati quibusdam laborum
          enim amet porro repudiandae.
        </p>
      </div>
    </div>
  );
};

export default CommentsBlog;
