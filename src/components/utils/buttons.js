import "./style.scss";

export const Button1 = ({ text }) => {
  return (
    <button className="button button1" type="submit">
      {text}
    </button>
  );
};

export const Button2 = ({ text }) => {
  return (
    <button className="button button2" type="submit">
      {text}
    </button>
  );
};
