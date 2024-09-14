import { FaSpinner } from "react-icons/fa";
import Loading from "./Loading";

const Button = ({ children, className, loading, disabled, ...props }) => {
  return (
    <button
      className={`font-medium py-2 px-4 rounded-md  cursor-pointer relative ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {loading && (
        <Loading size={5} className="text-white" />
      )}
      <span className={`${loading ? "ml-6" : ""}`}>{children}</span>
    </button>
  );
};

export default Button;