import React, { Component } from 'react'
import About from "../components/resume/about";
import Experience from "../components/resume/experience";
import Education from "../components/resume/education";


export default class Resume extends Component {

    render() {
        return (
            <>
                <div className="App"
                     style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <About></About >
                </div>
                <div className="App"
                     style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                     }}>
                    <Experience></Experience>
                </div>
                <div className="App"
                     style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                     }}>
                    <Education></Education>
                </div>
            </>
        )
     console.log("resume");
    }
}