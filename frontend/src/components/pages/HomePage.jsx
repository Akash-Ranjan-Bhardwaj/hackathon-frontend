import React from "react";
import "./HomePage.css"; // Import your CSS file
import Timer from "./Timer"; // Import Timer component
import teamImage from "../../assets/homepage/team.svg";

function HomePage() {
  return (
    <>
      {/* Header Section */}
      <header className="container header">
        <nav className="nav">
          <div className="logo">
            <h2>CSS.</h2>
          </div>

          <div className="nav_menu" id="nav_menu">
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill"></i>
            </button>

            <ul className="nav_menu_list">
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  Member
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  About
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  Service
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="#" className="nav_menu_link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <button className="toggle_btn" id="toggle_btn">
            <i className="ri-menu-line"></i>
          </button>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Welcome to <span>Hackathon.</span>
                <br />
                Develop anything.
              </h1>
              <p className="info-text">
                Build a beautiful, modern website with flexible components built
                from scratch.
              </p>

              {/* Add Timer Component */}
              <Timer />

              <div className="btn_wrapper">
                <button className="btn view_more_btn">
                  Register <i className="ri-arrow-right-line"></i>
                </button>

                <button className="btn documentation_btn">Event Flow</button>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                <img src={teamImage} alt="team-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
