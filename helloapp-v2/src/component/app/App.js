import logo from '../../logo.svg';
import './App.css';
import HomeComponent from '../other/Home';
import NavigationComponent from '../other/Navigation';
import FooterComponent from '../other/Footer';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FacilitiesComponent from '../other/Facilities';
import OfferComponent from '../other/Offer';
import SignUpComponent from '../other/SignUp';

function App() {

  let imagesList = [
    "https://picsum.photos/id/2/150/150",
    "https://picsum.photos/id/7/150/150",
    "https://picsum.photos/id/5/150/150",
    "https://picsum.photos/id/9/150/150"
  ];

  return (
    <div className="App">
      <NavigationComponent />

      <Router>
          <Routes>
              <Route path="/" element={<HomeComponent imglist={imagesList}/>} />
              <Route path="/facilities" element={<FacilitiesComponent />} />
              <Route path="/contact" element={<HomeComponent />} />
              <Route path="/offer" element={<OfferComponent />} />
              <Route path="/signup" element={<SignUpComponent />} />
          </Routes>
      </Router>


      <FooterComponent />
    </div>
  );
}

export default App;
