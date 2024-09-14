const Input = ({ label, inputId, placeholder, additionalClasses, disabled, readOnly, value, button, icon }) => {
    return (
      <div className={`border-y ${additionalClasses}`}>
        <label
          htmlFor={inputId}
          className="text-gray-700 font-medium p-2"
        >
          <div className="flex items-center space-x-4 w-full">
          <div className="inline-block whitespace-nowrap">
  <span>{label}</span>
</div>
            <div className="flex w-full">
              <input
                id={inputId}
                className="w-full p-2 border border-none rounded-md focus:outline-none"
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                value={value}
              />
              {button && (
                <div className="ml-2">
                  {button}
                </div>
              )}
              {!button && icon && (
                <div className="ml-2">
                  {icon}
                </div>
              )}
            </div>
          </div>
        </label>
      </div>
    );
  };
  
  export default Input;