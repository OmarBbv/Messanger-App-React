import React from "react";
import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../SocketApi";
import styles from "./styles.module.css";

const ChatForm = () => {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleChange = (e) => {
    e.preventDefault();
    console.log(message);

    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);

    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatForm;
