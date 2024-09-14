const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <div className="">
      <div
        className={`fixed bottom-0 left-0 w-full h-auto bg-white shadow-lg z-50 transform transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-full opacity-100 rounded-t-2xl" : "max-h-0  opacity-0"
        } overflow-hidden`}
      >
        <div className="pt-2">{children}</div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
