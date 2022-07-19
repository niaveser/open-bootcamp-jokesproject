import React, { useState, useEffect } from 'react';
import Dislike from '../pure/dislike';
import Jokes from '../pure/jokes';
import Like from '../pure/like';
import { getRandomJoke } from '../../services/axiosService'; 



const JokesListComponent = () => {
    
    

    const [joke, setJoke] = useState(null)
    const [jokeId, setJokeId] = useState(null)
    
    const [likedJokes, setLike] = useState([])
    const [dislikedJokes, setDislike] = useState([])

    useEffect(() => {
        obtainJoke()
    },[])


   const obtainJoke = () => {
       getRandomJoke()
       .then((response) => {
           if(response.status === 200) {
               setJoke(response.data.value)
               setJokeId(response.data.id)
               
           }
       })
       .catch((error) => {
           alert(`Something went wrong ${error}`)
       })
   }

   const likeJoke = () => {
       const id = jokeId
       const tempJokes = [...likedJokes]
       if (!tempJokes.includes(id) && !dislikedJokes.includes(id)) {
        tempJokes.push(id)
       }
       setLike(tempJokes)
   }

   const dislikeJoke = () => {
       const id = jokeId
       const tempJokes = [...dislikedJokes]
       if (!tempJokes.includes(id) && !likedJokes.includes(id)){
           tempJokes.push(id)
       }
       setDislike(tempJokes)
   }

        

    return (
        <div>
        <Jokes joke={joke} getJoke={obtainJoke}></Jokes>
        <Like like={likeJoke} total={likedJokes}></Like>
        <Dislike dislike={dislikeJoke} total={dislikedJokes}></Dislike>
        </div>
    );
}

export default JokesListComponent;
