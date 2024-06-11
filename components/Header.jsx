import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import  '/src/App.css';
const Header = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w[1240px] flex justify-between  py-[15px]  mx-auto">
          <div className="font-bold text-4xl ">
            Danish

          </div>
          {

            toggle ? <IoMdClose onCNavLinkck={() => setToggle(!toggle)} className='text-white text-2xl font-bold md:hidden block' />
              :
              <CiMenuBurger onCNavLinkck={() => setToggle(!toggle)} className='text-white text-2xl font-bold md:hidden block' />

          }


          <ul className="hidden md:flex gap-6 items-center text-white text-xl">
            <NavLink to={"/Home"} className='cursor-pointer'>Home</NavLink>
            <NavLink to={"About"} className='cursor-pointer'>About</NavLink>
            <NavLink to={"/ContactUs"} className='cursor-pointer'>Contact</NavLink>
            <NavLink to={"Blog"} className='cursor-pointer'>Blogs</NavLink>
            <NavLink to={"Reviews"} className='cursor-pointer'>Reviews </NavLink> </ul>
          {/* Responsive NAVBAR*/}
          <ul className={' duration-500 md:hidden  w-full bg-black text-xl font-bold text-white h-screen fixed top-[99px]' + 
             (toggle ? ' left-[0]' : ' left-[100%]')} > 
          <NavLink className='cursor-pointer hover:bg-gray-900  py-5 px-5'>Home</NavLink>
          <NavLink className='cursor-pointer px-5 py-5'>About</NavLink>
          <NavLink className='cursor-pointer px-5 py-5'>Contact </NavLink>
          <NavLink className='cursor-pointer px-5 py-5'>Blogs</NavLink>
          <NavLink className='cursor-pointer px-5 py-5'>Reviews </NavLink></ul> </div>
    </div >
        
        </>
  );
};

export default Header;

