import { GrSend } from "react-icons/gr";
import "./MessageForm.css";

export const MessageForm = () => {
  return (
    <form className="message-form" onSubmit={(e) => {e.preventDefault()}}>
      <label>Send Message </label>
      <input
        type="text"
        placeholder="Write your message here"
        id="messageForm"
      />
      <button type="submit" className="sendBtn">
        <GrSend />
      </button>
    </form>
  );
};
