import "./Styles/ChatRoom.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { ChatPartial } from "../Partials/ChatPartial"

var bunnyService = require("../../Services/BunnyService")

export const ChatRoom = () => {

    var location = useLocation();

    var [msg, setMsg] = useState({ Message: "", });

    var [messages, setMessages] = useState([]);

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

        bunnyService.SaveMessage({ ...sender, message, receiver });
        
        var data = bunnyService.ReturnMessages(receiver)
        var promise = Promise.resolve(data);
        promise.then((value) => {
            setMessages(value);
        });
    };

    return (
        <div>
            <div className="Chat">
                <ol>
                    {messages.map(msg => <ChatPartial  {...msg} />)}
                </ol>
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