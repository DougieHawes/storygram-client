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
