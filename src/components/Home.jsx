import React from 'react'
import Footer from './Footer'

export default function Home() {
  return (
    <>
        <head>
            <title></title>
        </head>
        <body>
            <main>
                <div className='reservation-section'>
                    <article>
                    <section>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </section>
                    <section>
                        <img src='' alt=''/>
                    </section>
                </article>
                </div>
                <div className='menu-section'>
                    <article>
                    <section>
                        <h2>Specials</h2>
                        <button>Online Menu</button>
                    </section>
                    <section className='dish-1'>
                        <img src='' alt=''/>
                        <span className='name&price'>
                            <h4>Greek Salad</h4>
                            <p>$12.99</p>
                        </span>
                        <p>
                        A Greek Salad is a refreshing and flavorful salad that originates from Greece, known for its vibrant colors and Mediterranean flavors. It is a popular dish enjoyed worldwide and often served as an appetizer or side dish.
                        </p>
                        <span>
                            <a href><p>Order a delivery</p></a>
                            <img src='' alt=''/>
                        </span>
                    </section>
                    <section className='dish-2'>
                    <img src='' alt=''/>
                        <span className='name&price'>
                            <h4>Bruschetta</h4>
                            <p>$9.99</p>
                        </span>
                        <p>
                        Bruschetta is a traditional Italian appetizer that is both simple and bursting with flavors. It consists of grilled or toasted bread slices, rubbed with garlic and drizzled with extra virgin olive oil.
                        </p>
                        <span>
                            <a href><p>Order a delivery</p></a>
                            <img src='' alt=''/>
                        </span>
                    </section>
                    <section className='dish-3'>
                    <img src='' alt=''/>
                        <span className='name&price'>
                            <h4>Lemon Dessert</h4>
                            <p>$4.99</p>
                        </span>
                        <p>
                        A Lemon Dessert is a delightful and tangy treat that showcases the bright and refreshing flavors of lemons. From zesty lemon bars to luscious lemon cakes and creamy lemon tarts, these desserts are beloved for their perfect balance of sweetness and citrusy goodness.
                        </p>
                        <span>
                            <a href><p>Order a delivery</p></a>
                            <img src='' alt=''/>
                        </span>
                    </section>
                </article>
                </div>
                <div className='testimals-section'>
                    <article>
                        <div className='testimals-1'>
                            <section>
                                <h4>10/10</h4>
                                <img src='' alt='Alex'/>
                                <p>Alex</p>
                                <p>"Delicious food, cozy ambiance, top-notch service, a culinary delight!"</p>
                            </section>
                        </div>
                        <div className='testimals-2'>
                            <section>
                            <h4>9/10</h4>
                                <img src='' alt='Kate'/>
                                <p>Kate</p>
                                <p>"Mouthwatering dishes, friendly staff, perfect spot for any occasion."</p>
                            </section>
                        </div>
                        <div className='testimals-3'>
                            <section>
                            <h4>9/10</h4>
                                <img src='' alt='Mary'/>
                                <p>Mary</p>
                                <p>"Savory delights, charming atmosphere, a gastronomic journey worth savoring."</p>
                            </section>
                        </div>
                        <div className='testimals-4'>
                            <section>
                            <h4>10/10</h4>
                                <img src='' alt='Max'/>
                                <p>Max</p>
                                <p>"Fresh ingredients, a true culinary masterpiece awaits here."</p>
                            </section>
                        </div>
                    </article>
                </div>
                <div className='about-section'>
                    <article>
                        <section>
                            <h1>Little Lemon</h1>
                            <h3>Chicago</h3>
                            <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            The restaurant is reminiscent of gathering places found in Greece, with old world flavors and rustic roots.</p>
                            <img src='' alt=''/>
                            <img src='' alt=''/>
                        </section>
                    </article>
                </div>
            </main>
            <Footer/>
        </body>
    </>
  )
}


