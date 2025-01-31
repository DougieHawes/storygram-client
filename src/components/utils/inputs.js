import "./style.scss";

export const Input1 = ({ name, onChange, placeholder, value }) => {
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
