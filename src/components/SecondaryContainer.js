import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title = "Now Playing" movies = {movies.nowPlayingMovies}/>
      <MovieList title = "Top Rated" movies = {movies.topRated}/>
      <MovieList title = "Up Comming" movies = {movies.upComming}/>
      <MovieList title = "Popular" movies = {movies.popularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;
