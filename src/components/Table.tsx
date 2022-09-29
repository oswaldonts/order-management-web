import React, { ReactNode } from 'react';
import { Order, Product } from "../types";
import TableHeader from './TableHeader';

interface IProps {
  products?: Product[],
  orders?: Order[],
  title: string,
  children: ReactNode
}

const Table: React.FC<IProps> = ({ products, orders, title, children }) => {
  return (
    <div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
          >
            <TableHeader title={title} />
            <div className="block w-full overflow-x-auto">
              <table
                className="items-center w-full bg-transparent border-collapse"
              >
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
