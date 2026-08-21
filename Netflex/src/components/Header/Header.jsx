import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/marshals (1).webp";

function Header() {
  return (
    <header>
      <div>
      {/* logo */}
      <img src={logo} alt="Logo" />

      {/* navigation links */}
      <nav>
        <a href="">Home</a>
        <a href="">Tv Shows</a>
        <a href="">movies</a>
        <a href="">New & Popular</a>
        <a href="">My Lists</a>
        <a href="">Browse by Language</a>

      </nav>
      <div>
        {/*search*/}
          <div>
            <button>
              {/* search btn */}
            </button>
          </div>
        {/*Notification*/}
          <button>
            {/* notification icon */}
            <span>3</span>
          </button>

        {/*profile */}

        <div>
          <button>
            {/* user icon */}

         {/* drop down icon */}
          </button>
        </div>
      </div>

      {/* right side section */}
      </div>
    </header>
  );
}

export default Header;