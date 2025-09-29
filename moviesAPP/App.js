//https://www.omdbapi.com/?apikey=${API_KEY}&s=${title} 

import React,{useEffect,useState} from 'react'
import SearchBar from "./components/searchBar";
export default function App() {
  const[movies , setMovies]=useState([]);

  const API_KEY="e61f6c96";

  const searchMovies=async(title)=>{
    const res= await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
   const data=await res.json();
   console.log(data);
  if(data.Search){
    setMovies(data.Search);
  }else{
    setMovies([]);
  }

  }



  return (
    <div>
      <SearchBar onSearch={searchMovies}/>
      
    </div>
  )
}
