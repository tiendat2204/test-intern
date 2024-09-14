import { Link } from "react-router-dom";

const links = [
  { path: "/form_page", text: "Đi tới Form Page" },
  { path: "/form_input_status", text: "Đi tới Form Input Status" },
  { path: "/form_vcode", text: "Đi tới Form VCode" },
  { path: "/form_bottom_fixed", text: "Đi tới Form Bottom Fixed" },
  { path: "/form_checkbox", text: "Đi tới Form Checkbox" },
  { path: "/form_access", text: "Đi tới Form Access" },
  { path: "/form_radio", text: "Đi tới Form Radio" },
  { path: "/form_switch", text: "Đi tới Form Switch" },
  { path: "/form_select", text: "Đi tới Form Select" },
  { path: "/form_textarea", text: "Đi tới Form Textarea" },
  { path: "/form_vertical", text: "Đi tới Form Vertical" },
];

const FormContainer = () => {
  return (
    <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2 animate-slideIn">
      <div className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-green-800 hover:underline p-10 bg-green-200 group"
          >
            <span className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out block w-full">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FormContainer;