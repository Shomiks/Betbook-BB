import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';

import User from './components/User.jsx';
import Posts_Saved from './components/posts_saved.js';

class App extends React.Component {
    render() {
        return (
            <div className="home">
                <Posts_Saved/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
