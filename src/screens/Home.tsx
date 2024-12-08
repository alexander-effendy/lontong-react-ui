import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      This is home
      <button 
        className="border-[1px] border-black p-2 rounded-[7px] hover:bg-gray-200"
        onClick={() => navigate('/about')}
      >
        Go to about
      </button>
    </div>
  )
}

export default Home;