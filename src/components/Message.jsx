import "./Message.css"

export const Message = ({ message, translatedMessage, user }) => {
  // We need the message.
  // Who sent the message,
  //Translated message.

    return <div className={user}>
        <p>{message}</p>
        <p>{translatedMessage</p>
      
  </div>;
}
