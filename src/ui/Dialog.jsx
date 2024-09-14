const Dialog = ({
  title,
  content,
  removeCancel,
  onCancel,
  onConfirm,
  cancelText = "Hủy",
  confirmText = "Xác nhận",
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-80 rounded-lg shadow-lg  animate-fadeIn duration-700">
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{content}</p>
        </div>
        <div className="flex border-t divide-x">
          <button
            onClick={onCancel}
            className="flex  w-full items-center p-4  group relative justify-center text-center"
          >
          <span className={`${removeCancel ? 'text-gray-500' : 'text-red-500'}`}>{cancelText}</span>

            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
          </button>
          <button
            onClick={onConfirm}
            className="flex w-full justify-center items-center p-4  group relative"
          >
              <span className="text-[#576b95]">{confirmText}</span>

            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
