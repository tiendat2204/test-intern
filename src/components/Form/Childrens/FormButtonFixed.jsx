import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { IoIosInformationCircleOutline } from "react-icons/io";

const FormButtonFixed = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow w-full p-6 bg-white rounded-lg overflow-y-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-4">Mã xác minh</h2>
          <p className="text-gray-500">Xác minh kiểu số điện thoại di động.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2 overflow-x-hidden">
            Tiêu đề nhóm mẫu
          </h3>
          <div className="space-y-4">
            {[...Array(9)].map((_, index) => (
              <Input
                key={index}
                label="PhoneNumber"
                inputId={`Sdt${index}`}
                placeholder="01251512"
                readOnly
                additionalClasses="border-y"
                icon={
                  <IoIosInformationCircleOutline className="size-9 cursor-pointer" />
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-4  border-gray-200 fixed bottom-0 left-0 shadow-lg">
        <div className="flex justify-center mb-3 flex-col w-full items-center gap-5">
          <label
            htmlFor="weuiAgreeCheckbox"
            className="flex items-center space-x-2"
          >
            <input
              id="weuiAgreeCheckbox"
              type="checkbox"
              className="form-checkbox h-5 w-5 bg-green-500 rounded-full"
            />
            <span className="text-sm text-gray-600">
              Đọc và đồng ý với{" "}
              <a
                href="/example/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Các quy định và bản quyền
              </a>
            </span>
          </label>
          <div className="flex space-x-4 mt-5">
            <Button className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Chắc chắn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormButtonFixed;
