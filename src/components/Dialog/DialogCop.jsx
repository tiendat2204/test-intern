import { useState } from "react";
import Button from "../../ui/Button";
import Dialog from "../../ui/Dialog";

const DialogCop = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-white h-screen animate-slideIn">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Action Sheet</span>
      </div>
      <div className="w-full text-center flex gap-3 justify-center items-center">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className={"bg-black bg-opacity-10 text-lg"}
        >
          Dialog 1
        </Button>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className={"bg-black bg-opacity-10 text-lg"}
        >
          Dialog 2
        </Button>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className={"bg-black bg-opacity-10 text-lg"}
        >
          Dialog 3
        </Button>
      </div>

      {isDialogOpen && (
        <Dialog
          title="Xác nhận thao tác"
          removeCancel={true}
          content="Bạn có chắc chắn muốn thực hiện hành động này?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default DialogCop;
