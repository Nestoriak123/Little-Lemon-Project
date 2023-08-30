import React from 'react'
import '../style/Components.css'
import { Link } from 'react-router-dom';

export function OccasionButton() {
  return (
    <div className="occasion-button">
        <select name="occasion" id="occasion" required>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
        </select>
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

export function ReserveButton(props) {
  return (
    <div className="reserve-button">
        <button type="submit" onSubmit={props.onSubmit} disabled={props.disabled}>Reserve</button>
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
    <div className="input">
        <label htmlFor={props.id}>{props.text}<b>*</b></label><br/>
        <input
          autoComplete={props.autoComplete}
          required
          type={props.type}
          id={props.id}
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.onChange}
        />
    </div>
  )};


export function SecondButton (props) {
  return (
    <div className="second-button">
        <Link to={props.linkTo}><button type="submit">{props.text}</button></Link>
    </div>
  )
}




