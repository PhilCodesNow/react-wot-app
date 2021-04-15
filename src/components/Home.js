import React from 'react';


import './home.css';

function Home() {
    return (
        <div className="homepage">
            <div className="homepage__header">
                <h1>World of Tanks App by Phil Mayo</h1>
            </div>
            <div className="homepage__about">
                <p>This is a web app I built on using React and React Router which pulls from Wargaming Group Limited's API holding data on one of their games, World Of Tanks. </p>
                <p>If you'd like to see more of what I've built, here is my <a href="https://philcodesnow.github.io/Projects/personalWebsite/">portfolio</a></p>
            </div>
        </div>
    )
}

export default Home
