import React from 'react'
import styles from './SlideShow.css'
import MovieCard from '../MovieCard/MovieCard'
import { movies } from './../../Data/Data';

import {swiper,swiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';


function SlideShow({title,movies}) {
  return (
    <div className={styles.title}>
        <h2>{title}</h2>
      
      <div className={styles.Row}>
        {movies.map((movie)=>(
    <MovieCard key={movie.id} movie={movie}/>

    ))}
      </div>
    </div>
  )
}

export default SlideShow
