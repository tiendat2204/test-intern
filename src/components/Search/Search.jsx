import { useState, useRef, useEffect } from "react";
import { IoIosSearch, IoIosArrowBack, IoIosCamera } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const Search = () => {
  const [activeVariant, setActiveVariant] = useState(0);
  const [searchTexts, setSearchTexts] = useState(["", "", "", ""]);
  const [focusedVariant, setFocusedVariant] = useState(null);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (focusedVariant !== null) {
      inputRefs[focusedVariant].current?.focus();
    }
  }, [focusedVariant]);

  const handleFocus = (index) => {
    setFocusedVariant(index);
  };

  const handleBlur = () => {
    if (searchTexts[focusedVariant] === "") {
      setFocusedVariant(null);
    }
  };

  const handleCancel = (index) => {
    const newSearchTexts = [...searchTexts];
    newSearchTexts[index] = "";
    setSearchTexts(newSearchTexts);
    setFocusedVariant(null);
  };

  const handleTextChange = (e, index) => {
    const newSearchTexts = [...searchTexts];
    newSearchTexts[index] = e.target.value;
    setSearchTexts(newSearchTexts);
  };

  const searchVariants = [
    focusedVariant === 0 ? (
      <div className="bg-white p-2" key="variant-1-focused">
        <div className="flex items-center space-x-2">
          <IoIosArrowBack
            className="text-gray-500"
            onClick={() => handleCancel(0)}
          />
          <div className="flex-grow relative">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              ref={inputRefs[0]}
              type="text"
              placeholder="微信 搜索"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 outline-none text-sm"
              value={searchTexts[0]}
              onChange={(e) => handleTextChange(e, 0)}
              onBlur={handleBlur}
            />
            {searchTexts[0] && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2  px-1">
                <IoCloseCircle className="text-xl text-gray-400" />
              </div>
            )}
          </div>
          <button
            className="text-blue-300 text-sm"
            onClick={() => handleCancel(0)}
          >
            取消
          </button>
        </div>
      </div>
    ) : (
      <div
        className="bg-black bg-opacity-35 p-3"
        key="variant-1"
        onClick={() => handleFocus(0)}
      >
        <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2">
          <IoIosSearch className="text-gray-500 mr-2" />
          <div className="text-gray-400 text-sm">搜索</div>
        </div>
      </div>
    ),

    focusedVariant === 1 ? (
      <div className="bg-white p-2" key="variant-2-focused">
        <div className="flex items-center space-x-2">
          <IoIosArrowBack
            className="text-gray-500"
            onClick={() => handleCancel(1)}
          />
          <div className="flex-grow relative">
            <input
              ref={inputRefs[1]}
              type="text"
              placeholder="微信 搜索"
              className="w-full pl-3 pr-3 py-2 rounded-md bg-background-primary outline-none text-sm"
              value={searchTexts[1]}
              onChange={(e) => handleTextChange(e, 1)}
              onBlur={handleBlur}
            />
            {searchTexts[1] && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2  px-1">
                <IoCloseCircle className="text-xl text-gray-400" />
              </div>
            )}
          </div>
          <button
            className="text-blue-300 text-sm"
            onClick={() => handleCancel(1)}
          >
            取消
          </button>
        </div>
      </div>
    ) : (
      <div
        className="bg-white p-3"
        key="variant-2"
        onClick={() => handleFocus(1)}
      >
        <div className="flex items-center justify-center bg-background-primary rounded-lg px-4 py-2 ">
          <IoIosSearch className="text-gray-500 mr-2" />
          <div className="text-gray-400 text-sm">搜索</div>
        </div>
      </div>
    ),

    <div className="bg-white p-3 flex items-center space-x-2" key="variant-3">
      <IoIosArrowBack className="text-gray-500" />
      <div className="flex-grow">
        <input
          type="text"
          placeholder="搜索"
          className="w-full outline-none text-sm border rounded-md p-2"
          value={searchTexts[2]}
          onChange={(e) => handleTextChange(e, 2)}
        />
      </div>
      <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">
        搜索
      </button>
      <button className="text-blue-300 text-sm" onClick={() => handleCancel(2)}>
        取消
      </button>
    </div>,

    <div className="bg-white p-3" key="variant-4">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
        <IoIosSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="搜索"
          className="bg-transparent flex-grow outline-none text-sm"
          value={searchTexts[3]}
          onChange={(e) => handleTextChange(e, 3)}
        />
        <IoIosCamera className="text-gray-500 text-2xl ml-2" />
      </div>
    </div>,
  ];

  return (
    <div className="w-full py-2 mx-auto space-y-10">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Search</span>
      </div>
      {searchVariants.map((variant, index) => (
        <div key={index} onClick={() => setActiveVariant(index)}>
          {variant}
        </div>
      ))}
    </div>
  );
};

export default Search;
