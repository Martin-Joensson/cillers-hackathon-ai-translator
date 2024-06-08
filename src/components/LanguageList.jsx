export const LanguageList = () => {
  const languageList = [
    "English",
    "Mandarin",
    "Japanese",
    "Catalan",
    "Swahili",
  ];

  return (
    <div>
      {languageList.map((language, index) => (
        <div key={index}>
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
