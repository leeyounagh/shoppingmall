
import './App.css';
import {Routes,Route, Router, BrowserRouter} from'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage'
import auth from './hoc/auth';
import NavBar from './components/NavBar/NavBar';
import UploadProductPage from './components/UPloadProductPage/UploadProductPage';
import DetailProduct from './components/DetailProductPage/DetailProduct';
import CartPage from './components/CartPage/CartPage'
import HistoryPage from './components/HistoryPage/HistoryPage';
import MainPage from './components/LandingPage/MainPage'
function App() {
 
  return (
    <div className="App">
   
    
        

      <NavBar></NavBar>
       
       <Routes>
   
         <Route exact path ="/" element={auth(LandingPage,null)}/>
         <Route exact path ="/main" element={auth(MainPage,null)}/>
         
         
          <Route exact path='/register/' element={auth(RegisterPage,false)}>

          </Route>
         <Route exact path='/login/' element={auth(LoginPage,false)}></Route>

         <Route exact path='/product/upload' element={auth(UploadProductPage,true)}></Route>
         <Route exact path='/product/:productId' element={auth(DetailProduct,null)}></Route>
         <Route exact path='/user/cart' element={auth(CartPage,true)}></Route>
         <Route exact path='/history' element={auth(HistoryPage,true)}></Route>
 
          
         
        </Routes>
      
    
     
     
   
   
    </div>
  );
}


export default App;
