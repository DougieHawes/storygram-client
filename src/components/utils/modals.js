import { RxCross1 } from "react-icons/rx";

import { SignupForm, SigninForm, NewpostForm } from "./forms";

const Modal1 = ({ onCloseClick, modalTitle, content }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">{modalTitle}</h2>
          <div className="modal-close" onClick={onCloseClick}>
            <RxCross1 />
          </div>
        </div>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

const SignupModal = ({ onCloseClick }) => (
  <Modal1
    onCloseClick={onCloseClick}
    modalTitle="signup"
    content={<SignupForm />}
  />
);

const SigninModal = ({ onCloseClick, content }) => (
  <Modal1
    onCloseClick={onCloseClick}
    modalTitle="signin"
    content={<SigninForm />}
  />
);

const NewPostModal = ({ onCloseClick, content }) => (
  <Modal1
    onCloseClick={onCloseClick}
    modalTitle="newpost"
    content={<NewpostForm />}
  />
);

export { SignupModal, SigninModal, NewPostModal };
