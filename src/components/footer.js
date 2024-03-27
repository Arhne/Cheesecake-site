import facebook from "../images/icon_facebook.svg";
import instagram from "../images/icon _instagram_.svg";
import twitter from "../images/icon _twitter_.svg";
import youtube from "../images/icon _youtube_.svg";
import footerContactImg from "../images/footercontact.png";

function Footer() {
    return (
      <div className="footer-bg">
        <div className="container-all">
        <div className="contact-us">
          <div className="footer-text | flow">
            <h2>Contact Us</h2>
            <p>Need to get in touch with us? Either fill out the form <br/>with your inquiry or find the department!</p>
            <img className="width-full footer-con" src={footerContactImg} alt=""/>

            <div className="footer-nav">
                <ul className="footer-list">
                    <li><a><img src={facebook} alt="social icons"/></a></li>

                    <div className="socials">
                    <li><a><img src={instagram} alt="social icons"/></a></li>
                    <li><a><img src={twitter} alt="social icons"/></a></li>
                    <li><a><img src={youtube} alt="social icons"/></a></li>
                    </div>
                </ul>
            </div>
            <p className="copyright">Copyright 2024 | All rights reserved</p>
          </div>

          <div className="contact-form | flow">
              <input type="text" placeholder="Name" id=""/>
              <input type="email" placeholder="Email" id=""/>
              <textarea placeholder="Your Message..." className="footer-textA" id="" cols="30" rows="6"></textarea>
              <button className="btn footer-btn" datatype="inverted" type="">Contact us now</button>
          </div>
        </div>
        </div>
      </div>
    );
};
export default Footer;