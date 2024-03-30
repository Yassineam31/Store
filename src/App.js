import "./App.css";
import Home from "./components/Home";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Notfound from "./components/Notfound";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/s'inscrire" element={<RegisterForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
