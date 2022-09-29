import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'
import Orders from './pages/Orders'
import { IState } from './types';
import './App.css'

function App() {
  const [products, setProducts] = useState<IState["products"]>();
  const [orders, setOrders] = useState<IState["orders"]>();

  useEffect(() => {
    (async () => {
      const apiUrl = 'https://heroku-order-management-api.herokuapp.com/api';
      const paginationSize = 10;

      const products =
        await axios.get(`${apiUrl}/products?size=${paginationSize}`)
          .then(res => res.data)
          .catch(error => {
            console.log(error);

            alert("products could not be loaded")
          });

      const orders =
        await axios.get(`${apiUrl}/orders?size=${paginationSize}`)
          .then(res => res.data)
          .catch(error => {
            console.log(error);

            alert("orders could not be loaded")
          });

      setProducts(products);
      setOrders(orders);
    })();
  }, []);

  return (
    <>
    {/* <Provider store={store} > */}
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products products={products?.content} />} />
            <Route path='/orders' element={<Orders orders={orders?.content} />} />
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </>
  );
}

export default App;
