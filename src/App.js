
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import About from './Pages/About/About/About'
import ServicesDetails from './Pages/ServiceDetails/ServicesDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
function App() {
  return (
    <div>
      <Header></Header>
                   <Routes>
                      <Route path='/' element={<Home></Home>}></Route>
                      <Route path='/home' element={<Home></Home>}></Route>
                      <Route path='/service/:serviceId' element={<ServicesDetails></ServicesDetails>}></Route>
                      <Route path='/about' element={<About></About>}></Route>
                      <Route path='/login' element={<Login></Login>}></Route>
                      <Route path='/register' element={<Register></Register>}></Route>
                   </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
