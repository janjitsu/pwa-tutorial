import React from 'react'
import logo from './logo.svg';

export default function Home() {
    return (
        <div className="Home">
            <div><h1>Home component</h1></div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}
