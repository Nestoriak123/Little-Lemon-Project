import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import Basket from "../icons_assets/basket .svg"
import Home from './Home'
import ReserveTable from './ReserveTable';
import { Link,Route,Routes } from 'react-router-dom';
import '../style/NavBar.css';

import { MainCourses,Appetizers, Desserts } from './Menu';

import {Salmon,Gado,Aioli,SupremePizza,Lasagna,LemonChicken,
Bruschetta,PartyShrimp,CheeseFries,GlazedMeatballs,PepperoniPizza,SoftBeerPretzels,
LemonDesert,CaramelAppleCake,FudgePie,ChocolateCobbler,MississippiCake,ChessPie,
GreekSalad} from './Dish'

export default function NavBar() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/"><img className='nav-logo' src={Logo} alt='Logo'/></Link>
          </li>
          <li>
            <a href='#about' className='nav-text'>About</a>
          </li>
          <li>
            <Link className='nav-text' to="/menu/main-courses">Menu</Link>
          </li>
          <li>
            <Link className='nav-text' to="/reserve-table">Reservations</Link>
          </li>
          <li>
            <Link className='nav-text' to="/menu/main-courses">Order Online</Link>
          </li>
          <li>
            <img className='nav-basket' src={Basket} alt='basket'/>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/reserve-table' element={<ReserveTable/>}></Route>

      <Route path="/menu/main-courses" element={<MainCourses/>}></Route>
      <Route path="/menu/appetizers" element={<Appetizers/>}></Route>
      <Route path="/menu/desserts" element={<Desserts/>}></Route>

      <Route path='/menu/main-courses/cedar-plank-salmon' element={<Salmon/>}></Route>
      <Route path='/menu/main-courses/gado-gado' element={<Gado/>}></Route>
      <Route path='/menu/main-courses/aioli' element={<Aioli/>}></Route>
      <Route path='/menu/main-courses/supreme-pizza' element={<SupremePizza/>}></Route>
      <Route path='/menu/main-courses/ravioli-lasagna' element={<Lasagna/>}></Route>
      <Route path='/menu/main-courses/lemon-chicken' element={<LemonChicken/>}></Route>

      <Route path='/menu/main-courses/bruschetta' element={<Bruschetta/>}></Route>
      <Route path='/menu/main-courses/party-shrimp' element={<PartyShrimp/>}></Route>
      <Route path='/menu/main-courses/cheese-fries' element={<CheeseFries/>}></Route>
      <Route path='/menu/main-courses/glazed-meatballs' element={<GlazedMeatballs/>}></Route>
      <Route path='/menu/main-courses/pepperoni-pizza-loaf' element={<PepperoniPizza/>}></Route>
      <Route path='/menu/main-courses/soft-beer-pretzels' element={<SoftBeerPretzels/>}></Route>

      <Route path='/menu/main-courses/lemon-dessert' element={<LemonDesert/>}></Route>
      <Route path='/menu/main-courses/caramel-apple-cake' element={<CaramelAppleCake/>}></Route>
      <Route path='/menu/main-courses/fudge-pie' element={<FudgePie/>}></Route>
      <Route path='/menu/main-courses/chocolate-cobbler' element={<ChocolateCobbler/>}></Route>
      <Route path='/menu/main-courses/mississippi-cake' element={<MississippiCake/>}></Route>
      <Route path='/menu/main-courses/chess-pie' element={<ChessPie/>}></Route>

      <Route path='/menu/main-courses/greek_salad' element={<GreekSalad/>}></Route>

    </Routes>
    </div>
  )
}
