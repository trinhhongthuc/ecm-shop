import Footer from "./../components/Footer";
import Header from "./../components/Header";

const ForgotPassword = () => {
  return (
    <>
      <Header border={true} />
      <div className="forgot-password container">
        <div className="forgot-password__wrapper">
          <div className="title">Have you Forgotten your password ?</div>
          <p className="forgot-password__wrapper__note">
            If you've forgotten your password, enter your email address and
            we'll send you an email
          </p>

          <div className="forgot-password__wrapper__input">
            <input type="text" name="" placeholder="Email" id="" />
          </div>

          <div className="forgot-password__wrapper__submit">
            <button>Reset password</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
