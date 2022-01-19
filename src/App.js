import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Addincome from './Addincome/Addincome';
import Addexpense from './Addexpense';
import { Link } from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
import Transactions from './Transactions';
import Edit from './Edit';
import Trackmoney from './Trackmoney';
import TrackedResults from './TrackedResults';

function App() {

  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content" >
            <Topbar />
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <Link class="nav-link" to="/Home">
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <span>Home</span></Link>
                <Link class="nav-link" to="/Dashboard">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></Link>
                <Link class="nav-link " to="/Transactions" 
                 >
                 <i class="fa fa-exchange" aria-hidden="true"></i>
                  <span>Transactions</span>
                </Link>
              </div>

              <Routes>
                <Route path="/Addincome" element={<Addincome/>}></Route>
                <Route path="/Addexpense" element={<Addexpense/>}></Route>
                <Route path="/Dashboard" element={<Dashboard />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Transactions" element={<Transactions />}></Route>
                <Route path="/Edit/:id" element={<Edit />}></Route>
                <Route path="/Trackmoney" element={<Trackmoney />}></Route>
                <Route path="/TrackedResults" element={<TrackedResults />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
