import './App.css';

import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import SearchPage from './SearchPage'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    //BEM
    <div className="app">
    
  <Router>
    <Header/>


    <Switch>
     <Route path='/Search'>
        <SearchPage/>
     </Route>
      <Route path='/'> 
         <Home/>
      </Route>
    </Switch>
    
    <Footer/>
  </Router>

   
    


    </div>
  );
}

export default App;
