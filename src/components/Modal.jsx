import React from "react";

const Modal = ({ handleOpen }) => {
  return (
    <div className="modal">
      <div>모달 알리미</div>
      <button onClick={handleOpen}>확인</button>
    </div>
  );
};

export default Modal;
