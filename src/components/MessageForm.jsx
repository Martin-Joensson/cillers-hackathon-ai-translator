import { GrSend } from "react-icons/gr";
import "./MessageForm.css";
import { useMessageStore } from "../stores/useMessageStore.jsx";

export const MessageForm = () => {
  const { userInput, setUserInput } = useMessageStore();

  return (
    <form
      className="message-form"
      onSubmit={(e) => {
        e.preventDefault();
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
