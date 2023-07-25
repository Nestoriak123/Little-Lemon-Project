import Logo from './icons_assets/Logo.svg'
import Basket from "./icons_assets/basket .svg"
import Home from './components/Home'
import ReserveTable from './components/ReserveTable';
import { Link,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><img src={Logo} alt='Logo'/></Link>
          </li>
          <li>
            About
          </li>
          <li>
            Menu
          </li>
          <li>
            <Link to="reserve-table">Reservations</Link>
          </li>
          <li>
            Order Online
          </li>
          <li>
            <img src={Basket} alt='basket'/>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/reserve-table' element={<ReserveTable/>}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
