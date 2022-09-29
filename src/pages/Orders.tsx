import React from 'react'
import Home from './Home';
import Table from "../components/Table";
import { Order } from '../types';
import Td from "../components/Td";
import Th from "../components/Th";
import axios from 'axios';

interface IProps {
  orders?: Order[]
}

const sortTable = async (column: string) => {
  const apiUrl = 'https://heroku-order-management-api.herokuapp.com/api';
  const paginationSize = 10;

  const orders =
    await axios.get(`${apiUrl}/orders?size=${paginationSize}&sort=${column}`)
      .then(res => res.data)
      .catch(error => {
        console.log(error);

        alert("orders could not be loaded")
      });

  console.log(orders);
}

const Orders: React.FC<IProps> = ({orders}) => {
  return (
    <>
      <Home>
        <Table orders={orders}  title='Orders'>
          <thead>
            <tr>
              <Th sortTable={() => sortTable("number")}>N°</Th>
              <Th sortTable={() => sortTable("customer")}>Consumer</Th>
              <Th sortTable={() => sortTable("status")}>Status</Th>
              <Th sortTable={() => sortTable("createdAt")}>Date</Th>
              <Th sortTable={() => sortTable("total")}>Total</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              let date: string = new Date(order.createdAt).toLocaleDateString('en-US');

              return <tr key={index}>
                <Td classes='font-bold'>{order.number}</Td>
                <Td>{order.customer}</Td>
                <Td>{order.status}</Td>
                <Td>{date}</Td>
                <Td>$ {order.total.toFixed(2)}</Td>
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

export default Orders;
