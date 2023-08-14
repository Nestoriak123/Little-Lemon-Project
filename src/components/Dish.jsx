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
      drink_name:'Cola',
      drink_type: 'non-alcohol',
      drink_size_S:200,
      drink_size_M:300,
      drink_size_L:500,
      drink_price_S: 1.09,
      drink_price_M: 1.29,
      drink_price_L: 1.39,
    },
    {
      drink_name:'Soda',
      drink_type: 'non-alcohol',
      drink_size_S:200,
      drink_size_M:300,
      drink_size_L:500,
      drink_price_S: 0.99,
      drink_price_M: 1.19,
      drink_price_L: 1.29,
    },
    {
      drink_name:'Sprite',
      drink_type: 'non-alcohol',
      drink_size_S:200,
      drink_size_M:300,
      drink_size_L:500,
      drink_price_S: 0.99,
      drink_price_M: 1.19,
      drink_price_L: 1.29,
    },
    {
      drink_name:'Ice tea',
      drink_type: 'non-alcohol',
      drink_size_S:200,
      drink_size_M:300,
      drink_size_L:500,
      drink_price_S: 1.09,
      drink_price_M: 1.29,
      drink_price_L: 1.39,
    },
    {
      drink_name:'Wine "Cabernet Sauvignon"',
      drink_type: 'alcohol',
      drink_size: 750,
      drink_price: 49.99,
    },
    {
      drink_name:'Wine "Sauvignon Blanc"',
      drink_type: 'alcohol',
      drink_size: 750,
      drink_price: 39.99,
    },
    {
      drink_name:'Beer Weihenstephaner',
      drink_type: 'alcohol',
      drink_size: 500,
      drink_price: 4.39,
    },
  ]

  const nonAlcoDrink = drinks.filter((nonAlco) => nonAlco.drink_type === "non-alcohol");
  const alcoDrink = drinks.filter((Alco) => Alco.drink_type === "alcohol");

  const [isCheckedArray, setIsCheckedArray] = React.useState(new Array(alcoDrink.length).fill(false));
  const [isCheckedArray2, setIsCheckedArray2] = React.useState(new Array(nonAlcoDrink.length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[0].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);

  /*const Price1 = () =>{
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
  }*/

  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
  }
  function handleCheckboxChange2(event) {
    setIsChecked2(event.target.checked)
  }
  function handleCheckboxChange3(event) {
    setIsChecked3(event.target.checked)
  }

  function handleCheckboxChange4(event) {
    setIsChecked4(event.target.checked)
  }
  function handleCheckboxChange5(event) {
    setIsChecked5(event.target.checked)
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
    const newAmountPrice = menu[0].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


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
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                    <input
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                     />
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <>
                      <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <input
                          type="checkbox"
                          checked={isChecked4}
                          onChange={handleCheckboxChange4}
                        />
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                              <input
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6>Size S: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                <input
                                type="checkbox"
                                />
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6>Size M: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                <input
                                type="checkbox"
                                />
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6>Size L: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                <input
                                type="checkbox"
                                />
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <input
                        type="checkbox"
                        checked={isChecked5}
                        onChange={handleCheckboxChange5}
                      />
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                              <h6>${drink.drink_price}</h6>
                              <input
                                type="checkbox"
                                checked={isCheckedArray[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray(newCheckedArray);

                                  // Update the total price based on the selected drink
                                  if (event.target.checked) {
                                    setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                  } else {
                                    setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </>
                      : null
                  }
              </div>
              <div className='customs'>
                <div className='custom'>
                  <h5>Custom 2</h5>
                  <div className='custom-price'>
                    <p>$1.00</p>
                    <input
                      type="checkbox"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                     />
                  </div>
                </div>
                <hr/>
              </div>
              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                    <input
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                     />
                  </div>
                </div>
                <hr/>
              </div>

              {isChecked3?
              <div className='text-area'>
                <textarea placeholder='Special Requests' rows="5" cols="40"/>
              </div>

              :null
              }
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
