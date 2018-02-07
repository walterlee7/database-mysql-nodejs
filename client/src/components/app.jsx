import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './header';
import Chirps from './chirps';
import Details from './details';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Switch>
                        <Route exact path="/" component={Chirps} />
                        <Route exact path="/details/:id" component={Details} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;