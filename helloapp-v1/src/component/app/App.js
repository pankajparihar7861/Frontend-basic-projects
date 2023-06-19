 
import './App.css';
import HomeComponent from '../other/Home';
import NavigationComponent from '../other/Navigation';
import FooterComponent from '../other/Footer';

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
  <HomeComponent imgList={imagesList} />
 <FooterComponent />
 </div>
 );
}

export default App;

