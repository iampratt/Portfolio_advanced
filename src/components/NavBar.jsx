import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import grid from '../assets/bg.png';

const NavBar = () => {
  const navWrapper = ({ isActive }) =>
    isActive
      ? 'after:content-["/>"] before:content-["<"] border-b-4 flex-1 relative font-semibold text-green-500 align-middle p-1 text-center hover:flex-[2] hover:bg-green-500 hover:scale-[1.15] hover:text-[#f2f2f2f2] rounded-full h-10 transition-all duration-300 mx-5 text-nowrap'
      : 'flex-1 relative font-semibold align-middle p-1 text-center hover:flex-[2] hover:bg-green-500 hover:scale-[1.15] rounded-full h-10 transition-all duration-300 mx-5 text-nowrap';
  return (
    <>
      <img
        src={grid}
        alt=''
        className='fixed top-0 opacity-40 content-center bg-cover w-screen h-screen z-1'
      />
      <div className='fixed top-0 bg-gradient-to-r from-black via-[#1d1d1d] to-green-700 to-100% w-full z-0 h-[142px] rounded-b-[20px]' />
      <div className='sticky w-screen h-[300px] overflow-hidden z-20'>
        <div className='flex flex-row justify-between items-center align-middle font-open-sans text-[#f5f5f5] text-xl mx-5 my-8 z-50'>
          <div className='flex shrink-0 flex-col ml-10 mr-20 tracking-wide text-3xl'>
            <Link to=''>
              <div className='mb-1'>Pratyush</div>
              <div>Srivastava</div>
            </Link>
          </div>
          <ul className='basis-3/5 flex flex-row px-[100px] flex-wrap'>
            <NavLink to='about' className={navWrapper}>
              About
            </NavLink>
            <NavLink to='projects' className={navWrapper}>
              Projects
            </NavLink>
            <NavLink to='contact' className={navWrapper}>
              Contact Me
            </NavLink>
          </ul>
          <div className='relative basis-3/12 grow-0 shrink-0 text-center pr-8'>
            <h1>image</h1>
            <div className='overflow-visible absolute border-2 border-white bg-white rounded-full top-0 -mx-[100px] -my-[200px] right-0 w-[400px] h-[400px]'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
