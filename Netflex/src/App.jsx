import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import MovieCard from './components/MovieCard/MovieCard'
import { movies } from './Data/Data'
function App() {

  return (
    <>
    <Header/>
    <Banner/>
    {movies.map((movie)=>(
    <MovieCard key={movie.id} movie={movie}/>

    ))}
    </>
  )
}

export default App
