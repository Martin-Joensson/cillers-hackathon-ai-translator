import { useState, useEffect } from "react";
import { LoadingDots } from "./LoadingDots";
import "./Message.css";



export const Message = ({ message, translatedMessage, user }) => {
    const [isTranslated, setIsTranslated] = useState(false);
  // We need the message,
  // Who sent the message,
  // and Translated message.

  // The user influences the styling.
  // everytime you send one message or one voiceclip it changes the user.

  return (
    <div className={user}>
          <p>{message}</p>
          {isTranslated ? <p>{translatedMessage}</p> : <LoadingDots />}
    </div>
  );
};
