import { Message } from "./Message"

export const MessageList = ({ messageArray }) => {

    console.log(messageArray);
    
  return (
    <div>
      <Message message="Hej" translatedMessage="Hello" user="user1" />
      <Message message="Nemen hej" translatedMessage="Well hello." user="user2" />
    </div>
  );
}
