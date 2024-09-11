/* eslint-disable react/prop-types */
export default function PasswordInput({ password, onPasswordChange }) {
  return (
    <div className="inputwrap">
      <label></label>
      <input
        className="inputpassword"
        type="text"
        value={password}
        onChange={onPasswordChange}
      />
    </div>
  );
}
