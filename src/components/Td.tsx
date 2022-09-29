import React, { ReactNode } from 'react';

type Props = {
  classes?: string
  children?: ReactNode
}

const Td: React.FC<Props> = ({ classes, children }) => {
  return (
    <>
      <td
        className={`${classes} border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`}
      >
        {children}
      </td>
    </>
  );
}

export default Td;
