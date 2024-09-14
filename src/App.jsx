import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/Applayout";
import Home from "./pages/Home/Home";
import "./index.css";
import ButtonDefaultPage from "./pages/Button/ButtonDefaultPage";
import ButtonFixedBottomPage from "./pages/Button/ButtonFixedBottomPage";
import FromPage from "./pages/Form/FromPage";
import FormDefaultPage from "./pages/Form/FormDefaultPage";
import ButtonPage from "./pages/Button/ButtonPage";
import FormInputStatusPage from "./pages/Form/FormInputStatusPage";
import FormVcodePage from "./pages/Form/FormVcodePage";
import FormButtonFixed from "./components/Form/Childrens/FormButtonFixed";
import FormCheckboxPage from "./pages/Form/FormCheckboxPage";
import FormAccessPage from "./pages/Form/FormAccessPage";
import FormRadioPage from "./pages/Form/FormRadioPage";
import FormSwitchPage from "./pages/Form/FormSwitchPage";
import FormSelectPage from "./pages/Form/FormSelectPage";
import FormTextraPage from "./pages/Form/FormTextraPage";
import FormVerticalPage from "./pages/Form/FormVerticalPage";
import ArticlePage from "./pages/Article/ArticlePage";
import BadgePage from "./pages/Badge/BadgePage";
import FlexPage from "./pages/Flex/FlexPage";
import FooterPage from "./pages/Footer/FooterPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import GridPage from "./pages/Grid/GridPage";
import IconPage from "./pages/Icon/IconPage";
import ListPage from "./pages/List/ListPage";
import SliderPage from "./pages/Slider/SliderPage";
import UploaderPage from "./pages/Uploader/UploaderPage";
import LoadingPage from "./pages/Loading/LoadingPage";
import LoadMorePage from "./pages/LoadMore/LoadMorePage";
import PanelPage from "./pages/Panel/PanelPage";
import PreviewPage from "./pages/Preview/PreviewPage";
import ProgressPage from "./pages/Progress/ProgressPage";
import StepsPage from "./pages/Steps/StepsPage";
import StepHorizonal from "./components/Step/StepHorizonal";
import StepVertical from "./components/Step/StepVertical";
import ActionsheetPage from "./pages/Actionsheet/ActionsheetPage";
import DialogPage from "./pages/Dialog/DialogPage";
import HalfScreenDialogPage from "./pages/HalfScreenDialog/HalfScreenDialogPage";
import MsgPage from "./pages/Msg/MsgPage";
import MsgSuccess from "./components/Msg/Childrens/MsgSuccess";
import MsgWarn from "./components/Msg/Childrens/MsgWarn";
import MsgText from "./components/Msg/Childrens/MsgText";
import MsgTextPrimary from "./components/Msg/Childrens/MsgTextPrimary";
import MsgCustomAreaPreview from "./components/Msg/Childrens/MsgCustomAreaPreview";
import MsgCustomAreaTips from "./components/Msg/Childrens/MsgCustomAreaTips";
import MsgCustomAreaCell from "./components/Msg/Childrens/MsgCustomAreaCell";
import PickerPage from "./pages/Picker/PickerPage";
import ToastPage from "./pages/Toast/ToastPage";
import InformationBarPage from "./pages/InformationBar/InformationBarPage";
import NavbarPage from "./pages/Navbar/NavbarPage";
import TabbarPage from "./pages/Tabbar/TabbarPage";
import SearchPage from "./pages/Search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/button",
        element: <ButtonPage />,
      },
      {
        path: "/button_default",
        element: <ButtonDefaultPage />,
      },
      {
        path: "/form",
        element: <FromPage />,
      },
      {
        path: "/panel",
        element: <PanelPage />,
      },
      {
        path: "/preview",
        element: <PreviewPage />,
      },
      {
        path: "/steps",
        element: <StepsPage />,
      },
    ],
  },
  {
    path: "/button_bottom_fixed",
    element: <ButtonFixedBottomPage />,
  },
  {
    path: "/form_page",
    element: <FormDefaultPage />,
  },
  {
    path: "/form_input_status",
    element: <FormInputStatusPage />,
  },
  {
    path: "/form_vcode",
    element: <FormVcodePage />,
  },
  {
    path: "/form_bottom_fixed",
    element: <FormButtonFixed />,
  },
  {
    path: "/form_checkbox",
    element: <FormCheckboxPage />,
  },
  {
    path: "/form_access",
    element: <FormAccessPage />,
  },
  {
    path: "/form_radio",
    element: <FormRadioPage />,
  },
  {
    path: "/form_switch",
    element: <FormSwitchPage />,
  },
  {
    path: "/form_select",
    element: <FormSelectPage />,
  },
  {
    path: "/form_textarea",
    element: <FormTextraPage />,
  },
  {
    path: "/form_vertical",
    element: <FormVerticalPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/slider",
    element: <SliderPage />,
  },
  {
    path: "/uploader",
    element: <UploaderPage />,
  },
  {
    path: "/article",
    element: <ArticlePage />,
  },
  {
    path: "/badge",
    element: <BadgePage />,
  },
  {
    path: "/flex",
    element: <FlexPage />,
  },
  {
    path: "/footer",
    element: <FooterPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/grid",
    element: <GridPage />,
  },
  {
    path: "/icons",
    element: <IconPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/loadmore",
    element: <LoadMorePage />,
  },
  {
    path: "/progress",
    element: <ProgressPage />,
  },
  {
    path: "/steps_horizonal",
    element: <StepHorizonal />,
  },
  {
    path: "/steps_vertical",
    element: <StepVertical />,
  },
  {
    path: "/actionsheet",
    element: <ActionsheetPage />,
  },

  {
    path: "/half-screen-dialog",
    element: <HalfScreenDialogPage />,
  },
  {
    path: "/dialog",
    element: <DialogPage />,
  },
  {
    path: "/msg",
    element: <MsgPage />,
  },
  {
    path: "/msg_success",
    element: <MsgSuccess />,
  },
  {
    path: "/msg_warn",
    element: <MsgWarn />,
  },
  {
    path: "/msg_text",
    element: <MsgText />,
  },
  {
    path: "/msg_text_primary",
    element: <MsgTextPrimary />,
  },
  {
    path: "/msg_custom_area_preview",
    element: <MsgCustomAreaPreview />,
  },
  {
    path: "/msg_custom_area_tips",
    element: <MsgCustomAreaTips />,
  },
  {
    path: "/msg_custom_area_cell",
    element: <MsgCustomAreaCell />,
  },
  {
    path: "/picker",
    element: <PickerPage />,
  },
  {
    path: "/toast",
    element: <ToastPage />,
  },
  {
    path: "/information-bar",
    element: <InformationBarPage />,
  },
  {
    path: "/navbar",
    element: <NavbarPage />,
  },
  {
    path: "/tabbar",
    element: <TabbarPage />,
  },
  {
    path: "/searchbar",
    element: <SearchPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
