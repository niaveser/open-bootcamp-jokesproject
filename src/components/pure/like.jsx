import React from 'react';
import PropTypes from 'prop-types';


const Like = ({ like, total }) => {

   
    return (
        <div>
            <button onClick={like}>Like this joke</button>
            <p>Liked jokes: {total.length}</p>
        </div>
    );
};


Like.propTypes = {
    like: PropTypes.func,
    total: PropTypes.array
};


export default Like;
