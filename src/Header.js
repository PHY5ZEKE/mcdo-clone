import React from "react";

function Header() {
  return (
    <header className="navbar user-menu main-menu bgc-white b0 br0 m0 p0">
      <div className="container py-15">
        <div className="navbar-header">
          <a href="https://www.mcdonalds.com.ph" className="navbar-brand p0 m0">
            <img src="images/mcdo.png" alt="Brand Logo" className="logo-img" />
          </a>
          <div className="d-flex ai-c fg-1 nav--wrapper">
            <a href="#" className="navbar-link">
              Home
            </a>
            <div className="navbar-dropdown">
              <a href="#" className="navbar-link">
                About Us
              </a>
              <div className="dropdown-content">
                <a href="#">Our Story</a>
                <a href="#">Our Food</a>
                <a href="#">Our Stores</a>
              </div>
            </div>
            <a href="#" className="navbar-link">
              Family Activities
            </a>
            <a href="#" className="navbar-link">
              McDelivery
            </a>
            <a href="#" className="navbar-link">
              Careers
            </a>
            <div className="navbar-dropdown">
              <a href="#" className="navbar-link">
                Opportunities
              </a>
              <div className="dropdown-content">
                <a href="#">Franchising</a>
                <a href="#">Property Leasing</a>
              </div>
            </div>
            <div className="navbar-dropdown">
              <a href="#" className="navbar-link">
                <img src="images/menu.png" style={{ height: "35px" }} />
              </a>
              <div className="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">McDelivery</a>
                <a href="#">Careers</a>
                <a href="#">Charity</a>
                <a href="#">Opportunity</a>
                <a href="#">Family Activies</a>
                <a href="#">NXTGEN</a>
                <a href="#">McCafe</a>
                <a href="#">Contact Us</a>
                <a href="#">DIGITAL TREATS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
