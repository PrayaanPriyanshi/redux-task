import Navbar from './component/Navbar';
import Cart from './component/Cart';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
        <Route  exact path='/' element={<Login></Login>}></Route>   
          <Route path='/home' element = {<Home/>}/> 
          <Route path="/cart" element={<Cart />} />  
             
        </Routes>
      </Router>
    </div>
  );
}

export default App;
