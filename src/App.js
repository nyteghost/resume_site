import React from 'react';
import './App.css';
import Navbar from "./components/topbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import About from "./pages/about";
import Index from "./pages/index";
import Apis from "./pages/apis";
import Boardgame from "./pages/boardgames";

import Main from "./components/mainComponent";
function App() {
    return (
        <>

            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Navbar />
                <Routes>
                    {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
                    <Route exact path="/" element={<Index/>} />
                    <Route  path="/Resume" element={<Resume/>} />
                    <Route path="/Projects" element={<Projects/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Apis" element={<Apis/>} />
                    <Route path="/Boardgames" element={<Boardgame/>} />

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
                </Routes>
            </Router>
        </>
    );
}


export default App;