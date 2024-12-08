import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      This is about
      <button 
        className="border-[1px] border-black p-2 rounded-[7px] hover:bg-gray-200"
        onClick={() => navigate('/')}
      >
        Back to home
      </button>
    </div>
  )
}

export default About;