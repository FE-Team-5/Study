/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import PasswordInput from "../component/PasswordInput";
import PasswordSetting from "../component/PasswordSetting";
import Strength from "../component/Strength";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [setting, setSetting] = useState({
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordSetting(newPassword);
    checkPasswordStrength(newPassword);
  };
  const checkPasswordSetting = (pwd) => {
    setSetting({
      includeUppercase: /[A-Z]/.test(pwd),
      includeLowercase: /[a-z]/.test(pwd),
      includeNumbers: /[0-9]/.test(pwd),
      includeSymbols: /[!@#$%^&*()_+[\]{}|;:',.<>/?`~]/.test(pwd),
    });
  };
  const checkPasswordStrength = (pwd) => {
    let strengthCounter = 0;
    if (/[A-Z]/.test(pwd)) strengthCounter++;
    if (/[a-z]/.test(pwd)) strengthCounter++;
    if (/[0-9]/.test(pwd)) strengthCounter++;
    if (/[!@#$%^&*()_+[\]{}|;:',.<>/?`~]/.test(pwd)) strengthCounter++;

    const strengthLevels = ["약함", "보통", "강함", "매우 강함"];
    setStrength(strengthLevels[strengthCounter - 1] || "약함");
  };
  return (
    <>
      <h2 className="title">password Generator</h2>
      <div>
        <PasswordInput
          password={password}
          onPasswordChange={handlePasswordChange}
        />
        <PasswordSetting setting={setting} />
        <Strength strength={strength} />
      </div>
    </>
  );
}

export default App;
