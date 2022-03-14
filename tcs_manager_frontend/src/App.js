import './App.css';

import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import UserComponent from './component/UserComponent'
import TestCaseListComponent from './component/TestCaseListComponent'
import LoginComponent from './component/LoginComponent'
import { UserContext } from './helper/Context'

function App() {
    let [userId, setUserId] = useState()
    let [loggedIn, setLoggedIn] = useState(false)

  return (
      <UserContext.Provider value = {{userId, setUserId, loggedIn, setLoggedIn}}>
        <Router>
          <Routes>
              <Route path="/login" element={<LoginComponent />}></Route>
              <Route path="/user" element={<UserComponent />}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
