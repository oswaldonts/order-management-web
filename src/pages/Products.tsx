import React from 'react'
import Home from './Home';
import Table from '../components/Table';
import { Product } from '../types';
import Td from "../components/Td";
import Th from "../components/Th";
import axios from 'axios';

interface IProps {
  products?: Product[]
}

const sortTable = async (column: string) => {
  const apiUrl = 'https://heroku-order-management-api.herokuapp.com/api';
  const paginationSize = 10;

  const products =
    await axios.get(`${apiUrl}/products?size=${paginationSize}&sort=${column}`)
      .then(res => res.data)
      .catch(error => {
        console.log(error);

        alert("products could not be loaded")
      });

  console.log(products);
}

const Products: React.FC<IProps> = ({products}) => {
  return (
    <>
      <Home>
        <Table products={products} title='Products'>
          <thead>
            <tr>
              <Th sortTable={() => sortTable("name")}>Name</Th>
              <Th sortTable={() => sortTable("category")}>Category</Th>
              <Th sortTable={() => sortTable("unitPrice")}>Unit Price</Th>
              <Th sortTable={() => sortTable("active")}>Active</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return <tr key={index}>
                <Td classes='font-bold'>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>$ {product.unitPrice.toFixed(2)}</Td>
                <Td>{product.active ? 'Yes' : 'No'}</Td>
                <td
                  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </Home>
    </>
  )
}

export default Products;
