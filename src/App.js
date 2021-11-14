import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile/Profile'
import { useContext, useEffect } from 'react';
import Seacher from './store/SearchContext';
import { AuthContext, FireBaseContext } from './store/FireBaseContext';
import Create from './Components/Create/Create'
import Verify from './Components/Verifier/Verifier'
function App() {
const {setUser} = useContext(AuthContext)
const {firebase} = useContext(FireBaseContext)
 useEffect(() => {
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })}
)
  return (
    <div>

<Seacher>
    
      <Router basename="">
        <Route exact path="/"> <Home/></Route>
        {/* <Redirect to='/signup' path="/olx"> </Redirect> */}
        <Route path="/signup"><Signup /></Route>
        <Route path="/verify"><Verify /></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="/login"><Login></Login></Route>
        <Route path="/create"><Create></Create></Route>
        {/* <Route path="/view"><ViewPost></ViewPost> </Route> */}
        {/* <Route path="/search"><SearchResult></SearchResult></Route>      */}
        {/* <Route path="/myproducts"><P1></P1></Route> */}
        
      </Router>   </Seacher>   
    </div>
  );
}

export default App;
