import { ImSpinner2 } from "react-icons/im";

const Loading = ({ size = 4, className = "text-green-500" }) => {
  const sizeClass = `w-${size} h-${size}`;

  return (
    <div className={sizeClass}>
      <ImSpinner2 className={`animate-spin ${className}`} size={size * 4} />
    </div>
  );
};

export default Loading;