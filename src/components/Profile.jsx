import React from "react";
import "../css/Profile.css";
import Logo1 from "./images/Foo.jpg";

function Profile() {
  return (
    <>
      <div className="user-profile">
        <div className="profile-card">
          <h1 className="profile-card__title">Ross Geller</h1>
          <p className="profile-card__subtitle">@ross924</p>
          <img
            className="profile-card__avatar"
            src={Logo1}
            alt="Avatar for Bart Veneman"
          />
        </div>
        <div className="profile-projects">
          <h2>Ross geller projects</h2>
          <ol className="cards">
            <li className="li11">
              <a
                className="card"
                href=""
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/320x200/?modern-living-room')",
                }}
              ></a>
              <h4 className="card__title">TechCrunch Beta</h4>
            </li>
            <li className="li11">
              <a
                className="card"
                href=""
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/320x190/?modern-living-room')",
                }}
              ></a>
              <h4 className="card__title">TechCrunch Beta</h4>
            </li>

            <li className="li11">
              <a
                className="card"
                href=""
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/310x200/?modern-living-room')",
                }}
              ></a>
              <h4 className="card__title">TechCrunch Beta</h4>
            </li>
            <li className="li11">
              <a
                className="card"
                href=""
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/330x220/?modern-living-room')",
                }}
              ></a>
              <h4 className="card__title">Very long </h4>
            </li>
            <li className="li11">
              <a
                className="card"
                href=""
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/320x210/?modern-living-room')",
                }}
              ></a>
              <h4 className="card__title">Empty state</h4>
            </li>
            <li className="li11">
              <a
                className="card"
                href=""
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/310x210/?modern-living-room')",
                }}
              ></a>
              <h4 className="card__title">Very long ttitle</h4>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
export default Profile;
