// import { TextButton } from "../components/TextButton"
import { US } from "country-flag-icons/react/3x2";

import { MessageForm } from "../components/MessageForm";
import "./Conversation.css";
import { TextButton } from "../components/Buttons/TextButton";

export const Conversation = () => {
  return (
    <div>
      <header>
        <US title="United States" className="flag" />
        <TextButton label="Done" to="/transcript" className="text-button"/>
      </header>
      <MessageForm />
    </div>
  );
};
