import React from 'react'
import styles from './MovieCard.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { BiPlusCircle } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard() {
  return (
    <div>
      {/* poster img */}
<img src="" alt="" />


      {/* hover card */}
      <div>
        {/* img */}
        <img src="" alt="" />

        {/* badge */}
        <div>badge</div>
        {/* button row */}
        <div>
            <FaCirclePlay/>
            <BiPlusCircle/>
            <GoCheckCircleFill/>
            <IoIosArrowDropdownCircle/>
        </div>

        {/* metadata row */}
        <div>
            <span>U/A 16+</span>
            <span>Movie</span>
            <span>ID</span>
        </div>

        {/* movie genres */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default MovieCard
