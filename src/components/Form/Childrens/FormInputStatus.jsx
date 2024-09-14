import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useState } from "react";
const FormInputStatus = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (!value) {
      setError("Số lượng không được để trống");
    } else if (!/^\d+$/.test(value)) {
      setError("Số lượng phải là số");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg h-full animate-slideIn ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2 ">Trạng thái hộp đầu vào</h2>
        <p className="text-gray-500  md:text-base text-sm">
          Bạn có thể trải nghiệm trạng thái phản hồi khi nhập biểu mẫu. Có hai
          loại thông báo lỗi được hiển thị. Một là khi có nhiều hơn một mục đầu
          vào. Sử dụng thanh thủ thuật trên cùng để báo cáo thông báo lỗi và
          thông báo nguyên nhân lỗi. Trang tập trung vào vùng lỗi tương ứng và
          nội dung được đánh dấu. màu đỏ. Vị trí còn lại nằm ở vị trí của mục
          đầu vào hiện tại. Báo cáo lỗi được áp dụng khi chỉ có một mục đầu vào
          và người dùng tập trung chủ yếu vào khu vực đầu vào.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-light text-gray-800 mb-2">
          Tiêu đề nhóm mẫu
        </h3>
        <div className="space-y-4">
          <Input
            label="Số thẻ"
            inputId="js_input1"
            placeholder="Vui lòng nhập thẻ gồm 16 số"
            additionalClasses="border-y"
          />
          <Input
            label="Chủ thẻ"
            inputId="js_input2"
            placeholder="Vui lòng nhập tên chủ thẻ"
            additionalClasses="border-y"
          />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-light text-gray-800 mb-2">
          Lỗi biểu mẫu: lỗi ở vị trí mục hiện tại
        </h3>
        <div className="space-y-4">
          <div className="border-y">
            <label
              htmlFor="js_input1"
              className="text-gray-700 font-medium p-2"
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="w-24">
                  <span>Số lượng</span>
                </div>
                <div className="w-full">
                  <input
                    id="js_input1"
                    className="w-full p-2 border border-none rounded-md focus:outline-none"
                    placeholder="Vui lòng nhập số tiền"
                    value={amount}
                    type="number"
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
            </label>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-light text-gray-800 mb-2">
          Biểu mẫu chỉ đọc và chuyển sang màu xám.
        </h3>
        <div className="space-y-4">
          <Input
            label="Email"
            inputId="js_input1"
            placeholder="12345"
            readOnly={true}
            additionalClasses="border-y"
          />
          <Input
            label="WeUI"
            inputId="js_input1"
            placeholder="Weui"
            readOnly={true}
            additionalClasses="border-y"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="bg-gray-200 text-gray-400" disabled>
          Chắc chắn
        </Button>
      </div>
    </div>
  );
};

export default FormInputStatus;
