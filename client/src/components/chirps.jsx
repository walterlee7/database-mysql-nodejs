import React, { Component } from 'react';
import ChirpForm from './chirpForm';
import ChirpList from './chirpList';

class Chirps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: []
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        fetch('/api/chirps/')
            .then((response) => {
                return response.json();
            }).then((chirps) => {
                this.setState({
                    chirps
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addChirp(text) {
        fetch('/api/chirps/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            console.log(text);
            this.getChirps();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <ChirpForm postChirp={(text) => { this.addChirp(text); }} />
                <ChirpList chirps={this.state.chirps} />
            </div>
        );
    }
}

export default Chirps;
