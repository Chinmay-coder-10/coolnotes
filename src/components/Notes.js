import { useState, useEffect } from "react";
import "../css/Notes.css"
import Navbar from "./Navbar";
import Noteraw from "./Noteraw"

const Notes = () => {
    const [notetitle, setnotetitle] = useState(Noteraw);
    const [randomstyle, setrandomstyle] = useState("");
    const [notediv, setnotediv] = useState("notediv");
    let colours = ['linear-gradient( 180deg, #ABDCFF 10%, #0396FF 100%', ' linear-gradient( 180deg, #81FBB8 10%, #28C76F 100%)', 'linear-gradient( 180deg, #52E5E7 10%, #130CB7 100%)', 'linear-gradient( 180deg, #FFE985 10%, #FA742B 100%)'];
    function getRandomColour(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }
    function displayrandomcolour() {
        let index = getRandomColour(0, colours.length - 1);
        setrandomstyle(colours[index]);
        console.log(colours[index]);
    }
    useEffect(() => {
        displayrandomcolour();
        console.log(process.env.REACT_APP_STORAGEBUCKET);
    }, []);
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
            
            {/* <div className="notecard"></div> */}
        </>
    )
};

export default Notes;
