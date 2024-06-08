import "./LanguageList.css"

export const LanguageList = () => {
  const languageList = [
    "English",
    "Mandarin",
    "Japanese",
    "Catalan",
    "Swahili",
  ];

  return (
    <div className="languages-container">
      {languageList.map((language, index) => (
        <div key={index} className="language-wrapper">
          <input
            type="radio"
            id={language}
            value={language}
            name="languageList"
          />
          <label htmlFor={language}>{language}</label>
        </div>
      ))}
    </div>
  );
};
