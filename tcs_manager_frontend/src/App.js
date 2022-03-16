import './App.css';

import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import LoginComponent from './component/LoginComponent'
import HomeComponent from './component/HomeComponent'
import ProfileComponent from './component/ProfileComponent'
// import UserContext from './helper/Context'

import UpdateInfoComponent from './component/UpdateInfoComponent'

const App = () => {
    // let [userId, setUserId] = useState()
    // let [loggedIn, setLoggedIn] = useState(false)
    // <UserContext.Provider value = {{userId, setUserId, loggedIn, setLoggedIn}}>
    // </UserContext.Provider>

  return (
        <Router>
          <Routes>
              <Route path="/" element={<HomeComponent />}></Route>
              <Route path="/home" element={<HomeComponent />}></Route>
              <Route path="/login" element={<LoginComponent />}></Route>
              <Route path="/profile" element={<ProfileComponent />}></Route>
              <Route path="/updateinfo" element={<UpdateInfoComponent />}></Route>
          </Routes>
        </Router>
  );
}

export default App;
