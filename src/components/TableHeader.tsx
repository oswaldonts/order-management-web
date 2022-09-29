import React from 'react'

interface IProps {
  title: string
}

const TableHeader: React.FC<IProps> = ({title}) => {
  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div
            className="relative w-full px-2 max-w-full flex-grow flex-1"
          >
            <h3 className="font-semibold text-lg text-slate-700">
              {title}
            </h3>
          </div>
          <div className="flex space-x-2 justify-center">
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create {title}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableHeader
