import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RouteLayout from "./components/RouteLayout";

function App() {

  const router =createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<RouteLayout/>}>
      <Route index element={<Dashboard/>}>
        
      </Route>
      <Route         path="/cart"
        element = {<Cart/>}>

      </Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
