import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <MaxWidthWrapper>
      <div className="w-full h-full flex flex-col items-center justify-center">
        This is about
        <button
          className="border-[1px] border-black p-2 rounded-[7px] hover:bg-gray-200"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
