import {Routes, Route} from 'react-router-dom'
import {MovieDetails, MovieList, PageNotFound, Search} from '../pages'

import React from 'react'

export const Allrouter = () => {
  return (
    <div className='dark:bg-slate-800'>
        <Routes>
            <Route path='/' element={<MovieList  apiPath = {'movie/now_playing'} title='Home'/>}/>
            <Route path='movie/:id' element={<MovieDetails/>}/>
            <Route path='movies/popular' element={<MovieList apiPath = {'movie/popular'} title='Popular'/>}/>
            <Route path='movies/top' element={<MovieList apiPath = {'movie/top_rated'} title='top rated'/>}/>
            <Route path='movies/upcoming' element={<MovieList apiPath={'movie/upcoming'} title='upcoming'/>}/>
            <Route path='search' element={<Search apiPath={'search/movie'}/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
