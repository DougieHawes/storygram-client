import "./style.scss";

export const Button1 = ({ text }) => {
  return (
    <button className="button" type="submit">
      {text}
    </button>
  );
};
