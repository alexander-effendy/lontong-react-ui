import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Pages from "./Pages"

import './index.css';
import './scrolling.css';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Pages />
    </BrowserRouter>
  )
}

export default App
