import { useState } from "react";
import { letters, numbers, symbols, copyToClipboard } from "./helper";
import "./App.css";

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
          <div className="form-group">
            <label htmlFor="password-strength">Password Length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              id="password-strength"
              name="password-strength"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
            <input
              defaultValue={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Include Lowercase Letters</label>
            <input
              defaultValue={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              defaultValue={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              defaultValue={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            />
          </div>

          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Button
          </button>
        </div>
      </div>
    </div>
  );
};
