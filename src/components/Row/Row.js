import React, { useState,useEffect } from 'react'
import axios from '../axios'
import Youtube from 'react-youtube'

function Row(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters,
      autoplay: 1,
    },
    };
  
    
   
  
 
  const API_KEY='30edf001f838b32508cd201f4b341d4e';
  const ima='https://image.tmdb.org/t/p/original';
  const original=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  const action= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
  const romance= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
  const ClickMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log("trailer",response.data)
        if( response.data.results.length!==0){
          setyou(response.data.results[0])

        }
       
        console.log("movieid",id)

      
     
    })
    console.log("state",youtube)

  }


 
  const[originals,setorg]=useState([])
  const[youtube,setyou]=useState('')
  useEffect(()=>{

    axios.get(props.rom?romance:props.small ?action:original).then((response)=>{
      
      setorg(response.data.results)
    })

  })
  

  
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {originals.map((i)=>{
        return( <img onClick={()=>ClickMovie(i.id)} className={props.small?'small':'poster' } alt='poster' src={`${ima+i.backdrop_path}`} />



        );
              })}
       
    </div>


{youtube ?<Youtube opts={opts} videoId={youtube.key}/> :""}
</div>
    
  )
}

export default Row
