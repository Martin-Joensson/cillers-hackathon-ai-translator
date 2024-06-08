import { Message } from "./Message"

export const MessageList = ({ messageArray }) => {

    console.log(messageArray);
    
  return (
      <div>
          <Message message="Hej" translatedMessage="Hello" user="user1"/>
</div>
  )
}
