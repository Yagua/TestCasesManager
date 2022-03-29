import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import LoginComponent from './component/LoginComponent'
import HomeComponent from './component/HomeComponent'
import ProfileComponent from './component/ProfileComponent'
import UpdateInfoComponent from './component/UpdateInfoComponent'
import ChangePasswordComponent from './component/ChangePasswordComponent'
import DisabledTestCasesComponent from './component/DisabledTestCasesComponent'
import RegisterComponent from './component/RegisterComponent'
import TestCaseComponent from './component/TestCaseComponent'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomeComponent />}></Route>
          <Route exact path="/home" element={<HomeComponent />}></Route>
          <Route exact path="/login" element={<LoginComponent />}></Route>
          <Route path="/profile" element={<ProfileComponent />}></Route>
          <Route path="/updateinfo" element={<UpdateInfoComponent />}></Route>
          <Route path="/updatepassword" element={<ChangePasswordComponent />}></Route>
          <Route path="/disabled-testcases" element={<DisabledTestCasesComponent />}></Route>
          <Route path="/user-register" element={<RegisterComponent />}></Route>
          <Route path="/testcase" element={<TestCaseComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
