import reserve_a_table from '../icons_assets/reserve a table.jpg'
import { FormInput } from './Components';
import { ReserveButton } from './Components';
import "../style/ReserveTable.css"
import React from 'react';

export default function ReserveTable() {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [DofB, setDofB] = React.useState("");
    const [DofR, setDofR] = React.useState("");
    const [TofR, setTofR] = React.useState("");
    const [number, setNumber] = React.useState(1);
    const [occasion, setOccasion] = React.useState('');

    const handleOptionChange = (event) => {
        setOccasion(event.target.value);
    };
    const getIsFormValid = () => {
      return (
        firstName &&
        lastName
      );
    };

    const clearForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDofB("");
      setDofR("");
      setTofR("");
      setOccasion("");
      setNumber(1);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Account created!");
      clearForm();
      console.log(formDate)
    };

    const formDate = {
        firstName:{firstName},
        lastName:{lastName},
        email:{email},
        date_of_birthday:{DofB},
        date_of_reservation:{DofR},
        time_of_reservation:{TofR},
        occasion:{occasion},
        number_of_guests:{number}
    }

    const today = new Date();
    const minDate = today.toISOString().split('T')[0];// Format: YYYY-MM-DD

    const minAge = new Date(today);
    minAge.setFullYear(minAge.getFullYear() - 16);
    const minAgeFormatted = minAge.toISOString().split('T')[0];

    const Minus = () =>{
        if(number > 1){
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
    <div className='body-page'>
        <main>
            <div className='photo-section'>
                <img className='main-img' src={reserve_a_table} alt='' />
            </div>
        <article>
            <section>
                <h2>Reserve a Table</h2>
                <form autoComplete={true} onSubmit={handleSubmit}>
                <div className='form'>
                    <div className="input-row-1">
                        <FormInput
                            autoComplete="given-name"
                            type="text"
                            id="FirstName"
                            text="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <FormInput
                            autoComplete="family-name"
                            type="text"
                            id="LastName"
                            text="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input-row-2">
                        <FormInput
                            autoComplete="email"
                            type="email"
                            id="Email"
                            text="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <FormInput
                            autoComplete="bday"
                            type="date"
                            id="DofB"
                            text="Date of Birthday(at least 16 y.o)"
                            max={minAgeFormatted}
                            value={DofB}
                            onChange={(e) => {
                                setDofB(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input-row-3">
                        <FormInput
                            type="date"
                            id="DofR"
                            text="Date of Reservation"
                            min={minDate}
                            value={DofR}
                            onChange={(e) => {
                                setDofR(e.target.value);
                            }}
                        />
                        <FormInput
                            type="time"
                            id="TofR"
                            text="Time of Reservation(12:00-23:00)"
                            min='12:00'
                            max='23:00'
                            value={TofR}
                            onChange={(e) => {
                                setTofR(e.target.value);
                            }}
                        />
                    </div>
                    <h3 id='occasion'>Occasion</h3>
                    <div className='occasion-section'>
                        <div className='radio'>
                            <label htmlFor='radio-1'>Birthday</label><br/>
                            <div className='radio-input'>
                            <input
                                required
                                type="radio"
                                id='radio-1'
                                name="options"
                                value="birthday"
                                checked={occasion === 'birthday'}
                                onChange={handleOptionChange}
                            />
                            </div>
                        </div>
                        <div className='radio'>
                            <label htmlFor='radio-2'>Engagement</label>
                            <div className='radio-input'>
                            <input
                                required
                                type="radio"
                                id='radio-2'
                                name="options"
                                value="engagement"
                                checked={occasion === 'engagement'}
                                onChange={handleOptionChange}
                            />
                            </div>
                        </div>
                        <div className='radio'>
                            <label htmlFor='radio-3'>Anniversary</label>
                            <div className='radio-input'>
                            <input
                                required
                                type="radio"
                                id='radio-3'
                                name="options"
                                value="anniversary"
                                checked={occasion === 'anniversary'}
                                onChange={handleOptionChange}
                            />
                            </div>
                        </div>

                    </div>
                    <div className='number-of-guests-component'>
                    <h2>Number of Guests *</h2><br/>
                    <div className='number-of-guests-button'>
                        <button type="button" onClick={Minus}>-</button>
                            {number}
                        <button type="button" onClick={Plus}>+</button>
                    </div>
                    </div>
                    <div className='reserve-button'>
                        <ReserveButton onSubmit={handleSubmit} disabled={!getIsFormValid}/>
                    </div>
                    </div>
                </form>
            </section>
        </article>
        </main>
    </div>
)
};
