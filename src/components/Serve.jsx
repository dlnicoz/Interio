import React from "react";
import "../css/Serve.css";
import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

function Serve() {
  animate({
    elements: ".service-block",
    duration: 2000,
    delay: (index) => index * 100,
    transform: ["scale(0)", "scale(1)"],
  });
  return (
    <>
      <div className="uServe">
        <div className="our-service-sass hide-pr show-pr">
          <div className="container">
            <div className="theme-title-one text-center">
              <div className="icon-box hide-pr">
                <img
                  src="http://html.creativegigs.net/rogan/rogan-c/html/images/shape/bg-shape1.svg"
                  alt=""
                  className="bg-shape"
                />
                <img
                  src="http://html.creativegigs.net/rogan/rogan-c/html/images/icon/icon23.svg"
                  alt=""
                  className="icon"
                />
              </div>
              <h2 className="main-title">
                Provide awesome customer service with our tools.
              </h2>
            </div>

            <div className="inner-wrapper">
              <div className="row">
                <div
                  className="col-lg-4 single-block aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="service-block">
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <div className="hover-content"></div>
                    <i className="flaticon-web user"></i>
                    <h5 className="title">
                      <a href="#">
                        User Friendly dashboard &amp; Cool Interface.
                      </a>
                    </h5>
                    <p>
                      Lorem ipsum dolor si amet, an dusino situ sint pertinacia
                      constituto, mir es dignsius quo great.
                    </p>
                    <a className="detail-button">
                      <i className="icon-img">
                        <img
                          src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif"
                          width="100%"
                        />
                      </i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-4 single-block aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="service-block">
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <div className="hover-content"></div>
                    <i className="flaticon-value icon-s"></i>
                    <h5 className="title">
                      <a href="#">Thousand of features and Custom option.</a>
                    </h5>
                    <p>
                      Lorem ipsum dolor si amet, an dusino situ sint pertinacia
                      constituto, mir es dignsius quo great.
                    </p>
                    <a href="#" className="detail-button">
                      <i className="icon-img">
                        <img
                          src="https://cdn-icons-gif.flaticon.com/6172/6172518.gif"
                          width="100%"
                        />
                      </i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-4 single-block aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="service-block">
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <div className="hover-content"></div>
                    <i className="flaticon-login icon-s"></i>
                    <h5 className="title">
                      <a href="#">Strong Managment &amp; Security.</a>
                    </h5>
                    <p>
                      Lorem ipsum dolor si amet, an dusino situ sint pertinacia
                      constituto, mir es dignsius quo great.
                    </p>
                    <a href="#" className="detail-button">
                      <i className="icon-img">
                        <img
                          src="https://cdn-icons-gif.flaticon.com/6172/6172512.gif"
                          width="100%"
                        />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Serve;
