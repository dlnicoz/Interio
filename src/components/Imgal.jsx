import React from "react";
function Imgal() {
  return (
    <>
      <div className="imagediv">
        <div id="img0" loading="lazy">
          <a href="#">
            <h1 className="ih3">Chembur</h1>
          </a>
          <div className="ip">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div id="img1" loading="lazy">
          <h1 className="ih4">Vashi</h1>
          <div className="ip1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div id="img2" loading="lazy">
          <h1 className="ih5">Bandra</h1>
          <div className="ip2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div id="img3" loading="lazy">
          <h1 className="ih6">Kurla</h1>
          <div className="ip3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        {/* <div id="img4" loading="lazy"></div> */}
      </div>
    </>
  );
}
export default Imgal;
