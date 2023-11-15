import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
function App() {
  return (
    <div className="App ">
      <Router>
      <Navbar/>
      
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/adduser' element={<AddUser/>}></Route>
          <Route exact path='/edituser/:id' element={<EditUser/>}></Route>
          <Route exact path='/viewuser/:id' element={<ViewUser/>}></Route>
        </Routes>
        {/* <Home/> */}
      </Router>

      
    </div>
  );
}

export default App;
