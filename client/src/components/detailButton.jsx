import React from 'react';
import { Link } from 'react-router-dom';

const DetailButton = (props) => {
    return (
        <button id={props.id}><Link to={`/details/${props.id}`}>See Details</Link></button >
    );
};

export default DetailButton;