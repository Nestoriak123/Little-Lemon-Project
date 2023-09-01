import React from 'react'
import '../style/Dish.css'
import { Link } from 'react-router-dom'


export default function Dish({dish_name,dish_img,dish_price,dish_description}) {
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

  const [price, setPrice] = React.useState(dish_price);
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
    const newAmountPrice = dish_price * amount;
    const newPrice = newAmountPrice + customPrice;
    setPrice(newPrice);
  }, [amount, customPrice, dish_price]);

  return (
    <div className='body-page'>
      <main>
          <article>
            <section className='dish-box'>
              <div className='dish-photo'>
                  <img className='dish-img' src={dish_img} alt=''/>
              </div>
              <div className='dish-info'>
                <div className='dish-name_price'>
                  <h3>{dish_name}</h3>
                  <h4>${dish_price}</h4>
                </div>
                  <p>{dish_description}</p>
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