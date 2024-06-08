import { LanguageList } from "../components/LanguageList"
import { Searchbar } from "../components/Searchbar"
import { TextButton } from "../components/Buttons/TextButton";
// import { BtnStartInterview } from "../components/Buttons/TextButton";
import "./Homepage.css"

export const Homepage = () => {
  return (
    <div>
      <Searchbar />
      <LanguageList />
      <TextButton label="Start Interview" to="/conversation" className="text-button"/>
      {/* <BtnStartInterview text="Start Interview" /> */}
    </div>
  );
}
