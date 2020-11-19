import React from 'react';
import Feed from '../feed';

const PrimaryCol = (props) => {
    return (
        <div className="t-col-container">
            <h3>Inicio</h3>
           
            <Feed />
        </div>
    )
}

export default PrimaryCol;


//<PostTweet profileUrl={props.profileUrl} /> 