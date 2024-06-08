import { LanguageList } from "../components/LanguageList"
import { Searchbar } from "../components/Searchbar"
import { TextButton } from "../components/Buttons/TextButton";
import "./Homepage.css"

export const Homepage = () => {
  return (
    <div className="container-homepage">
      <Searchbar />
      <LanguageList />
      <TextButton label="Start Interview" to="/conversation" className="text-button"/>
    </div>
  );
}
