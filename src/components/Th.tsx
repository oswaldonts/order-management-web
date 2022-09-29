import React, { ReactNode } from 'react';

type Props = {
  classes?: string
  children?: ReactNode
}

const Th: React.FC<Props> = ({ classes, children }) => {
  return (
    <>
      <th
        className={`${classes} text-left px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold bg-blueGray-50 text-blueGray-500 border-blueGray-100`}
      >
        {children}
      </th>
    </>
  );
}

export default Th;
