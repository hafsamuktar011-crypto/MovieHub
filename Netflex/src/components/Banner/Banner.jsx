import React from 'react'
import NetflexBannerLogo from '../../assets/images/marshals (3).webp'
import {Play,Info} from "lucide-react"
import styles from './Banner.module.css'


function Banner() {
  return (
    <div className={styles.Banner}>

      <div className={styles.contents}>

{/* netflex image */}
<img className={styles.logoimg}
src={NetflexBannerLogo} alt="Netflex Logo" />

{/* title */}
<h1 className={styles.title}>Bridgerton</h1>

{/* description */}
<h1 className={styles.description}>
  shondaland's Emmy-winning series brings julia Quinn's novels
  to life,
  as eight siblings seek their perfect match amid London's scandals and soirees.
</h1>

{/* button */}
<div className={styles.buttonContainer}>
  <button className={styles.button}>
    <Play size={30}/>
    Play</button>
  <button className={styles.button}>
    <Info size={30}/>
    My list</button>
</div>
      </div>
      {/* fading */}
      <div className={styles.fadeBottom}>

      </div>
    </div>
  )
}

export default Banner
