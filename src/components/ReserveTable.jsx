import React from 'react'
import reserve_a_table from '../icons_assets/reserve a table.jpg'

export default function ReserveTable() {
  return (
    <>
        <body>
            <main>
                <img src={reserve_a_table} width={1111} height={578} alt='Reserve a table Image'/>
            <article>
                <section>
                    <h2>Reserve a Table</h2>
                    <form>
                    <div>
                        <label htmlFor="FirstName">First Name *</label>
                        <input type="text" id="FirstName" />

                        <label htmlFor='LastName'> Last Name *</label>
                        <input type="text" id='LastName'/>
                    </div>
                    <div>
                        <label htmlFor="Email">Email *</label>
                        <input type="email" id="Email" />

                        <label htmlFor='DofB'> Date of birthday *</label>
                        <input type="date" id='DofB'/>
                    </div>
                    <div>
                        <label htmlFor="DofR">Date of Reservation *</label>
                        <input type="date" id="DofR" />

                        <label htmlFor='TofR'>Time of Reservation *</label>
                        <input type="time" id='TofR'/>
                    </div>
                    </form>
                </section>
            </article>
            </main>
        </body>
    </>
  )
}
