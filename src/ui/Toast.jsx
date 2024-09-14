import { useToast } from "../hook/useToast";

const Toast = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-40 h-auto">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black/90 text-white px-1 py-2 rounded-xl shadow-md mb-2 flex items-center justify-between animate-fade-in flex-col"
        >
          {toast.icon && <div className="mb-2">{toast.icon}</div>}
          <div className="text-center">{toast.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
