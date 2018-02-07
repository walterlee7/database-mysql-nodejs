import React from 'react';
import DetailButton from './detailButton';

const Chirp = (props) => {
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    {props.text}
                </p>
                <DetailButton id={props.index} />
            </div>
        </div >
    );
};

export default Chirp;
