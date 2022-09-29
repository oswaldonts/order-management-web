import React, { ReactNode } from 'react';
import { Order, Product } from "../types";

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
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div
                  className="relative w-full px-2 max-w-full flex-grow flex-1"
                >
                  <h3 className="font-semibold text-lg text-blueGray-700">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
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
