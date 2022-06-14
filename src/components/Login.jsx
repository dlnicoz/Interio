import React from "react";
import "../css/Login.css";
import { useState } from "react";

function Login() {
  const [changeSide, setchangeSide] = useState(false);

  return (
    <>
      <div className="ultimateabout">
        <div
          className={
            changeSide ? "lcontainer" : "lcontainer right-panel-active"
          }
        >
          {/* sign up */}
          <div className="lcontainer__form lcontainer--signup">
            <form action="#" className="form" id="form1">
              <h2 className="form__title">Sign Up</h2>
              <input type="text" placeholder="User" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="lbtn">Sign Up</button>
            </form>
          </div>

          {/* <!-- Sign In --> */}
          <div className="lcontainer__form lcontainer--signin">
            <form action="#" className="form" id="form2">
              <h2 className="form__title">Sign In</h2>
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <a href="#" className="link">
                Forgot your password?
              </a>
              <button className="lbtn">Sign In</button>
            </form>
          </div>

          {/* <!-- Overlay -->a */}
          <div className="lcontainer__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button
                  className="lbtn"
                  id="signIn"
                  onClick={() => setchangeSide(!changeSide)}
                >
                  Sign In
                </button>
              </div>
              <div
                className="overlay__panel overlay--right"
                onClick={() => setchangeSide(!changeSide)}
              >
                <button className="lbtn" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
