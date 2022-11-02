import React, { useEffect, useState } from 'react'
import axios from '../axios'


function Banner() {
   const[movie,setmovie]=useState({})
   const ima='https://image.tmdb.org/t/p/original';
   const API_KEY='30edf001f838b32508cd201f4b341d4e';
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setmovie(response.data.results[5])
    console.log(response.data.results[5])
    })

  },[])
  return (
    
     <div 
     style={{backgroundImage:`url(${movie? ima+ movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content' >
            <h1 className='title'>{movie ? movie.title ?  movie.title: movie.name:""} </h1>
            <div className='banner_buttons' >
                <button className='button' >Play</button>
                <button className='button' >My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
