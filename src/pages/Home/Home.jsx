import ContainerHome from "../../components/home/ContainerHome";
import TitleHome from "../../components/home/TitleHome";

export default function Home() {
  return (
    <div className=" w-full animate-slideIn  ">
      <TitleHome />
      <ContainerHome />
    </div>
  );
}
