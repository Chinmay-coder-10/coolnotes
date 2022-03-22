import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Button, TextField } from '@mui/material';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Addnote = ({ user }) => {
    const [mytodos, setTodos] = useState({});
    const [text, settext] = useState("");
    useEffect(() => {

        if (user) {
            const docref = db.collection("todos").doc(user.uid)
            docref.onSnapshot(docSnap => {
                if (docSnap.exists) {
                    console.log(docSnap.data().todos);
                    setTodos(docSnap.data().todos)
                } else {
                    console.log("No docs");
                }
            })
        }
        else {
            console.log("no user");
        }
    }, []);

    const addTodo = () => {
        db.collection("todos").doc(user.uid).update({
            todos: [...mytodos, text]
        }, { merge: true })

        console.log("update")
    }
    return (
        <>
            <Navbar color="black" />
            <h1>Addnote</h1>
            <div className="d-flex">
                <TextField className="mx-2" autoComplete="off" type="text" id="standard-basic" variant="standard" value={text} onChange={(e) => { settext(e.target.value) }} />
                {/* <TextField type="text" id="standard-basic" variant="standard" style={{ marginTop: "2px" }} value={notedesc} onChange={(e) => { setnotedesc(e.target.value) }} /> */}
            </div>
            <Button className="my-3" variant="contained" color="success" style={{ borderRadius: "25px", width: "20%" }} onClick={addTodo}>Add note</Button>

        </>
    )
}

export default Addnote