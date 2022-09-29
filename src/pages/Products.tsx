import React from 'react'
import Home from './Home';
import Table from '../components/Table';
import { Product } from '../types';
import Td from "../components/Td";
import Th from "../components/Th";

interface IProps {
  products: Product[]
}

const Products: React.FC<IProps> = ({products}) => {
  return (
    <>
      <Home>
        <Table products={products} title='Products'>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>UnitPrice</Th>
              <Th>Active</Th>
              <th
                className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return <tr key={index}>
                <Td classes='font-bold'>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>{product.unitPrice.toFixed(2)}</Td>
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
