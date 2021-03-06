import "./Styles/ChatRoom.css"

export const ChatRoom = () => {
    return (
        <div>
            <div className="Chat">
                <p className="Message"><b>Name: Message</b></p>
                <p className="Message"><b>Name: Message</b></p>
                <p className="Message"><b>Name: Message</b></p>
                <p className="Message"><b>Name: Message</b></p>
                <p className="Message"><b>Name: Message</b></p>
                <p className="Message"><b>Name: Message</b></p>
            </div>

            <div className="Keyboard">
                <textarea className="TextArea" placeholder="Enter Message Here"></textarea>
            </div>

            <div className="DivButton">
                <button className="SendButton">SEND</button>
            </div>

            <div className="Emojis">
                <p>Some emojis will be here</p>
            </div>

        </div>
    );
}