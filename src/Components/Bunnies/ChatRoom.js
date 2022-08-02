import "./Styles/ChatRoom.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"
var bunnyService = require("../../Services/BunnyService")

export const ChatRoom = (value) => {

    var location = useLocation();

    var [msg, setMsg] = useState({ Message: "", });

    var ChangeHandler = (e) => {
        setMsg(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    var SubmitHandler = async (e) => {
        e.preventDefault();

        var sender = await bunnyService.ReturnUser();
        var message = msg.Message;
        var receiver = location.state.ChatName;

        console.log(`${sender.Name} -  ${message} to ${receiver}`);
    };

    return (
        <div>
            <div className="Chat">
                <p className="Message"><b>Name: Message</b></p>
            </div>

            <form onSubmit={SubmitHandler}>

                <div className="Keyboard">
                    <label htmlFor="Message"><b>Message</b></label>
                    <textarea name="Message" className="TextArea" placeholder="Enter Message Here" value={msg.Message} onChange={ChangeHandler} required></textarea>
                </div>
                <div className="DivButton">
                    <button type="submit" className="SendButton">SEND</button>
                </div>

            </form>

            <div className="Emojis">
                <p>Some emojis will be here</p>
            </div>

        </div>
    );
}