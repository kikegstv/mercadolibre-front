import ProductList from "./pages/card-list/ProductList";
import ProductDetail from "./pages/product-detail/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./shared/navbar/NavBar";
import Home from "./pages/home/Home";

function App() {
  return   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/items" element={<ProductList/>}/>
      <Route path="/items/:id" element={<ProductDetail/>}/>
      <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>
  </BrowserRouter>
}

export default App;