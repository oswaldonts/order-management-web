import React, { ReactNode } from 'react';

type Props = {
  classes?: string,
  children?: ReactNode,
  sortTable?: any
}

const Th: React.FC<Props> = ({ classes, children, sortTable }) => {
  return (
    <>
      <th
        className={`${classes} text-left px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold bg-slate-50 text-slate-500 border-slate-100`}
      >
        <button type='button' className='uppercase' onClick={sortTable}>
          {children}
        </button>
      </th>
    </>
  );
}

export default Th;
