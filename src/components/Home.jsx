import React from 'react'
import { Link } from 'react-router-dom';
import restauranfood from '../icons_assets/restauranfood.jpg'
import '../App.css';
import { SecondButton, MainButton } from './Components';
import '../style/Home.css'
import dish_1_img from '../icons_assets/greek salad.jpg'
import dish_2_img from '../icons_assets/Menu/Appetizers/bruchetta.jpg'
import dish_3_img from '../icons_assets/Menu/Desserts/lemon dessert.jpg'
import delivery_icon from '../icons_assets/Dish icon.svg'
import testimals_1 from '../icons_assets/testimals/photo-1.png'
import testimals_2 from '../icons_assets/testimals/photo-2.png'
import testimals_3 from '../icons_assets/testimals/photo-3.png'
import testimals_4 from '../icons_assets/testimals/photo-4.png'
import about_photo_1 from '../icons_assets/about-photo-1.png'
import about_photo_2 from '../icons_assets/about-photo-2.png'

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
                        <div className='home-reserve-button'>
                            <SecondButton linkTo="reserve-table" text="Reserve a Table"/>
                        </div>
                    </section>
                    <section className='reservation-section-img'>
                        <img src={restauranfood}  alt=''/>
                    </section>
                </article>
                </div>
                <div className='menu-section'>
                    <article>
                    <section className='specials'>
                        <h2>This weeks specials!</h2>
                        <MainButton linkTo="menu/main-courses" text="Online Menu"/>
                    </section>

                    <div className='home-dish-section'>
                        <div className='home-dish'>
                            <section>
                            <img src={dish_1_img} alt=''/>
                            <span className='name_price'>
                                <h4>Greek Salad</h4>
                                <p>$12.99</p>
                            </span>
                            <div className ='home-dish-description'>
                                A Greek Salad is a refreshing and flavorful salad that originates from Greece, known for its vibrant colors and Mediterranean flavors. It is a popular dish enjoyed worldwide and often served as an appetizer or side dish.
                            </div>
                            <p>
                            </p>
                            <span>
                                <Link className='dish-delivery'>
                                    <p>Order a delivery</p>
                                    <img src={delivery_icon} alt=''/>
                                </Link>
                            </span>
                        </section>
                        </div>
                        <div className='home-dish'>
                            <section>
                            <img src={dish_2_img} alt=''/>
                                <span className='name_price'>
                                    <h4>Bruschetta</h4>
                                    <p>$9.99</p>
                                </span>
                                <div className ='home-dish-description'>
                                    Bruschetta is a traditional Italian appetizer that is both simple and bursting with flavors. It consists of grilled or toasted bread slices, rubbed with garlic and drizzled. Use a high-quality balsamic vinegar for best results.
                                </div>
                                <p>

                                </p>
                                <span>
                                    <Link className='dish-delivery'>
                                        <p>Order a delivery</p>
                                        <img src={delivery_icon} alt=''/>
                                    </Link>
                                </span>
                        </section>
                        </div>
                        <div className='home-dish'>
                            <section>
                            <img src={dish_3_img} alt=''/>
                                <span className='name_price'>
                                    <h4>Lemon Dessert</h4>
                                    <p>$4.99</p>
                                </span>
                                <div className ='home-dish-description'>
                                    A Lemon Dessert is a delightful and tangy treat that showcases the bright and refreshing flavors of lemons. From zesty lemon bars to luscious lemon cakes and creamy lemon tarts, these desserts are beloved...
                                </div>
                                <p>

                                </p>
                                <span>
                                    <Link className='dish-delivery'>
                                        <p>Order a delivery</p>
                                        <img src={delivery_icon} alt=''/>
                                    </Link>
                                </span>
                            </section>
                        </div>
                    </div>
                </article>
                </div>
                <div className='testimals-section'>
                    <h2>Testimals</h2>
                    <article className='testimals'>
                        <div className='testimalsbox'>
                            <section>
                                    <h4>10/10</h4>
                                <div className='name_img'>
                                    <img src={testimals_1} alt='Alex'/>
                                <p>Alex</p>
                                </div>
                                <p className="testimals-description">"Delicious food, cozy ambiance, top-notch service, a culinary delight!"</p>
                            </section>
                        </div>
                        <div className='testimalsbox'>
                            <section>
                                    <h4>9/10</h4>
                            <div className='name_img'>
                                <img src={testimals_2} alt='Kate'/>
                                <p>Kate</p>
                            </div>
                                <p className="testimals-description">"Mouthwatering dishes, friendly staff, perfect spot for any occasion."</p>
                            </section>
                        </div>
                        <div className='testimalsbox'>
                            <section>
                                    <h4>9/10</h4>
                            <div className='name_img'>
                                <img src={testimals_3} alt='Mary'/>
                                <p>Mary</p>
                            </div>
                                <p className="testimals-description">"Savory delights, charming atmosphere, a gastronomic journey worth savoring."</p>
                            </section>
                        </div>
                        <div className='testimalsbox'>
                            <section>
                                    <h4>10/10</h4>
                            <div className='name_img'>
                                <img src={testimals_4} alt='Max'/>
                                <p>Max</p>
                            </div>
                                <p className="testimals-description">"Fresh ingredients, a true culinary masterpiece awaits here."</p>
                            </section>
                        </div>
                    </article>
                </div>
                <div className='about-section'>
                    <article>
                        <section>
                            <div className='about-text'>
                                <h1>Little Lemon</h1>
                                <h3>Chicago</h3>
                                <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                                The restaurant is reminiscent of gathering places found in Greece, with old world flavors and rustic roots.</p>
                            </div>
                            <div className='about-photo'>
                                <img className='about-photo-1' src={about_photo_1} alt=''/>
                                <img className='about-photo-2' src={about_photo_2} alt=''/>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
        </body>
    </>
  )
}


