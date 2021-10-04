import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Empolyee from './components/Empolyee/Empolyee';

import Notfound from './components/Notfound/Notfound';
import Footer from './components/Footer/Footer';
import Navbarr from './components/Navbarr/Navbarr';
import Service from './components/Service/Service';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr></Navbarr>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/empolyee">
            <Empolyee></Empolyee>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
