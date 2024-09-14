import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

const FormPageCop = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg h-screen">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Cấu trúc hình thức</h2>
        <p className="text-gray-500">
          Hiển thị kiểu cấu trúc thông tin của trang biểu mẫu, bao gồm vùng tiêu
          đề/vùng điều khiển/vùng nhắc nhở/vùng thao tác và vùng thông tin phía
          dưới.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Tiêu đề nhóm mẫu
        </h3>
        <div className="space-y-4">
          <Input
            label="ID WeChat"
            inputId="js_input1"
            placeholder="Điền ID WeChat của bạn"
            additionalClasses="border-y"
          />
          <Input
            label="Biệt danh"
            inputId="js_input2"
            placeholder="Điền tên hiệu ID WeChat của bạn"
            additionalClasses="border-y"
          />
          <Input
            label="Số liên lạc"
            inputId="js_input3"
            placeholder="Điền số điện thoại bị ràng buộc"
            additionalClasses="border-y"
          >
            <span className="block text-sm text-gray-500">Phụ đề</span>
          </Input>
        </div>
      </div>

      <div className="text-center mb-3">
        <p className="text-gray-500">Lời nhắc trang biểu mẫu, căn giữa</p>
      </div>

      <div className="flex justify-center mb-3">
        <Button className="bg-gray-200 text-gray-400" disabled>
          Chắc chắn
        </Button>
      </div>

      <div className="text-center">
        <p className="text-gray-500">Lời nhắc trang biểu mẫu, căn giữa</p>
      </div>
    </div>
  );
};

export default FormPageCop;
