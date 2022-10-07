import React from 'react';
import '../css/Card.css';

function Card(props) {
    return (
        <div className='CardContainer'>
            <div className='CardSubContainer'>
                <h5>{props.heading}</h5>
                <h1>{props.value}</h1>
            </div>
        </div>
    );
}

export default Card;