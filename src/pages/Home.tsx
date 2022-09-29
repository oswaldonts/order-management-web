import React, { ReactNode } from 'react';
// import Footer from './components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

type Props = {
  children?: ReactNode
}

const Home: React.FC<Props> = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-50">
      <Navbar />
      <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12"></div>
        <div className="px-4 md:px-10 mx-auto w-full -m-36">
          {children}
        </div>
      </div>
    </>
  );
}

export default Home;
