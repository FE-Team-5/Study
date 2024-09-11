export default function PasswordSetting({ setting }) {
  return (
    <div className="checkwrap">
      <label className="checklabel">
        <input type="checkbox" checked={setting.includeUppercase} readOnly />
        Include Uppercase Letters
      </label>
      <label className="checklabel">
        <input type="checkbox" checked={setting.includeLowercase} readOnly />
        Include Lowercase Letters
      </label>
      <label className="checklabel">
        <input type="checkbox" checked={setting.includeNumbers} readOnly />
        Include Numbers
      </label>
      <label className="checklabel">
        <input type="checkbox" checked={setting.includeSymbols} readOnly />
        Include Symbols
      </label>
    </div>
  );
}
