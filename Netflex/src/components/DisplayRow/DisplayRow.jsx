import React, { useState } from 'react'
import SlideShow from '../SlideShow/SlideShow'
import styles from './DisplayRow.module.css'
import { movies } from './../../Data/Data';
import { movieInstance } from '../../utility/MoviesInstance';
import requests from '../../utility/requestUrl';

function DisplayRow() {

const [movies,setMovies]=useState({
    trending:[],
    netflixoriginals:[],
    topRated:[],
    action:[],
    comedy:[],
    horror:[],
    romance:[],
    documentaries:[]
})

const fetchMovies=async()=>{
    try{
 const[trending,
    netflixoriginals,
    topRated,
    action,
    comedy,
    horror,
    romance,
    documentaries]=await Promise.all(
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchDocumentaries),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchHorrorMovies)
    )
    }
    catch(error){

    }
}














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
