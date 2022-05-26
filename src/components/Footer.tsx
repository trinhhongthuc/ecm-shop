import { Link } from "react-router-dom";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__left">
        <ul className="footer__left__menu">
          <Link to="/contact" className="footer__left__menu__li">
            contact
          </Link>
          <Link to="contact" className="footer__left__menu__li">
            terms of services
          </Link>
          <Link to="contact" className="footer__left__menu__li">
            shipping and returns
          </Link>
        </ul>
        <p className="footer__left__copy-right">
          © 2021 Shelly. Terms of use and privacy policy.
        </p>
      </div>
      <div className="footer__right">
        <div className="footer__right__send-email">
          <input
            type="text"
            name=""
            placeholder="Give an email, get the newsletter"
            id=""
          />
          <ArrowRightAltIcon />
        </div>
        <div className="footer__right__social">
          <div className="footer__right__social__icon">
            <FacebookIcon />
          </div>

          <div className="footer__right__social__icon">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
