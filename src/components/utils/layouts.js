import "./style.scss";

const Layout1 = ({ title, content }) => {
  return (
    <div className="layout">
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export { Layout1 };
