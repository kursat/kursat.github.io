import React from 'react';
import {Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Home</p>
                <Link to={'/blog'}>Blog</Link>
            </header>
        </div>
    );
}

export default App;
