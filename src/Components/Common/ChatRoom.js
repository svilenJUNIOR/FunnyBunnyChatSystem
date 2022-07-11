import "../Common/Styles/ChatRoom.css"

export const ChatRoom = () => {
    return (
        <div>
            <div className="Chat">
            </div>

            <div className="Keyboard">
                <textarea className="TextArea"></textarea>
            </div>

            <div className="DivButton">
                <button className="SendButton">SEND</button>
            </div>
            
            <div className="Emojis">
            </div>

        </div>
    );
}