import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__title">
        Scarlet witch
        <span>6 May, 2020</span>
      </div>

      <div className="comment__star">
        <div className="comment__star__icon">
          <StarIcon />
        </div>
        <div className="comment__star__icon">
          <StarIcon />
        </div>
        <div className="comment__star__icon">
          <StarIcon />
        </div>
        <div className="comment__star__icon">
          <StarBorderIcon />
        </div>
        <div className="comment__star__icon">
          <StarBorderIcon />
        </div>
      </div>

      <div className="comment__description">
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </p>
      </div>
    </div>
  );
};

export default Comment;
