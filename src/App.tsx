import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx/Sidebar';
import Pages from "./Pages"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Pages />
    </BrowserRouter>
  )
}

export default App
