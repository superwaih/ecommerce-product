import {React, useState} from 'react';
import { Link } from 'react-router-dom';

function SideNav({click}) {
  return <>
    <div className={click ? "absolute navlinks z-50 flex bg-White flex-col font-bold p-10 h-screen" : 'hidden'}>
              <Link to='/' className='p-2'>Collections</Link>
              <Link to='/men' className='p-2' >Men</Link>
              <Link to='/women' className='p-2' >Women</Link>
              <Link to='/children' className='p-2'>Children</Link>
              <Link to='/about' className='p-2'>About</Link>
              <Link to='/contact' className='p-2'>Contact</Link>


          </div>
  </>;
}   

export default SideNav;
