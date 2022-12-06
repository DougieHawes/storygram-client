const Input1 = ({ type = "text", label }) => (
  <>
    <label>{label}</label>
    <input className="input input1" type={type} />
  </>
);

const Input2 = ({ label }) => (
  <>
    <label>{label}</label>
    <textarea className="input input2" />
  </>
);

export { Input1, Input2 };
