import React from "react";
import "../css/ARgallery.css";
import s1 from "../components/images/sm1.jpg";
import s2 from "../components/images/sm2.jpg";
import s3 from "../components/images/sm3.jpg";
import s4 from "../components/images/sm4.jpg";
import s5 from "../components/images/sm5.jpg";
import s6 from "../components/images/sm6.jpg";
import s7 from "../components/images/sm7.jpg";
import s8 from "../components/images/sm8.jpg";
import s9 from "../components/images/sm9.jpg";
import s10 from "../components/images/sm10.jpg";
import s11 from "../components/images/sm11.jpg";
import s12 from "../components/images/sm12.jpg";
function ARgallery() {
  return (
    <>
      <section className="testo-section xsec">
        <div className="xcontainer">
          <div className="xcard">
            <img className="ximg" src={s1} />
            <h3 className="xh3">bandra</h3>
            <p className="xp">Card description</p>
          </div>

          <div className="xcard">
            <img className="ximg" src={s2} />
            <h3 className="xh3">mulund</h3>
            <p className="xp">Card description</p>
          </div>

          <div className="xcard">
            <img className="ximg" src={s3} />
            <h3 className="xh3">mubra</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s4} />
            <h3 className="xh3">thane</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s5} />
            <h3 className="xh3">kurla</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s6} />
            <h3 className="xh3">chembur</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s7} />
            <h3 className="xh3">vashi</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s8} />
            <h3 className="xh3">worli</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s9} />
            <h3 className="xh3">marine-lines</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s10} />
            <h3 className="xh3">seawood</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s11} />
            <h3 className="xh3">runvals</h3>
            <p className="xp">Card description</p>
          </div>
          <div className="xcard">
            <img className="ximg" src={s12} />
            <h3 className="xh3">greenwoods</h3>
            <p className="xp">Card description</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default ARgallery;
