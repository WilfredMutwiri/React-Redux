import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product from './components/Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
       <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
