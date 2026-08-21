import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/marshals (1).webp";
import {link} from "react-router-dom"
import {Search,Bell,User,ChevronDown} from 'lucide-react'

function Header() {
  return (
    <header>
      <div>
      {/* logo */}
      <img src={logo} alt="Logo" />

      {/* navigation links */}
      <nav>
        <link href="">Tv Shows</link>
        <link href="">Home</link>
        <link href="">movies</link>
        <link href="">New & Popular</link>
        <link href="">My Lists</link>
        <link href="">Browse by Language</link>

      </nav>
      <div>
        {/*search*/}
          <div>
            <button>
            <Search />
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