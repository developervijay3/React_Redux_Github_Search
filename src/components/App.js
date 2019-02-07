import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../containers/Layout';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <br />
                    <center>
                        <img src="https://i.ibb.co/hgRDgnk/Git-Hub-Logo.png"
                            alt="Git-Hub-Logo"
                            border="0"
                            className="logo" />
                    </center>
                    <br />
                    <Route exact path="/" component={Layout} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;