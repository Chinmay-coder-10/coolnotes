import { useState, useEffect } from "react";
import "../css/Notes.css"
import Navbar from "./Navbar";
import Noteraw from "./Noteraw"

const Notes = () => {
    const [notetitle, setnotetitle] = useState(Noteraw);
    const [randomstyle, setrandomstyle] = useState("");
    const [notediv, setnotediv] = useState("notediv");

    let colours = ['linear-gradient(to right, #36d1dc, #5b86e5)', "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)", "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)", "linear-gradient(to right, #7f00ff, #e100ff)", "linear-gradient(to right, #ff9966, #ff5e62)", " linear-gradient(to bottom, #4361ff,  #4659ff, #3bbae2)"];
    function getRandomColour(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }
    function displayrandomnumber() {
        let index = getRandomColour(0, colours.length - 1);
        setrandomstyle(colours[index]);
        console.log(colours[index]);
        console.log(localStorage);
    }
    useEffect(() => {
        displayrandomnumber();
    }, []);
    const t = "Hello";
    return (
        <>
            <Navbar color="black" />
            <div style={{ display: "flex" }}>
                {notetitle.map((e) => {
                    return (
                        <>
                            <div style={{ background: randomstyle, color: "white" }} className={notediv, "notecard"}><h1>{e.title}</h1></div>
                            {/* <div style={{ background: randomstyle }} className={notediv}></div> */}
                        </>
                    )
                })}
            </div>
            <h1>Hello World</h1>
            {/* <div className="notecard"></div> */}
        </>
    )
};

export default Notes;
