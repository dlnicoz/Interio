import React from "react";
import logo from "/favicon22.png";
function Foot() {
  return (
    <>
      <div className="footer wf-section">
        <div className="container">
          <div className="footer__grid">
            <div>
              <a
                href="/"
                aria-current="page"
                className="footer__brand w-inline-block w--current"
              >
                <img src={logo} alt="" />
              </a>
              <div className="footer__tag-line">Make your style.</div>
            </div>
            <div className="footer__nav-grid">
              <div
                id="w-node-_59fd7968-2809-21b6-8ff2-b7699b214fa7-9b214f9d"
                className="footer__nav-col"
              >
                <h5 className="footer__nav-heading">Products</h5>
                <a
                  href="/"
                  aria-current="page"
                  className="footer__nav-link w--current"
                >
                  For Companies
                </a>
                <a href="/investors" className="footer__nav-link">
                  For Investors
                </a>
              </div>
              <div className="footer__nav-col">
                <h5 className="footer__nav-heading">Company</h5>
                <a href="/about" className="footer__nav-link">
                  About
                </a>
                <a href="/careers" className="footer__nav-link">
                  Careers
                </a>
                <a href="/blog" className="footer__nav-link">
                  Blog
                </a>
                <a href="/newsroom" className="footer__nav-link">
                  Newsroom
                </a>
              </div>
              <div className="footer__nav-col">
                <h5 className="footer__nav-heading">Resources</h5>
                <a href="/help" className="footer__nav-link">
                  FAQ
                </a>
                <a href="/help?contact" className="footer__nav-link">
                  Contact
                </a>
                <a href="/the-recap" className="footer__nav-link">
                  Sign up for The Recap
                </a>
              </div>
            </div>
          </div>
          <div className="footer__bottom-wrapper">
            <div className="footoer__legal-links-wrapper">
              <div className="footer__copyright">© 2022 Inc.</div>
              <div>
                <a href="/privacy-policy" className="footer__legal-link">
                  Privacy Policy
                </a>
                <a href="/terms-of-use" className="footer__legal-link">
                  Terms of Use
                </a>
                <a
                  href="/responsible-disclosure"
                  className="footer__legal-link"
                >
                  Responsible Disclosure
                </a>
              </div>
            </div>
            <div
              id="w-node-_59fd7968-2809-21b6-8ff2-b7699b214fca-9b214f9d"
              className="social-links-wrapper"
            >
              <a
                href="#"
                target="_blank"
                className="social-link w-inline-block"
              >
                <img
                  src="https://assets.website-files.com/60300fc89b79e83d746ea188/60300fc89b79e8a4e46ea2cf_LinkedIn.svg"
                  alt=""
                  className="social-link-icon"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="social-link w-inline-block"
              >
                <img
                  src="https://assets.website-files.com/60300fc89b79e83d746ea188/60300fc89b79e80fbf6ea2cb_Twitter.svg"
                  alt=""
                  className="social-link-icon"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="social-link w-inline-block"
              >
                <img
                  src="https://assets.website-files.com/60300fc89b79e83d746ea188/60300fc89b79e8fbf66ea2c8_Github.svg"
                  alt=""
                  className="social-link-icon"
                />
              </a>
            </div>
            <div className="footer__legal-text">
              Dolor temporibus quos inventore nihil deserunt itaque? Natus nobis
              consequatur nostrum repellat?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Foot;
