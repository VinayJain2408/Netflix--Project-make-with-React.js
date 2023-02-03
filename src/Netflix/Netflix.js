import React from 'react'
import Row from './Row'
import requests from './ApiKeys'
import './Netflix.css'
import Header from './Header'
import Banner from './Banner'

function Netflix() {
 
  return (
   <div>
    <Header />
    <Banner />

    <Row
    heading = 'Netflix Original'
     vikash = {requests.fetchNetflixOriginals}
     big = {true}
    />
    <Row
    heading = 'Trending Now'
     vikash = {requests.fetchTrending}
    />
    <Row
    heading = 'Top Rated'
     vikash = {requests.fetchTopRated}
    />
    <Row
    heading = 'Action Movies '
     vikash = {requests.fetchActionMovies}
    />
    <Row
    heading = 'Comedy Movies'
     vikash = {requests.fetchComedyMovies}
    />
    <Row
    heading = 'Horror Movies'
     vikash = {requests.fetchHorrorMovies}
    />
    <Row
    heading = 'Romantic'
     vikash = {requests.fetchTrending}
    />
    <Row
    heading = 'Documentaries'
     vikash = {requests.fetchDocumentaries}
    />
   </div>
  )
}

export default Netflix