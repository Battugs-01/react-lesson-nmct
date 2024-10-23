const Modal = ({ children, onClose }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-10 "
        onClick={onClose}
      />
      <dialog
        className="border-none rounded-md shadow-md p-0 overflow-hidden z-10"
        open={true}
      >
        {children}
      </dialog>
    </>
  );
};

export default Modal;
