import { useNavigate } from "react-router";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sidebar from "@/components/sidebar/Sidebar";
import Statistics from "@/components/Statistics";
import Info from "@/components/info/Info";

const Main = () => {
  const navigate = useNavigate();

  return (
    <MaxWidthWrapper className="h-screen bg-[#f2f0f0] pt-[70px]">
      <div className="w-full h-full flex gap-5 relative">
        {/* This is Main
        <button
          className="border-[1px] border-black p-2 rounded-[7px] hover:bg-gray-200"
          onClick={() => navigate("/about")}
        >
          Go to about
        </button> */}
        <Sidebar />
        <section className="fixed gap-[20px] left-[140px] top-[20px] h-[calc(100vh-40px)] right-[20px] flex">
          <Statistics />
          <Info />
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default Main;