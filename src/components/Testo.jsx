import React, { Component } from "react";
import "../css/Testo.css";
import Logo1 from "./images/Fo.jpg";
import Logo2 from "./images/Foo.jpg";
import Logo3 from "./images/Fooo.jpg";
import Logo4 from "./images/Foooo.jpg";
import Logo5 from "./images/face4.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import $ from "jquery";
export default class Testo extends Component {
  jQueryCode = () => {
    (function ($) {
      $(document).ready(function () {
        // your code;
        $("#slider").owlCarousel({
          loop: true,
          margin: 15,
          nav: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
        });
      });
    })(jQuery);
  };

  componentDidMount() {
    this.jQueryCode();
  }

  render() {
    return (
      <>
        <section className="testo-section">
          <div className="container">
            <div id="slider" className="owl-carousel">
              <div className="content-area">
                <div className="content">
                  <div className="img-area">
                    <img src={Logo4} alt="1" />
                  </div>
                  <h2>someone famous</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam a ipsa nemo.
                  </p>
                  <p className="socials">
                    <i className="faceb">
                      <FaFacebook />
                    </i>
                    <i className="twitter">
                      <FaTwitter />
                    </i>
                    <i className="behance">
                      <FaBehance />
                    </i>
                    <i className="youtube">
                      <FaYoutube />
                    </i>
                  </p>
                </div>
              </div>
              <div className="content-area">
                <div className="content">
                  <div className="img-area">
                    <img src={Logo1} alt="1" />
                  </div>
                  <h2>Monica geller</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam a ipsa nemo.
                  </p>{" "}
                  <p className="socials">
                    <i className="faceb">
                      <FaFacebook />
                    </i>
                    <i className="twitter">
                      <FaTwitter />
                    </i>
                    <i className="behance">
                      <FaBehance />
                    </i>
                    <i className="youtube">
                      <FaYoutube />
                    </i>
                  </p>
                </div>
              </div>
              <div className="content-area">
                <div className="content">
                  <div className="img-area">
                    <img src={Logo2} alt="1" />
                  </div>
                  <h2>Ross geller</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam a ipsa nemo.
                  </p>
                  <p className="socials">
                    <i className="faceb">
                      <FaFacebook />
                    </i>
                    <i className="twitter">
                      <FaTwitter />
                    </i>
                    <i className="behance">
                      <FaBehance />
                    </i>
                    <i className="youtube">
                      <FaYoutube />
                    </i>
                  </p>
                </div>
              </div>
              <div className="content-area">
                <div className="content">
                  <div className="img-area">
                    <img src={Logo3} alt="1" />
                  </div>
                  <h2>Chandler bing</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam a ipsa nemo.
                  </p>
                  <p className="socials">
                    <i className="faceb">
                      <FaFacebook />
                    </i>
                    <i className="twitter">
                      <FaTwitter />
                    </i>
                    <i className="behance">
                      <FaBehance />
                    </i>
                    <i className="youtube">
                      <FaYoutube />
                    </i>
                  </p>
                </div>
              </div>
              <div className="content-area">
                <div className="content">
                  <div className="img-area">
                    <img src={Logo5} alt="1" />
                  </div>
                  <h2>Joey tribbiani</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam a ipsa nemo.
                  </p>
                  <p className="socials">
                    <i className="faceb">
                      <FaFacebook />
                    </i>
                    <i className="twitter">
                      <FaTwitter />
                    </i>
                    <i className="behance">
                      <FaBehance />
                    </i>
                    <i className="youtube">
                      <FaYoutube />
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
// (function ($) {})(jQuery);
