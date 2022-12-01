import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './home';
import { Route, Routes } from 'react-router-dom';
import Single_products from './single_products';


function App() {
 
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product/:id' element={<Single_products/>} />
        
      </Routes>
    </div>
  );
}

export default App;
