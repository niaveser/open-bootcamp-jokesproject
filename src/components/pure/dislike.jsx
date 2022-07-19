import React from 'react';
import PropTypes from 'prop-types';


const Dislike = ({dislike, total}) => {

    


    return (
        <div>
            <button onClick={dislike}>Dislike this joke</button>
            <p>Disliked jokes: {total.length}</p>
        </div>
    );
};


Dislike.propTypes = {
    dislike: PropTypes.func,
    total: PropTypes.array
};


export default Dislike;
