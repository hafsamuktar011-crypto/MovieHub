import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/marshals (1).webp";
import {Link} from "react-router-dom"
import {Search,Bell,User,ChevronDown} from 'lucide-react'

function Header() {
  return (
    <header>
      <div>
      {/* logo */}
      <img src={logo} alt="Logo" />

      {/* navigation links */}
      <nav>
        <Link href="">Tv Shows</Link>
        <Link href="">Home</Link>
        <Link href="">movies</Link>
        <Link href="">New & Popular</Link>
        <Link href="">My Lists</Link>
        <Link href="">Browse by Language</Link>

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
            <Bell/>
            <span>3</span>
          </button>

        {/*profile */}

        <div>
          <button>
            {/* user icon */}
            <div>
              <User/>
            </div>
         {/* drop down icon */}
         <ChevronDown/>
          </button>
        </div>
      </div>

      {/* right side section */}
      </div>
    </header>
  );
}

export default Header;