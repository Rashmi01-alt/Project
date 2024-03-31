import React from "react";

const Modal = ({ handleSendEmail }) => {
  return (
    <div className="mb-4">
      <button
        onClick={handleSendEmail}
        className="bg-green-500 text-white px-4 py-2"
      >
        Send Email
      </button>
    </div>
  );
};

export default Modal;

