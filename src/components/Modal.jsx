import "./Modal.css";

function Modal({ question }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={() => console.log("Cancel")}
          >
            Cancel
          </button>{" "}
          <button className="btn" onClick={() => console.log("Confirm")}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
