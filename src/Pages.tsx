import { Routes, Route } from 'react-router-dom';

import Main from './screens/Main';
import About from './screens/About';

const Pages = () => {
  return (
  <div className="bg-[#f3f2ee]">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
  )
}

export default Pages;