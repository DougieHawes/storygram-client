import "./style.scss";

export const Route1 = ({ content, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export const Route2 = ({ content }) => {
  return <div>{content}</div>;
};

export const Route3 = ({ content }) => {
  return <div>{content}</div>;
};
