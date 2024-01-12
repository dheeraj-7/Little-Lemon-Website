import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              123 Where Am I Street
              <br />
              No Where, NW 00001
            </address>
            <a className="footer-block" href="tel: +917207393102">
              +917207393102
            </a>
            <br />
            <a className="footer-block" href="mailto: dheerajdheerucr7@gmail.com">
              abc@littlelemon.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 Coursera Meta Front-End Developer by Dheeraj.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
