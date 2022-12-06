const Button1 = ({ text = "submit", onClick }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
);

export { Button1 };
