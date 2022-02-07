import React from 'react';
import "../css/Home.css"
import Notesillustration from "../images/notesillustration.svg"
import WebBased from "../images/webbased.png"
import Freetouse from "../images/freetouse.png"
import Secure from "../images/secure.png"
// import Blob from "../images/blob.svg"

const Secondsection = () => {
    return (
        <>
            <div class="second-section font1">
                <img src={Notesillustration} className="notesillustration" />
                <div className="whyCN">
                    <div className="whycoolnotes d-flex justify-content-center"><h1 className="whycoolnotesheading heading">Why Cool Notes?</h1></div>
                    <div className="points">
                        <div className="pointimgparent"> <img src={WebBased} alt="webbased" className="pointimg" /></div>
                        <p className="pointheading">Web Based. No need to install any software</p>
                    </div>
                    <div className="points">
                        <div className="pointimgparent"> <img src={Freetouse} alt="webbased" className="pointimg" /></div>
                        <p className="pointheading d-flex">100% Free to use . No subscription needed</p>
                    </div>
                    <div className="points">
                        <div className="pointimgparent"> <img src={Secure} alt="webbased" className="pointimg" /></div>
                        <p className="pointheading">Notes access from any device with credentials </p>
                    </div>
                    <div className="points">
                        <div className="pointimgparent"> <img src={Secure} alt="webbased" className="pointimg" /></div>
                        <p className="pointheading">100% secure. Only you can view and save notes</p>
                    </div>
                    {/* <div className="blob right"></div> */}
                </div>
            </div>
        </>
    )
};

export default Secondsection;

