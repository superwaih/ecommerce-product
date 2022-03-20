import {React} from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../images/icon-menu.svg'
import MenuBarClose from '../images/icon-close.svg'

import cartIcon from '../images/icon-cart.svg'
import userIcon from '../images/image-avatar.png'
import CartModal from './Cart';

 
function Nav({count, click, setCounter, finalCheckout, showModal, handleModal, setShowModal, handleClick}) {
   
  return <div className='relative shadow h-20 z-1'>
      
        <nav className='flex justify-between gap-4 items-center m-auto w-4/5 h-15'>

             <div onClick={handleClick} className='menu p-2-bar z-50 lg:hidden'> 
                <img  src={click ? MenuBarClose : MenuBar} alt="" />
            </div>
            
          <div className="logo basis-1/4">
              <Link className='font-bold text-2xl' to='/'>
                  sneakers
              </Link>
          </div>

          <div className="navlinks flex basis-3/4 justify-evenly lg:block hidden">
              <Link to='/' className='p-4'>Collections</Link>
              <Link to='/men' className='p-4' >Men</Link>
              <Link to='/women' className='p-4' >Women</Link>
              <Link to='/children' className='p-4'>Children</Link>
              <Link to='/about' className='p-4'>About</Link>
              <Link to='/contact' className='p-4'>Contact</Link>


          </div>
            <div className="cart flex items-center ">
                <div className="cart-icon m-4 p-3 relative">
                
                        <img className='cursor-pointer' onClick={handleModal} src={cartIcon} alt="" />
                        <span className=' absolute -top-2.5 left-90 h-min w-5 text-White bg-Orange text-center rounded-full'>{count}</span>
                        
                </div>

                <div className="user-icon">
                    <img className='h-[60px] lg:[90px] md:h-[80px] p-2 w-[60px]' src={userIcon} alt="" />
                </div>
            </div>
        </nav>
        <CartModal finalCheckout={finalCheckout} count={count} setCounter={setCounter} showModal={showModal} setShowModal={setShowModal} />
  </div>;
}

export default Nav;

// top: 3px;
// left: 76%