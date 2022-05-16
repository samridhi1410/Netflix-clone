import React, {useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



const base_url="https://image.tmdb.org/t/p/original";

function Rows({title , fetchUrl,isLargeRow}) {
 const [movies, setMovies] = useState([]);
 const [trailerUrl, setTrailer] = useState("");




 useEffect(()=>{
     async function fetchData(){
     
        const request=await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
     }
     fetchData();

 },[fetchUrl])

 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const handleClick=(movies)=>{
  if(trailerUrl){
    setTrailer("")
  }
  else
  {
    movieTrailer(movies?.name || "")
    .then((url)=>{
      const urlParams=new URLSearchParams(new URL(url).search)
      setTrailer(urlParams.get("v"));
    }).catch((error)=>console.log(error));
  }
};
return (
    <div className='rows'>
      <h2>{title}</h2>
    <div className="row_posters">

      {movies.map(movie=>(
        <img 
         key={movie.id} 
         onClick={()=>handleClick(movies)}
        className={`row_poster ${isLargeRow && "row_largePoster"}`}
        src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
        alt={movie.name}/>
      
      
      ))}

    </div>
    
     {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}  />}
    </div>
  )
}

export default Rows