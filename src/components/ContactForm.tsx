const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form__wrapper">
        <div className="contact-form__wrapper__input">
          <input type="text" name="" id="" placeholder="First Name" />
        </div>
        <div className="contact-form__wrapper__input">
          <input type="text" name="" id="" placeholder="Last Name" />
        </div>
      </div>

      <div className="contact-form__wrapper">
        <div className="contact-form__wrapper__input">
          <input type="text" name="" id="" placeholder="Email" />
        </div>
        <div className="contact-form__wrapper__input">
          <input type="text" name="" id="" placeholder="Subject" />
        </div>
      </div>

      <div className="contact-form__wrapper">
        <div className="contact-form__wrapper__input contact-form__wrapper__input--message">
          <input type="text" name="" id="" placeholder="Message" />
        </div>
      </div>

      <div className="contact-form__button">
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactForm;
