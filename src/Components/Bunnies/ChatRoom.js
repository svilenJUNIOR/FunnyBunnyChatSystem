import "./Styles/ChatRoom.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"

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
        console.log(`${location.state.ChatName} -  ${msg.Message}`)
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