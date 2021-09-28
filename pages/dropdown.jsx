import { useState } from "react";

const Languages = ["C++", "JavaScript", "Python", "Java", "Php"];

function Dropdown() {
  const [language, setLanguage] = useState(Languages[0]);
  return (
    <div>
      <h1>Dropdown</h1>
      <hr />
      <select onChange={e => setLanguage(e.target.value)}>
        {Languages.map(language => (
          <option value={language} key={language}>
            {language}
          </option>
        ))}
      </select>
      <h1>Selected Language: {language}</h1>
    </div>
  );
}

export default Dropdown;
