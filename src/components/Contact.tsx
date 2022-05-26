import StarBorderIcon from "@mui/icons-material/StarBorder";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Add a Review</h2>
      <p className="contact__note">
        Your Email Address Will not be published require Fields are Marked
      </p>

      <div className="contact__input">
        <div className="contact__input__name">Your Review*</div>

        <div className="contact__input__input">
          <input type="text" name="" placeholder="Your Review" id="" />
        </div>
      </div>

      <div className="contact__input">
        <div className="contact__input__name">Your Name*</div>

        <div className="contact__input__input">
          <input type="text" name="" placeholder="Enter your name" id="" />
        </div>
      </div>

      <div className="contact__input">
        <div className="contact__input__name">Your Email*</div>

        <div className="contact__input__input">
          <input type="text" name="" placeholder="Enter your email" id="" />
        </div>
      </div>

      <div className="contact__accept">
        <input type="checkbox" name="" id="accept" />
        <label htmlFor="accept">
          Save my name, email, and website in this browser you next time i
          comment
        </label>
      </div>
      <div className="contact__star">
        <div className="contact__star__title">Your rating*</div>

        <div className="contact__star__wrapper">
          <div className="contact__star__wrapper__icon">
            <StarBorderIcon />
          </div>

          <div className="contact__star__wrapper__icon">
            <StarBorderIcon />
          </div>

          <div className="contact__star__wrapper__icon">
            <StarBorderIcon />
          </div>

          <div className="contact__star__wrapper__icon">
            <StarBorderIcon />
          </div>

          <div className="contact__star__wrapper__icon">
            <StarBorderIcon />
          </div>
        </div>
      </div>

      <div className="contact__submit">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
