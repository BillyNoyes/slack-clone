import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

function Chat() {
  const { roomId } = useParams();

  return (
    <div className="chat">
      <h1>{roomId}</h1>
    </div>
  );
}

export default Chat;
