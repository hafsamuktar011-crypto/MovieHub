import React from 'react'
import SlideShow from '../SlideShow/SlideShow'
import styles from './DisplayRow.module.css'
import { movies } from './../../Data/Data';

function DisplayRow() {
  return (
    <div className={styles.mainRapper}>
<SlideShow title="Movie Suggestions" movies={movies} />
<SlideShow title="Popular on Netflix" movies={movies} />
<SlideShow title="Trending Now" movies={movies} />
<SlideShow title="New Releases" movies={movies} />
    </div>
  )
}

export default DisplayRow
