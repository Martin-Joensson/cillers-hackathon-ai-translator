import { useState, useEffect } from "react";
// import { LoadingDots } from "./LoadingDots";

//         <LoadingDots />
      
import { useMessageStore } from "../stores/useMessageStore";
import "./Message.css";

export const Message = ({ message, translatedMessage, user }) => {
  // const [isTranslated, setIsTranslated] = useState(false);
  // const {  } =  useMessageStore();
  // We need the message,
  // Who sent the message,
  // and Translated message.

  // useEffect(() => {
  //   if (translatedMessage) setIsTranslated(true);
  // }, [translatedMessage]);

  // The user influences the styling.
  // everytime you send one message or one voiceclip it changes the user.

  return (
    <div className={user}>
      <div className="messageWrapper">
        <p>{message}</p>
      </div>
        <div className="translatedBox">
          <p>{translatedMessage}</p>
        </div>
    
    </div>
  );
};
