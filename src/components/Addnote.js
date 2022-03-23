import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Button, TextField } from '@mui/material';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Addnote = ({ user }) => {
    const [mytodos, setTodos] = useState([]);
    const [text, settext] = useState("");
    useEffect(() => {
        if (user) {
            const docref = db.collection(user.uid);
            docref.onSnapshot(docSnap => {
                let changes = docSnap.docChanges();
                changes.forEach(change => {
                    if (change.type === "added") {
                        mytodos.push({
                            id: change.doc.id,
                            Todo: change.doc.data().Todo
                        })
                    } if (change.type === 'removed') {
                        // console.log(change.type);
                        for (var i = 0; i < mytodos.length; i++) {
                            if (mytodos[i].id === change.doc.id) {
                                mytodos.splice(i, 1);
                            }
                        }
                    }
                    setTodos(mytodos)
                })
                if (docSnap.exists) {
                    setTodos(docSnap.data())
                    console.log(docSnap);
                } else {
                    console.log("No a");
                }
            })
        }

        else {
            console.log("no user");
        }
    }, []);

    const addTodo = () => {
        const date = new Date();
        const time = date.getTime();
        const counter = time;
        const id = counter;
        console.log(id);
        db.collection(user.uid).doc("_" + id).set({
            id: "_" + id,
            text
        })
        console.log("Added todo")
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