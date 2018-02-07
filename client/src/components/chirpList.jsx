import React, { Component, Fragment } from 'react';
import Chirp from './chirp';

class ChirpList extends Component {

    render() {

        return (
            <Fragment>
                {this.props.chirps.map((chirp) => {
                    return (
                        <Chirp key={chirp.id} text={chirp.text} index={chirp.id} />
                    );
                })}
            </Fragment>
        );
    }
}

export default ChirpList;
