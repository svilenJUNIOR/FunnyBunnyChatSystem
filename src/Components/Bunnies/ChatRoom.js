import "./Styles/ChatRoom.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"

var bunnyService = require("../../Services/BunnyService")

export const ChatRoom = () => {

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

        var sender = await bunnyService.ReturnBunny();
        var message = msg.Message;
        var receiver = location.state.ChatName;

        bunnyService.SaveMessage({...sender, message, receiver});
        var messages = bunnyService.ReturnMessages({receiver});
        console.log(messages);
    };

    return (
        <div>
            <div className="Chat">
            </div>

            <form onSubmit={SubmitHandler}>

                <div className="Keyboard">
                    <label htmlFor="Message"></label>
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