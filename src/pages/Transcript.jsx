import { TextButton } from "../components/Buttons/TextButton";
import "./Transcript.css"

export const Transcript = (setUserInput) => {

  const handleStartNewInterview = () => {
    // Clear the input-data
    setUserInput("");
}
  return (
    <div className="transcript-container"
    >
      <p>Transcript</p>
        <TextButton label="Start new interview" to="/" className="text-button" onClick={handleStartNewInterview} />
    </div>
  )
}

