import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { myContext } from './ContextData'

export default function NavComp() {

  const { menuOpen, setMenuOpen } = useContext(myContext)

  const toggleMenu = () => {
    setMenuOpen((prev) => !menuOpen);

  };

  return (
    <div className='lg:flex lg:justify-center lg:items-center h-20 '>
      <div className='h-14 bg-slate-900 lg:w-[98%] flex justify-between items-center p-4 z-10'>

        <div className='w-[100%] lg:flex lg:justify-around lg:items-center hidden '>
          <Link to='/'>
            <p className='font-bold text-white cursor-pointer lg:block'>Home</p>
          </Link>
          <Link to='/ProductComp/mens_outerwear'>
            <p className='font-bold cursor-pointer text-white lg:block'>Men's Outerwear</p>
          </Link>
          <Link to='/ProductComp/ladies_outerwear'>
            <p className='font-bold cursor-pointer text-white lg:block'>Ladies Outerwear</p>
          </Link>
          <Link to='/ProductComp/mens_tshirts'>
            <p className='font-bold cursor-pointer text-white lg:block'>Men's T-Shirts</p>
          </Link>
          <Link to='/ProductComp/ladies_tshirts'>
            <p className='font-bold cursor-pointer text-white lg:block'>Ladies T-Shirts</p>
          </Link>
          <Link to='/Cart'>
            <p className='font-bold cursor-pointer text-white lg:block'>Cart</p>
          </Link>
        </div>


        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white'>
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", height: "25px" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden  w-[200px] -z-500 lg:z-10 bg-slate-900 lg:w-full relative z-10 ${menuOpen ? 'block' : 'hidden'} `}>
        <div className='flex flex-col items-center'>
          <Link to='/' >
            <div className='w-[200px] flex justify-center items-center hover:bg-slate-600'>
              <p className='font-bold text-white cursor-pointer py-2'>Home</p>
            </div>
          </Link>
          <Link to='/ProductComp/mens_outerwear' >
            <div className='w-[200px] flex justify-center items-center hover:bg-slate-600'>
              <p className='font-bold cursor-pointer text-white py-2'>Men's Outerwear</p>
            </div>
          </Link>
          <Link to='/ProductComp/ladies_outerwear'>
            <div  className='w-[200px] flex justify-center items-center hover:bg-slate-600'>
              <p className='font-bold cursor-pointer text-white py-2'>Ladies Outerwear</p>
            </div>
          </Link>
          <Link to='/ProductComp/mens_tshirts' >
            <div  className='w-[200px] flex justify-center items-center hover:bg-slate-600'>
              <p className='font-bold cursor-pointer text-white py-2'>Men's T-Shirts</p>
            </div>
          </Link>
          <Link to='/ProductComp/ladies_tshirts' >
            <div  className='w-[200px] flex justify-center items-center hover:bg-slate-600'>
              <p className='font-bold cursor-pointer text-white py-2'>Ladies T-Shirts</p>
            </div>
          </Link>
          <Link to='/Cart' >
            <div  className='w-[200px] flex justify-center items-center hover:bg-slate-600'>
              <p className='font-bold cursor-pointer text-white py-2'>Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
