const Checkbox = ({ checked, onChange, disabled = false }) => {
  return (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center cursor-pointer
        ${checked ? "bg-green-500" : "bg-gray-200"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => !disabled && onChange && onChange(!checked)}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
