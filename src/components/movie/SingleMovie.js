import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/movie' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title} - {year}</h2>
        <p>{plot}</p>
        <Link to='/movie' className='btn' style={{fontSize: '2.5rem', textAlign: 'center'}}>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
