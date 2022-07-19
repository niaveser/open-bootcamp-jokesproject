import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/axiosService';
import PropTypes from 'prop-types';





const Jokes = ({ joke, getJoke }) => {
    
     


    return (
        <div>
            <h1>Chuck's JOKES!!!</h1>
            <button onClick={getJoke}>Get new joke</button>
            <p>
            {joke}
            </p>
            
        </div>
    );
}

Jokes.propTypes = {
}

export default Jokes;
