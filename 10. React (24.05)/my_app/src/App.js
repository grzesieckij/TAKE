import './App.css';
import {useEffect, useState} from "react";
import {ProductList} from "./ProductList";
import axios from "axios";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import ProductDetails from "./ProductDetails";

function App() {
    const [products, setProducts] = useState([]);

    const browser = createBrowserRouter(
        [
            {path: "/", element: <ProductList products={products}/>},
            {path: "details/:id", element: <ProductDetails products={products}/>}
        ]
    );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://dummyjson.com/products');
            setProducts(result.data.products);
        };

        fetchData();
    }, []);

  return (
      <RouterProvider router={browser}/>
  );
}

export default App;
