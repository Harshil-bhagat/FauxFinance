import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Mint from './Components/Mint';
import Trade from './Components/Trade';
import Governance from './Components/Governance';
function App() {
  return (
    <div>
    
      <Navbar />
      <BrowserRouter>
          <Route path='/' component={MainBody}/>
          <Route path='/Mint' component={Mint} />
          <Route path='/Trade' component={Trade} />
          <Route path='/Governance' component={Governance}/>
    </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
