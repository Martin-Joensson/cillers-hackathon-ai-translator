import { GrSend } from "react-icons/gr";

import { useMessageStore } from "../stores/useMessageStore.jsx";

import "./MessageForm.css";

export const MessageForm = () => {
  const { sendMessage, userInput, setUserInput } = useMessageStore();

  return (
    <form
      className="message-form"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage()
      }}
    >
      <label>Send Message </label>
      <input
        type="text"
        placeholder="Write your mess age here"
        id="messageForm"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button type="submit" className="sendBtn">
        <GrSend />
      </button>
    </form>
  );
};
