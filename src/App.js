// import React, { Component } from "react"
// import logo from "./logo.svg"
// import "./App.css"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <LambdaDemo />
//         </header>
//       </div>
//     )
//   }
// }

// export default App


import React from 'react';
import { VideoBackground } from './VideoBackground';
import { WebsiteOverlay } from './WebsiteOverlay';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';



function App() {
    return (
        <div className="flex relative w-full h-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

