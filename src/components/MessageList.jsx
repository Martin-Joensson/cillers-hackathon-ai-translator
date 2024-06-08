import { useMessageStore } from "../stores/useMessageStore.jsx";
import { Message } from "./Message";

export const MessageList = ({ messageArray }) => {
  console.log(messageArray);
  const { messages } = useMessageStore();

  return (
    <div>
      {messages.map((message, index) => (
        <>
          <Message
            key={index}
            message="Hej"
            translatedMessage="Hello"
            user="user1"
          />
        </>
      ))}
      <Message message="Hej" translatedMessage="Hello" user="user1" />
    </div>
  );
};
