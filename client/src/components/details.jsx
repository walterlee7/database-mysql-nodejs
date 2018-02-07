import React, { Component } from 'react';
import ChirpForm from './chirpForm';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                {
                    text: '',
                    id: 1
                },
            ]
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

    // getChirps() {
    //     fetch('/api/chirps/')
    //         .then((response) => {
    //             return response.json();
    //         }).then((chirps) => {
    //             let keys = Object.keys(chirps);
    //             let chirpsArray = [];

    //             for (let key of keys) {
    //                 if (key !== 'nextid') {
    //                     chirpsArray.push({
    //                         text: chirps[key].text,
    //                         id: key
    //                     });
    //                 }
    //             }

    //             this.setState({
    //                 chirps: chirpsArray
    //             });
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }

    updateChirp(text) {

        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            console.log("update clicked");
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteChirp() {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            console.log("delete success");
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        //console.log(this.props.match.params.id);
        return (
            <div className="container">
                {this.state.chirps.map((chirp) => {
                    //console.log(chirp.id);
                    if (chirp.id == this.props.match.params.id) {
                        return (
                            <div key={chirp.id} className="card m-1">
                                <div className="card-body text-left">
                                    <p className="card-text">
                                        {chirp.text}
                                    </p>
                                </div>
                                <button id={chirp.id} className="delete"
                                    onClick={() => { this.deleteChirp(); }}
                                >Delete Chirp</button>
                            </div >
                        );
                    }
                })}
                <ChirpForm postChirp={(text) => { this.updateChirp(text); }} />
            </div>
        );
    }
}



export default Details;