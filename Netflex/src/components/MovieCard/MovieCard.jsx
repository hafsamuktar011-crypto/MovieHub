import React from 'react'
import styles from './MovieCard.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { BiPlusCircle } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { movies } from '../../Data/Data';


function MovieCard({movie}) {

    let genres=["Adventure","Action","Trailor"]
  return (
    <div className={styles.cardrapper}>
      {/* poster img */}
<img className={styles.poster} 
src={movies.poster_path} alt={movies.title} />


      {/* hover card */}
      <div>
        {/* img */}
        <img src={movies.poster_path} alt={movies.title} />

        {/* badge */}
        <div>Recently added</div>
        {/* button row */}
        <div>
            <FaCirclePlay color='white' size={40}/>
            <BiPlusCircle color='white' size={40}/>
            <GoCheckCircleFill color='white' size={40}/>
            <IoIosArrowDropdownCircle color='white' size={40}/>
        </div>

        {/* metadata row */}
        <div>
            <span>U/A 16+</span>
            <span>Movie</span>
            <span>ID</span>
        </div>

        {/* movie genres */}
        <div>
{
    genres?.map((g,index) => {
return(
<span key={index}>
{g}
{index < genres.length-1 &&  <span>•</span>}
</span>
) 
    })
}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
