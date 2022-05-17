
import './App.css';
import {Routes,Route, Router, BrowserRouter} from'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage'
import auth from './hoc/auth';
import NavBar from './components/NavBar/NavBar';
import UploadProductPage from './components/UPloadProductPage/UploadProductPage';
import DetailProduct from './components/DetailProductPage/DetailProduct';
function App() {
 
  return (
    <div className="App">
   
    
        

      <NavBar></NavBar>
       
       <Routes>
   
         <Route exact path ="/" element={auth(LandingPage,null)}/>
         
         
          <Route exact path='/register/' element={auth(RegisterPage,false)}>

          </Route>
         <Route exact path='/login/' element={auth(LoginPage,false)}></Route>

         <Route exact path='/product/upload' element={auth(UploadProductPage,true)}></Route>
         <Route exact path='/product/:productId' element={auth(DetailProduct,null)}></Route>

          
         
        </Routes>
      
    
     
     
   
   
    </div>
  );
}


export default App;
