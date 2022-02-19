import React from 'react';
import "../css/Home.css"
import Register from './Register';

const Footersection = () => {
    return (
        <div style={{ margin: "4rem" }}>
            <h1 style={{ fontSize: "50px" }} className="text-center my-5 heading footerheading">Start saving notes</h1>
            <div className="footeritem">
                <div className="leftside">
                    <h1 className="getstarted" >Get started</h1>
                    <p className="getstartedp">By creating an account you can start saving notes</p>
                </div>
                <div className="rightside">
                    <Register />
                </div>
            </div>
        </div>
    )
};

export default Footersection;
