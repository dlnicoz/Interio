import React, { Component } from "react";
import "../css/Agallery.scss";
import $ from "jquery";
import { Link } from "react-router-dom";

export default class Agallery extends Component {
  jQueryCode = () => {
    (function ($) {
      $(document).ready(function () {
        // your code;
        $(".option").click(function () {
          $(".option").removeClass("active");
          $(this).addClass("active");
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
        <div className="Agallery">
          <div className="options">
            <div
              className="option active"
              loading="lazy"
              style={{
                "--optionBackground":
                  "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
              //   style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-walking"></i>
                </div>
                <div className="info">
                  <Link className="amain am" to="/architect">
                    Ross geller
                  </Link>
                  <div className="sub su">Lorem ipsum dolor .</div>
                </div>
              </div>
            </div>
            <div
              className="option"
              style={{
                "--optionBackground":
                  "url(https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
              }}
              //   style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);"
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-snowflake"></i>
                </div>
                <div className="info">
                  <div className="amain">Monica geller</div>
                  <div className="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div
              className="option"
              style={{
                "--optionBackground":
                  "url(https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
              }}
              //   style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);"
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-tree"></i>
                </div>
                <div className="info">
                  <div className="amain">Joey tribbiani</div>
                  <div className="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div
              className="option"
              style={{
                "--optionBackground":
                  "url(https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
              }}
              //   style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);"
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-tint"></i>
                </div>
                <div className="info">
                  <div className="amain">Chandler Bing</div>
                  <div className="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div
              className="option"
              style={{
                "--optionBackground":
                  "url(https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)",
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-sun"></i>
                </div>
                <div className="info">
                  <div className="amain">Gunther smith</div>
                  <div className="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
