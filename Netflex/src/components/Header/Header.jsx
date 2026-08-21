import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/marshals (1).webp";
import {Link} from "react-router-dom"
import {Search,Bell,User,ChevronDown} from 'lucide-react'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      {/* logo */}
      <img src={logo} alt="Logo" className={styles.logo} />

      {/* navigation links */}
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="">Tv Shows</Link>
        <Link className={styles.navLink} href="">Home</Link>
        <Link className={styles.navLink} href="">movies</Link>
        <Link className={styles.navLink} href="">New & Popular</Link>
        <Link className={styles.navLink} href="">My Lists</Link>
        <Link className={styles.navLink} href="">Browse by Language</Link>

      </nav>

       {/* right side section */}

      <div className={styles.rightSection}>
        {/*search*/}
          <div className={styles.SearchContainer}>
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

      </div>
    </header>
  );
}

export default Header;