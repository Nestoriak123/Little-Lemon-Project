import reserve_a_table from '../icons_assets/reserve a table.jpg'
import { OccasionButton } from './Components';
import { NumberOfGuests } from './Components';
import { FormInput } from './Components';
import { ReserveButton } from './Components';

export default function ReserveTable() {
  return (
    <>
        <body>
            <main>
                <div className='photo-section'>
                    <img className='main-img' src={reserve_a_table} alt='' />
                </div>
            <article>
                <section>
                    <h2>Reserve a Table</h2>
                    <form>
                    <div className="input-row-1">
                        <FormInput type="text" id="FirstName" cssname="first-name-input" text="First Name"/>

                        <FormInput type="text" id="LastName" cssname="last-name-input" text="Last Name"/>
                    </div>
                    <div className="input-row-2">
                        <FormInput type="email" id="Email" cssname="email-input" text="Email"/>

                        <FormInput type="date" id="DofB" cssname="DofB-input" text="Date of Birthday"/>
                    </div>
                    <div className="input-row-3">
                        <FormInput type="date" id="DofR" cssname="DofR-input" text="Date of Reservation"/>

                        <FormInput type="time" id="TofR" cssname="TofR-input" text="Time of Reservation"/>
                    </div>
                    </form>
                </section>
            </article>
            <article>
                <section>
                    <div>
                        <NumberOfGuests/>
                    </div>
                    <div>
                        <OccasionButton/>
                    </div>
                    <div>
                        <ReserveButton/>
                    </div>
                </section>
            </article>
            </main>
        </body>
    </>
  )
};
