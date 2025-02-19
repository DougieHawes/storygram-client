import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./style.scss";

export const Input1 = ({ label, name, onChange, type = "text", value }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label className="input-label">{label}</label>
      <div className="input-container">
        <input
          className="input"
          name={name}
          onChange={onChange}
          type={type === "password" && !showPassword ? "password" : "text"}
          value={value}
        />
        {type === "password" && (
          <div className="password-toggle">
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} size={42} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} size={42} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export const Input2 = ({ name, onChange, placeholder, value }) => {
  return (
    <input
      className="input"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export const Input3 = ({ name, onChange, placeholder, value }) => {
  return (
    <textarea
      className="input"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
