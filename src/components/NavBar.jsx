import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import Basket from "../icons_assets/basket .svg"
import Home from './Home'
import ReserveTable from './ReserveTable';
import Dish from './Dish';
import { Link,Route,Routes,useLocation} from 'react-router-dom';
import '../style/NavBar.css';

import { menu } from './Menu';

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

      {menu.map(e => <Route path={e.dish_link} element={<Dish dish_name={e.dish_name} dish_description={e.dish_description} dish_price={e.dish_price} dish_img={e.dish_img}/>}></Route>)}
    </Routes>
    </div>
  )
}


export function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
