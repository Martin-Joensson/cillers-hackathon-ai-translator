import { useState } from "react";

import { MessageForm } from "../components/MessageForm";
import "./Conversation.css";
import { TextButton } from "../components/Buttons/TextButton";
import { MessageList } from "../components/MessageList";

export const Conversation = () => {
  return (
    <div>
      <header>
        <img
          className="flag"
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
        />
        <TextButton label="Done" to="/transcript" className="text-button" />
      </header>
      <MessageList messageArray={["hej"]} />
      <MessageForm />
    </div>
  );
};
