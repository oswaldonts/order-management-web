import React from 'react'
import Home from './Home';
import Table from "../components/Table";
import { Order } from '../types';
import Td from "../components/Td";
import Th from "../components/Th";

interface IProps {
  orders: Order[]
}

const Orders: React.FC<IProps> = ({orders}) => {
  return (
    <>
      <Home>
        <Table orders={orders}  title='Orders'>
          <thead>
            <tr>
              <Th>N°</Th>
              <Th>Consumer</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th>Total</Th>
              <th
                className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              let date: string = new Date(order.createdAt).toLocaleDateString('en-US');

              return <tr key={index}>
                <Td classes='font-bold'>{order.number}</Td>
                <Td>{order.customer}</Td>
                <Td>{order.status}</Td>
                <Td>{date}</Td>
                <Td>{order.total.toFixed(2)}</Td>
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
