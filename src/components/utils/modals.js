import { RxCross1 } from "react-icons/rx";

const Modal1 = ({ onCloseClick }) => {
  return (
    <div>
      <div onClick={onCloseClick}>
        <RxCross1 />
      </div>
      <div className="modal-body">Modal1</div>
    </div>
  );
};

export { Modal1 };
