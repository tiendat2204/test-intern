import { useState } from "react";
import Checkbox from "../../../ui/Checkbox";
import Button from "../../../ui/Button";
const ButtonBottom = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow overflow-auto p-4">
        <p className="text-xl font-light text-gray-700">
          Dolor tempora dolore aperiam fuga necessitatibus? Odio atque tempora
          deleniti voluptates voluptatem. Dolorem earum voluptas blanditiis
          labore quisquam? Quibusdam nesciunt consequatur aliquam ea corrupti
          animi, itaque consequatur neque? At porroSit nemo aliquid quas error
          doloremque Reiciendis ratione repellendus quae sit commodi amet
          architecto? Aut officiis aliquam fugit nulla at necessitatibus Optio
          totam quibusdam laboriosam aperiam libero! Officiis reiciendis Elit
          quaerat sed vero perferendis architecto consequatur. Consequuntur ad
          illum dolore ut accusamus. Cum possimus odit sequi quaerat beatae,
          eveniet. Rerum dolore ipsam quia consectetur iste Veniam mollitia
          dolores tempore? Dolor tempora dolore aperiam fuga necessitatibus?
          Odio atque tempora deleniti voluptates voluptatem. Dolorem earum
          voluptas blanditiis labore quisquam? Quibusdam nesciunt consequatur
          aliquam ea corrupti animi, itaque consequatur neque? At porroSit nemo
          aliquid quas error doloremque Reiciendis ratione repellendus quae sit
          commodi amet architecto? Aut officiis aliquam fugit nulla at
          necessitatibus Optio totam quibusdam laboriosam aperiam libero!
          Officiis reiciendis Elit quaerat sed vero perferendis architecto
          consequatur. Consequuntur ad illum dolore ut accusamus. Cum possimus
          odit sequi quaerat beatae, eveniet. Rerum dolore ipsam quia
          consectetur iste Veniam mollitia dolores tempore?
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 -top-28 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        <div className="p-4 bg-white">
          <div className="flex space-x-4 items-center justify-center flex-col">
            <div className="mb-4">
              <label
                htmlFor="weuiAgreeCheckbox"
                className="flex items-center space-x-2"
              >
                <Checkbox
                  id="weuiAgreeCheckbox"
                  checked={checked}
                  onChange={setChecked}
                />
                <span className="text-sm text-gray-600">
                  Đọc và đồng ý với{" "}
                  <a
                    href="/example/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Điều khoản liên quan
                  </a>
                </span>
              </label>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Button className="py-2 px-4 rounded-md text-white bg-green-500 hover:bg-green-600">
                阅读并同意
              </Button>
              <Button className="py-2 px-10 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700">
                取消
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonBottom;
