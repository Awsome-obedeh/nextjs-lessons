import { useEffect,useState,useRef } from "react"

export default function Movies(){
    // const idRef=useRef();
    // const idValue=idRef.current.value
    // console.log(idValue);
    const [movies,setMovies]=useState()
    const [singleMovie,setSingleMovie]=useState([])
    const [showDescription, setShowDescription]=useState(false)
    const [movieId, setMovieId]=useState()

    // function showDetailsHandler(){
    //     // setShowDescription((prevShowDescription)=>!prevShowDescription)
       
       
    // }

    function getidHandler(event){
        setMovieId(event.target.value) 
        // change showDescription State
        setShowDescription(true)
    }

    useEffect(()=>{
        async function fetchData (){
            const response= await fetch('https://www.episodate.com/api/most-popular?page=1')
            // change json response to object
            const moviesData = await response.json()
           console.log(moviesData);
            // assign movies state to the variable movieData
            setMovies(moviesData)
             console.log(movies);
        }

        // shoqw details api
        
        async function getDescription(){
            const res= await fetch(`https://www.episodate.com/api/show-details?q=${movieId}`)
            const data =await res.json()
            // assign movies state to the variable state singleMovie
            setSingleMovie(data)
            console.log(singleMovie);
        }

        // The . then approach
        // fetch('https://www.episodate.com/api/search?q=arrow&page=1')
        // .then((res)=>{
        //     return res.json()
        // })
        // .then((data)=>{
        //     return data
        // })
        
    // call fetchData function
        fetchData()
        getDescription()

    },[])
    return(
        <div style={{display:'grid', gridTemplateColumns:"auto auto auto auto", gap:'.5rem' }}>
            {
              movies ? movies.tv_shows.map((movie)=>{
                return <>
                    <div> 
                        <img src={movie.image_thumbnail_path} alt={movie.name}  width={500} />
                        <p>{movie.name} </p>
                        <p>{movie.network}</p>
                        <h1>{movie.id} </h1>

                            <p>{movie.country} </p>  
                        
                            <button value={movie.id} onClick={getidHandler}> {movie.id} </button>   
                           
                    </div>
                </>
              }): <p style={{background:'red'}}>   Laoding</p>
            }
                {movieId}

         { showDescription && singleMovie.tvShow.map((movie)=>{
            return<>
            <p>
                {movie.description}
                <img src={movie.image_path} alt="" srcset="" />
            </p>
            </>
         }) }
        </div>

    )
}