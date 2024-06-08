import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Footer from './component/footer';


import Home from './component/pages/Home'; // Importing Home component
import About from './component/pages/Aboutpage'; // Importing About component
import Discoverpage from './component/pages/Discoverpage'; // Importing Discoverpage component
import Profile from './component/pages/profile'; // Importing Profile component
import Loginpage from './component/pages/loginpage'; // Importing Profile component
import Settingpage from './component/pages/settingpage'; // Importing Profile component
import Gigpage from './component/pages/gigpage'; // Importing Profile component
import Giginfopage from './component/pages/giginfopage'; // Importing Profile component
import Editgig from './component/pages/editgigpage'; // Importing Profile component


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<About />} />
          <Route path="/discoverpage" element={<Discoverpage />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/loginpage" element={<Loginpage />} /> 
          <Route path="/settingpage" element={<Settingpage />} /> 
          <Route path="/gigpage" element={<Gigpage />} /> 
          <Route path="/giginfopage" element={<Giginfopage />} /> 
          <Route path="/editgig" element={<Editgig />} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
