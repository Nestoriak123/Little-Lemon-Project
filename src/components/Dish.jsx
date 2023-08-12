import React from 'react'
import { menu } from './Menu'
import '../style/Dish.css'
import { Link } from 'react-router-dom'


import salmon from '../icons_assets/Menu/Main courses/Salmon.webp'
import gado from '../icons_assets/Menu/Main courses/GadoGado.webp'
import aioli from '../icons_assets/Menu/Main courses/Grand-Aioli.webp'
import pizza from '../icons_assets/Menu/Main courses/supremepizza.webp'
import lasagna from '../icons_assets/Menu/Main courses/Ravioli_Lasagna.webp'
import chicken from '../icons_assets/Menu/Main courses/lemon_chicken.webp'

import bruschetta from '../icons_assets/Menu/Appetizers/bruchetta.jpg'
import shrimp from '../icons_assets/Menu/Appetizers/Party-Shrimp.jpg'
import cheese_fries from '../icons_assets/Menu/Appetizers/cheese-fries.jpg'
import meatballs from '../icons_assets/Menu/Appetizers/Orange-Glazed-Meatballs.jpg'
import pepperoni from '../icons_assets/Menu/Appetizers/Pepperoni-Pizza-Loaf.jpg'
import pretzels from '../icons_assets/Menu/Appetizers/Soft-Beer-Pretzels.jpg'

import lemon_desert from '../icons_assets/Menu/Desserts/lemon dessert.jpg'
import cake from '../icons_assets/Menu/Desserts/Caramel Apple Cake.jpg'
import pie from '../icons_assets/Menu/Desserts/Fudge pie.jpg'
import cobbler from '../icons_assets/Menu/Desserts/cobbler.webp'
import mississippi from '../icons_assets/Menu/Desserts/Mississippi-Mud-Cake.webp'
import chess_pie from '../icons_assets/Menu/Desserts/classic-chess-pie.webp'


export function Salmon() {

  const drinks = [
    {
      drink_name:'cola',
      drink_size:'500',
      drink_price: 1,
    },
    {
      drink_name:'soda',
      drink_size:'500',
      drink_price: 1,
    },
    {
      drink_name:'sprite',
      drink_size:'500',
      drink_price: 1,
    },
    {
      drink_name:'ice tea',
      drink_size:'500',
      drink_price: 1,
    },
    {
      drink_name:'wine Cabernet Sauvignon',
      drink_size:'300',
      drink_price: 1,
    },
    {
      drink_name:'wheat beers',
      drink_size:'500',
      drink_price: 1,
    },
  ]

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [price, setPrice] = React.useState(menu[0].dish_price)

  let roundedPrice = price.toFixed(2);

  const Price1 = () =>{
    if(isChecked1 === false){
      setPrice((prevPrice) => prevPrice + 1);
    }
    else if(isChecked1 === true){
      setPrice((prevPrice) => prevPrice - 1);
    }
    
  }
  const Price2 = () =>{
    if(isChecked2 === false){
      setPrice((prevPrice) => prevPrice + 1);
    }
    else if(isChecked2 === true){
      setPrice((prevPrice) => prevPrice - 1);
    }
  }
  const Price3 = () =>{
    if(isChecked3 === false){
      setPrice((prevPrice) => prevPrice + 1);
    }
    else if(isChecked3 === true){
      setPrice((prevPrice) => prevPrice - 1);
    }
  }

  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
  }
  function handleCheckboxChange2(event) {
    setIsChecked2(event.target.checked)
  }
  function handleCheckboxChange3(event) {
    setIsChecked3(event.target.checked)
  }

  const [amount, setAmount] = React.useState(1);

  const numIncrease = () =>{
    if (amount < 15) {
      setAmount(amount + 1);
    }
  }
  const numDecrease = () =>{
    if (amount > 1) {
      setAmount(amount - 1);
  }
  }

  React.useEffect(() => {
      setPrice(menu[0].dish_price * amount);
  }, [amount, menu]);

  return (
    <div>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={salmon} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[0].dish_name}</h3>
                  <h4>${menu[0].dish_price}</h4>
                </div>
                  <p>{menu[0].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>
              <div className='customs'>
                <div className='custom'>
                  <h5>Custom 1</h5>
                  <div className='custom-price'>
                    <p>$1.00</p>
                    <input
                      type="checkbox"
                      checked={isChecked1}
                      onClick={Price1}
                      onChange={handleCheckboxChange1}
                     />
                  </div>
                </div>
                <hr/>
              </div>
              <div className='customs'>
                <div className='custom'>
                  <h5>Custom 2</h5>
                  <div className='custom-price'>
                    <p>$1.00</p>
                    <input
                      type="checkbox"
                      checked={isChecked2}
                      onClick={Price2}
                      onChange={handleCheckboxChange2}
                     />
                  </div>
                </div>
                <hr/>
              </div>
              <div className='customs'>
                <div className='custom'>
                  <h5>Custom 3</h5>
                  <div className='custom-price'>
                    <p>$1.00</p>
                    <input
                      type="checkbox"
                      checked={isChecked3}
                      onClick={Price3}
                      onChange={handleCheckboxChange3}
                     />
                  </div>
                </div>
                <hr/>
              </div>
                <div className='number'>
                <div className='number-component'>
                  <h2>Amount</h2>
                  <button onClick={numDecrease}>-</button>
                      {amount}
                  <button onClick={numIncrease}>+</button>
                </div>
                </div>
                <div className='add-button'>
                  <div className="second-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  {console.log(`amount ${amount}`)}
                   {console.log(`price ${price}`)}</button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}
