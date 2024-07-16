import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import ProductAdmin from "./components/products/ProductAdmin";
import CreateProduct from "./components/products/CreateProduct";
import UpdateProduct from "./components/products/UpdateProduct";

<<<<<<< HEAD
class App extends React.Component {
  constructor(props) {
    super(props);
  }
=======
const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
        <a href="/" className="navbar-brand">
          Big-Basket-mern-fullstack
        </a>
      </nav>
>>>>>>> 3a16636c54eb84489947f86927e558ad7bf208b5

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/admin' element={<ProductAdmin />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/update-product' element={<UpdateProduct />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
