import { useNavigate } from "react-router";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sidebar from "@/components/Sidebar.tsx/Sidebar";

const Main = () => {
  const navigate = useNavigate();

  return (
    <MaxWidthWrapper className="h-screen relative bg-[#ebe7e6] pt-[70px]">
      <div className="w-full h-full flex gap-5">
        {/* This is Main
        <button
          className="border-[1px] border-black p-2 rounded-[7px] hover:bg-gray-200"
          onClick={() => navigate("/about")}
        >
          Go to about
        </button> */}
        <Sidebar />

      </div>
    </MaxWidthWrapper>
  );
};

export default Main;