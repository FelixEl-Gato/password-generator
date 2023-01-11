import { useState } from "react";
import { letters, numbers, symbols, copyToClipboard } from "./helper";
import "./App.css";
import { GeneratorCheck, GeneratorNumber } from "./components";

export const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    let charSet = "";

    if (includeUppercase) charSet += letters.toUpperCase();
    if (includeLowercase) charSet += letters;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    setPassword(createPassword(charSet));
  };

  const createPassword = (charSet) => {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const character = Math.floor(Math.random() * charSet.length);
      password += charSet.substring(character, character + 1);
    }
    return password;
  };

  const handleCopyPassword = () => {
    copyToClipboard(password);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">Password Generator</h2>
          <div className="generator__password">
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className="copy__btn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>
          <GeneratorNumber
            id={"password-strength"}
            name={"Password Length"}
            onHandle={setIncludeUppercase}
          />
          <GeneratorCheck
            id={"uppercase-letters"}
            name={"Include Uppercase Letters"}
            onHandle={setIncludeUppercase}
          />
          <GeneratorCheck
            id={"lowercase-letters"}
            name={"Include Lowercase Letters"}
            onHandle={setIncludeLowercase}
          />
          <GeneratorCheck
            id={"include-numbers"}
            name={"Include Numbers"}
            onHandle={setIncludeNumbers}
          />
          <GeneratorCheck
            id={"include - symbols"}
            name={"Include Symbols"}
            onHandle={setIncludeSymbols}
          />
          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Button
          </button>
        </div>
      </div>
    </div>
  );
};
