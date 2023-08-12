import React from 'react'
import '../style/Components.css'
import { Link } from 'react-router-dom';

export function OccasionButton() {
  return (
    <div className="occasion-button">
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion">
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
        </select>
    </div>
  )
}

export function Number(props) {
    const [number, setNumber] = React.useState(0);

    const Minus = () =>{
        if(number > 0){
            return setNumber(number-1);
        }else{
            return;
        }
    }
    const Plus = () =>{
        if(number < 15){
            return setNumber(number+1);
        }else {
            return;
        };
    }
  return (
    <div className='number-component'>
        <h2>{props.name}</h2>
        <button onClick={Minus}>-</button>
            {number}
        <button onClick={Plus}>+</button>
    </div>
  )
}

export function DishCategoryButton(props) {
  return (
    <div className="dish-category-button">
        <button>{props.name}</button>
    </div>
  )
}

export function AddToBasket(props) {
  return (
    <div className="add-to-basket">
        <Link to={props.LinkTo}><button type="submit">Order</button></Link>
    </div>
  )
}

export function ReserveButton() {
  return (
    <div className="reserve-button">
        <button type="submit">Reserve</button>
    </div>
  )
}

export function MainButton(props) {
  return (
    <div className="main-button">
        <Link to={props.linkTo}><button type="submit">{props.text}</button></Link>
    </div>
  )
}

export function FormInput(props) {
  return (
    <div className={props.cssname}>
        <label htmlFor={props.id}>{props.text} *</label>
        <input type={props.type} id={props.id} />
    </div>
  )
}

export function SecondButton (props) {
  return (
    <div className="second-button">
        <Link to={props.linkTo}><button type="submit">{props.text}</button></Link>
    </div>
  )
}




