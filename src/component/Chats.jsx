import React from "react";
import Input from "./Input";

function Chats(props) {
    return (
        <div className="chats">
            {props.children}
            <Input placeholder="Type a message..." text="Send" />
        </div>
    );
}

export default Chats;