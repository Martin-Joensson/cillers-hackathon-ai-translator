// import { TextButton } from "../components/TextButton"
import { US } from "country-flag-icons/react/3x2";
import { useState } from "react";

import { MessageForm } from "../components/MessageForm";
import "./Conversation.css";
import { TextButton } from "../components/Buttons/TextButton";
import { MessageList } from "../components/MessageList";

export const Conversation = () => {
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    // setMessage(message)
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setMessage(input);
  };
  return (
    <div>
      <header>
        <US title="United States" className="flag" />
        <TextButton label="Done" to="/transcript" className="text-button" />
      </header>
      {/* <MessageList messageArray={} /> */}
      <MessageForm onChange={handleInputChange} message={message} />
    </div>
  );
};
