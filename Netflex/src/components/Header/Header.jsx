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
            <button className={styles.searchbtn}>
            <Search size={20} />
            </button>
          </div>

        {/*Notification*/}
          <button className={styles.iconbtn}>
            {/* notification icon */}
            <Bell size={20}/>
            <span className={styles.notificationbadge} >3</span>
          </button>

        {/*profile */}

        <div className={styles.profileContainer}>
          <button className={styles.profilebtn}>
            {/* user icon */}
            <div className={styles.profileAvatar}>
              <User size={20}/>
            </div>
         {/* drop down icon */}
         <ChevronDown size={20}/>
          </button>
        </div>
      </div>

      </div>
    </header>
  );
}

export default Header;