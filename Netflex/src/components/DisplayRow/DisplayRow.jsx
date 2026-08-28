import React from 'react'
import SlideShow from '../SlideShow/SlideShow'
import styles from './DisplayRow.css'
import { movies } from './../../Data/Data';

function DisplayRow() {
  return (
    <div className={styles.mainRapper}>

      <SlideShow title="movie suggestion" movie={movies}/>
    </div>
  )
}

export default DisplayRow
