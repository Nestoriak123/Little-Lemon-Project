import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import Basket from "../icons_assets/basket .svg"
import Home from './Home'
import ReserveTable from './ReserveTable';
import { Link,Route,Routes } from 'react-router-dom';
import '../style/NavBar.css';

import { MainCourses,Appetizers, Desserts } from './Menu';

export default function NavBar() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/"><img className='nav-logo' src={Logo} alt='Logo'/></Link>
          </li>
          <li>
            <Link className='nav-text' to="">About</Link>
          </li>
          <li>
            <Link className='nav-text' to="menu/main-courses">Menu</Link>
          </li>
          <li>
            <Link className='nav-text' to="reserve-table">Reservations</Link>
          </li>
          <li>
            <Link className='nav-text' to="">Order Online</Link>
          </li>
          <li>
            <img className='nav-basket' src={Basket} alt='basket'/>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/menu/main-courses" element={<MainCourses/>}></Route>
      <Route path='/reserve-table' element={<ReserveTable/>}></Route>

      <Route path="/menu/main-courses" element={<MainCourses/>}></Route>
      <Route path="/menu/appetizers" element={<Appetizers/>}></Route>
      <Route path="/menu/desserts" element={<Desserts/>}></Route>

      <Route path='/menu/main-courses/cedar-plank-salmon'></Route>
    </Routes>
    </div>
  )
}
