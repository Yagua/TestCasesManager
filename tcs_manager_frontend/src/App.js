import './App.css';
import UserComponent from './component/UserComponent'
import TestCaseListComponent from './component/TestCaseListComponent'
import LoginComponent from './component/LoginComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/user" element={<UserComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
