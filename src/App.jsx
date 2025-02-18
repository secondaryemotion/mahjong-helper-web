import './App.css'
import name from "./assets/name.svg"
import start from "./assets/start.svg"
import m from "./assets/m.svg"
import s from "./assets/s.svg"
import p from "./assets/p.svg"
import z from "./assets/z.svg"
import demo from "./assets/demo.svg"
import hand1 from "./assets/hand1.svg"
import hand2 from "./assets/hand2.svg"
import {useState} from "react";
import requestData from "./API.jsx";

'use client';




function App() {
    const demoHand1 = "2m2389p22247s125z"
    const demoHand2 = "12m68p33469s1223z"
    const [result, setResult] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        let hand;
        if (data["full-hand"] === "") {
            hand = data["m"] + "m" + data["p"] + "p" + data["s"] + "s" + data["z"] + "z";
        } else {
            hand = data["full-hand"]
        }
        setResult(requestData(hand));
    }

    const demo1Run = (e) => {
        setResult(requestData(demoHand1));
    }
    const demo2Run = (e) => {
        e.preventDefault();
        setResult(requestData(demoHand2));
    }

    return (
        <>
            <div>
                <div className="mahjongContainer">
                    <img className="menuImage" src={name} alt={"Mahjong Helper"}></img>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <div className="hand-inputs-box">
                                <input name="full-hand" className="handInput"/>
                                <div className="hand-part-box">
                                    <div className="hand-part">
                                        <input name="m" className="hand-part-input"/>
                                        <img className="hand-letter" src={m} alt={"m"}></img>
                                    </div>
                                    <div className="hand-part">
                                        <input name="p" className="hand-part-input"/>
                                        <img className="long-hand-letter" src={p} alt={"p"}></img>
                                    </div>
                                    <div className="hand-part">
                                        <input name="s" className="hand-part-input"/>
                                        <img className="long-hand-letter" src={s} alt={"s"}></img>
                                    </div>
                                    <div className="hand-part">
                                        <input name="z" className="hand-part-input"/>
                                        <img className="hand-letter" src={z} alt={"z"}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="start-image-box">
                                <button type="submit" className="icon-button">
                                    <img className="startImage" src={start} alt={"start"}></img>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div>{result}</div>
                    <div className="demo-box">
                        <div className="demo-pic-box">
                            <img className="demo" src={demo} alt={"demo"}></img>
                        </div>
                        <div className="demo-hand-box">
                            <button className="icon-button" onClick={demo1Run}>
                                <img className="demo-hand" src={hand1} alt={"hand1"}></img>
                            </button>
                            <button className="icon-button" onClick={demo2Run}>
                                <img className="demo-hand" src={hand2} alt={"hand2"}></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default App

