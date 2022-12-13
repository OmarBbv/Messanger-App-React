import { useEffect } from "react";
import { init, subscribeChat, subscribeInitialMessage } from "../SocketApi";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

    subscribeInitialMessage((messages) => setMessages(messages));

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);

  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
