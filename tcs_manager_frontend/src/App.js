import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import LoginComponent from './component/LoginComponent'
import HomeComponent from './component/HomeComponent'
import ProfileComponent from './component/ProfileComponent'
import UpdateInfoComponent from './component/UpdateInfoComponent'
import LoadingComponents from './component/LoadingComponent'
import ChangePasswordComponent from './component/ChangePasswordComponent'
import DisabledTestCasesComponent from './component/DisabledTestCasesComponent'
import RegisterComponent from './component/RegisterComponent'

const App = () => {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<HomeComponent />}></Route>
              <Route path="/home" element={<HomeComponent />}></Route>
              <Route path="/login" element={<LoginComponent />}></Route>
              <Route path="/profile" element={<ProfileComponent />}></Route>
              <Route path="/updateinfo" element={<UpdateInfoComponent />}></Route>
              <Route path="/updatepassword" element={<ChangePasswordComponent />}></Route>
              <Route path="/load" element={<LoadingComponents/>}></Route>
              <Route path="/disabled-testcases" element={<DisabledTestCasesComponent/>}></Route>
              <Route path="/user-register" element={<RegisterComponent/>}></Route>
          </Routes>
        </Router>
  );
}

export default App;
