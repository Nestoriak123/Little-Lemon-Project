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

import greek_salad from '../icons_assets/greek salad.jpg'

/*MAIN DISH*/
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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));


  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[0].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    <div className='body-page'>
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
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function Gado() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));


  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[1].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[1].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={gado} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[1].dish_name}</h3>
                  <h4>${menu[1].dish_price}</h4>
                </div>
                  <p>{menu[1].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function Aioli() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));


  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[2].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[2].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={aioli} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[2].dish_name}</h3>
                  <h4>${menu[2].dish_price}</h4>
                </div>
                  <p>{menu[2].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function SupremePizza() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));


  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[3].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[3].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={pizza} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[3].dish_name}</h3>
                  <h4>${menu[3].dish_price}</h4>
                </div>
                  <p>{menu[3].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function Lasagna() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));


  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[4].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[4].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={lasagna} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[4].dish_name}</h3>
                  <h4>${menu[4].dish_price}</h4>
                </div>
                  <p>{menu[4].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function LemonChicken() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[5].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[5].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={chicken} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[5].dish_name}</h3>
                  <h4>${menu[5].dish_price}</h4>
                </div>
                  <p>{menu[5].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}


/*Appetizers*/
export function Bruschetta() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[6].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[6].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={bruschetta} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[6].dish_name}</h3>
                  <h4>${menu[6].dish_price}</h4>
                </div>
                  <p>{menu[6].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function PartyShrimp() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[7].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[7].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={shrimp} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[7].dish_name}</h3>
                  <h4>${menu[7].dish_price}</h4>
                </div>
                  <p>{menu[7].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function CheeseFries() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[8].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[8].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={cheese_fries} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[8].dish_name}</h3>
                  <h4>${menu[8].dish_price}</h4>
                </div>
                  <p>{menu[8].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function GlazedMeatballs() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[9].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[9].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={meatballs} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[9].dish_name}</h3>
                  <h4>${menu[9].dish_price}</h4>
                </div>
                  <p>{menu[9].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function PepperoniPizza() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[10].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[10].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={pepperoni} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[10].dish_name}</h3>
                  <h4>${menu[10].dish_price}</h4>
                </div>
                  <p>{menu[10].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function SoftBeerPretzels() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[11].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[11].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={pretzels} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[11].dish_name}</h3>
                  <h4>${menu[11].dish_price}</h4>
                </div>
                  <p>{menu[11].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}


/*Desserts*/
export function LemonDesert() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[12].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[12].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={lemon_desert} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[12].dish_name}</h3>
                  <h4>${menu[12].dish_price}</h4>
                </div>
                  <p>{menu[12].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function CaramelAppleCake() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[13].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[13].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={cake} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[13].dish_name}</h3>
                  <h4>${menu[13].dish_price}</h4>
                </div>
                  <p>{menu[13].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function FudgePie() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[14].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[14].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={pie} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[14].dish_name}</h3>
                  <h4>${menu[14].dish_price}</h4>
                </div>
                  <p>{menu[14].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function ChocolateCobbler() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[15].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[15].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={cobbler} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[15].dish_name}</h3>
                  <h4>${menu[15].dish_price}</h4>
                </div>
                  <p>{menu[15].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function MississippiCake() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[16].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[16].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={mississippi} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[16].dish_name}</h3>
                  <h4>${menu[16].dish_price}</h4>
                </div>
                  <p>{menu[16].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}

export function ChessPie() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[17].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[17].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={chess_pie} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[17].dish_name}</h3>
                  <h4>${menu[17].dish_price}</h4>
                </div>
                  <p>{menu[17].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}


export function GreekSalad() {

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
  const [isCheckedArray3, setIsCheckedArray3] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_S).length).fill(false));
  const [isCheckedArray4, setIsCheckedArray4] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_M).length).fill(false));
  const [isCheckedArray5, setIsCheckedArray5] = React.useState(new Array(nonAlcoDrink.map((non)=>non.drink_price_L).length).fill(false));

  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const [isChecked4, setIsChecked4] = React.useState(false);
  const [isChecked5, setIsChecked5] = React.useState(false);

  const [price, setPrice] = React.useState(menu[18].dish_price)
  const [customPrice, setCustomPrice] = React.useState(0)

  let roundedPrice = price.toFixed(2);


  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked)
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
    const newAmountPrice = menu[18].dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice]);


  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={greek_salad} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{menu[18].dish_name}</h3>
                  <h4>${menu[18].dish_price}</h4>
                </div>
                  <p>{menu[18].dish_description}</p>
              </div>
            </section>
            <section className='customize-section'>
              <h3>Add</h3>

              <div className='customs'>
                <div className='custom'>
                  <h5>Drinks</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="drinks-checkbox"
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                      />
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </div>
                <hr/>

                  {isChecked1?
                    <div className='drinks-checked'>
                      <div className='alco-type-box'>
                        <div className='alco-type'>
                        <h5>Non-Alcohol</h5>
                        <label className="custom-checkbox">
                          <input
                            id="non-alco-checkbox"
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                            />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <hr/>
                      </div>
                      {isChecked4?
                        nonAlcoDrink.map((drink, index) =>
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='customs-checked-price'>
                            <label className="custom-checkbox">
                              <input
                                id={drink.drink_name}
                                type="checkbox"
                                checked={isCheckedArray2[index] || false}
                                onChange={(event) => {
                                  const newCheckedArray = [...isCheckedArray2];
                                  newCheckedArray[index] = event.target.checked;
                                  setIsCheckedArray2(newCheckedArray);}}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr/>
                        {isCheckedArray2[index]?
                          nonAlcoDrink.map((drink, drinkIndex) =>
                            <div key={drinkIndex}>
                              {drinkIndex === index && (
                            <div className='drink-size'>
                              <div className='drink-size-box'>
                                <h6><b>S</b>: {drink.drink_size_S}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_S}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_S}
                                      type="checkbox"
                                      checked={isCheckedArray3[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray3];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray3(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_S);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_S);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>M</b>: {drink.drink_size_M}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_M}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_M}
                                      type="checkbox"
                                      checked={isCheckedArray4[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray4];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray4(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_M);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_M);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>

                              <div className='drink-size-box'>
                                <h6><b>L</b>: {drink.drink_size_L}ml</h6>
                                <div className='drink-size-price'>
                                  <p>${drink.drink_price_L}</p>
                                  <label className="custom-checkbox">
                                    <input
                                      id={drink.drink_size_L}
                                      type="checkbox"
                                      checked={isCheckedArray5[index] || false}
                                      onChange={(event) => {
                                        const newCheckedArray = [...isCheckedArray5];
                                        newCheckedArray[index] = event.target.checked;
                                        setIsCheckedArray5(newCheckedArray);

                                        if (event.target.checked) {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price_L);
                                        } else {
                                          setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price_L);
                                        }
                                      }}
                                      />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <hr/>
                            </div>
                          )}
                            </div>
                        ): null}

                        </div>
                        ):null}

                    <div className='alco-type-box'>
                      <div className='alco-type'>
                      <h5>Alcohol</h5>
                      <label className="custom-checkbox">
                        <input
                          id="alco-ckecbox"
                          type="checkbox"
                          checked={isChecked5}
                          onChange={handleCheckboxChange5}
                          />
                        <span className="checkmark"></span>
                      </label>
                      </div>
                      <hr/>
                    </div>
                    {isChecked5 ? (
                      alcoDrink.map((drink, index) => (
                        <div key={index} className='customs-checked-box'>
                          <div className='customs-checked'>
                            <h6>{drink.drink_name}</h6>
                            <div className='drink-size-price'>
                              <p>${drink.drink_price}</p>
                              <label className="custom-checkbox">
                                <input
                                  id={drink.drink_price}
                                  type="checkbox"
                                  checked={isCheckedArray[index] || false}
                                  onChange={(event) => {
                                    const newCheckedArray = [...isCheckedArray];
                                    newCheckedArray[index] = event.target.checked;
                                    setIsCheckedArray(newCheckedArray);

                                    if (event.target.checked) {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice + drink.drink_price);
                                    } else {
                                      setCustomPrice((prevCustomPrice) => prevCustomPrice - drink.drink_price);
                                    }
                                  }}
                                  />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))) : null}

                    </div>
                      : null
                  }
              </div>

              <div className='customs'>
                <div className='custom'>
                  <h5>Special Requests</h5>
                  <div className='custom-price'>
                  <label className="custom-checkbox">
                    <input
                      id="special-requests-checkbox"
                      type="checkbox"
                      checked={isChecked3}
                      onChange={handleCheckboxChange3}
                      />
                    <span className="checkmark"></span>
                  </label>
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
                  <h2>Amount</h2>
                    <div className='number-component'>
                    <button onClick={numDecrease}>-</button>
                        <p>{amount}</p>
                    <button onClick={numIncrease}>+</button>
                    </div>
                </div>
                <div className='add-button'>
                  <div className="main-button">
                  <Link to=""><button type="submit">Add for ${roundedPrice}
                  </button></Link>
                  </div>
                </div>
            </section>
            </article>
        </main>
    </div>
  )
}