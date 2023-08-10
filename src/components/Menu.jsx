import React from 'react'
import menu_img from '../icons_assets/restaurant.jpg'
import { DishCategoryButton } from './Components'
import { Link } from 'react-router-dom'
import { AddToBasket } from './Components'
import '../style/Menu.css'

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

    export const menu = [
    {
        dish_img: salmon,
        dish_category: 'main courses',
        dish_rows: 1,
        dish_name: 'Cedar-Plank Salmon',
        dish_description:'Cedar',
        dish_price: 14.99
    },
    {
        dish_img:gado,
        dish_category: 'main courses',
        dish_rows: 1,
        dish_name: 'Gado Gado',
        dish_description:'Gado Gado ...',
        dish_price: 11.99
    },
    {
        dish_img:aioli,
        dish_category: 'main courses',
        dish_rows: 1,
        dish_name: 'Grand Aioli',
        dish_description:'Grand Aioli ...',
        dish_price: 19.99
    },
    {
        dish_img:pizza,
        dish_category: 'main courses',
        dish_rows: 2,
        dish_name: 'Supreme Pizza',
        dish_description:'Supreme Pizza ...',
        dish_price: 9.99
    },
    {
        dish_img:lasagna,
        dish_category: 'main courses',
        dish_rows: 2,
        dish_name: 'Ravioli Lasagna',
        dish_description:'Ravioli Lasagna ...',
        dish_price: 4.99
    },
    {
        dish_img:chicken,
        dish_category: 'main courses',
        dish_rows: 2,
        dish_name: 'Lemon Chicken',
        dish_description:'Lemon Chicken ...',
        dish_price: 10.99
    },
    {
        dish_img:bruschetta,
        dish_category: 'appetizers',
        dish_rows: 1,
        dish_name: 'Bruschetta',
        dish_description:'Bruschetta ...',
        dish_price: 9.99
    },
    {
        dish_img:shrimp,
        dish_category: 'appetizers',
        dish_rows: 1,
        dish_name: 'Party Shrimp',
        dish_description:'Party Shrimp ...',
        dish_price: 12.99
    },
    {
        dish_img:cheese_fries,
        dish_category: 'appetizers',
        dish_rows: 1,
        dish_name: 'Cheese Fries',
        dish_description:'Cheese Fries ...',
        dish_price: 7.99
    },
    {
        dish_img:meatballs,
        dish_category: 'appetizers',
        dish_rows: 2,
        dish_name: 'Glazed Meatballs',
        dish_description:'Orange-Glazed Meatballs ...',
        dish_price: 16.99
    },
    {
        dish_img: pepperoni,
        dish_category: 'appetizers',
        dish_rows: 2,
        dish_name: 'Pepperoni Pizza Loaf',
        dish_description:'Pepperoni Pizza Loaf ...',
        dish_price: 12.99
    },
    {
        dish_img:pretzels,
        dish_category: 'appetizers',
        dish_rows: 2,
        dish_name: 'Soft Beer Pretzels',
        dish_description:'Soft Beer Pretzels ...',
        dish_price: 4.99
    },
    {
        dish_img:lemon_desert,
        dish_category: 'desserts',
        dish_rows: 1,
        dish_name: 'Lemon Desert',
        dish_description:'Lemon Desert ...',
        dish_price: 4.99
    },
    {
        dish_img:cake,
        dish_category: 'desserts',
        dish_rows: 1,
        dish_name: 'Caramel Apple Cake',
        dish_description:'Caramel Apple Cake ...',
        dish_price: 23.99
    },
    {
        dish_img:pie,
        dish_category: 'desserts',
        dish_rows: 1,
        dish_name: 'Fudge Pie',
        dish_description:'Fudge Pie ...',
        dish_price: 12.99
    },
    {
        dish_img:cobbler,
        dish_category: 'desserts',
        dish_rows: 2,
        dish_name: 'Chocolate Cobbler',
        dish_description:'Chocolate Cobbler ...',
        dish_price: 5.99
    },
    {
        dish_img:mississippi,
        dish_category: 'desserts',
        dish_rows: 2,
        dish_name: 'Mississippi Cake',
        dish_description:'Mississippi Cake ...',
        dish_price: 4.99
    },
    {
        dish_img:chess_pie,
        dish_category: 'desserts',
        dish_rows: 2,
        dish_name: 'Chess Pie',
        dish_description:'Chess Pie ...',
        dish_price: 4.99
    },
];

    const mainCourse_1 = menu.filter((main) => main.dish_category === "main courses" && main.dish_rows === 1)
    const mainCourse_2 = menu.filter((main) => main.dish_category === "main courses" && main.dish_rows === 2)
    const appetizers_1 = menu.filter((main) => main.dish_category === "appetizers" && main.dish_rows === 1)
    const appetizers_2 = menu.filter((main) => main.dish_category === "appetizers" && main.dish_rows === 2)
    const desserts_1 = menu.filter((main) => main.dish_category === "desserts" && main.dish_rows === 1)
    const desserts_2 = menu.filter((main) => main.dish_category === "desserts" && main.dish_rows === 2)

export function MainCourses() {
  return (
    <>
         <main>
            <div className='photo-section'>
                <img className='main-img' src={menu_img} alt=''/>
            </div>
            <article>
                <section>
                    <div className='dish-category-select'>
                        <Link to="/menu/main-courses">
                            <DishCategoryButton onClick={MainCourses} name="Main Courses"/>
                         </Link>
                        <Link to="/menu/appetizers">
                            <DishCategoryButton name="Appetizers"/>
                         </Link>
                        <Link to="/menu/desserts">
                            <DishCategoryButton name="Desserts"/>
                         </Link>
                    </div>
                </section>
            </article>
            <article>
                <section>
                    <div className='dish-section'>
                        <div className='category-name'>
                            <h2>Main Courses</h2>
                        </div>
                            <div className='dish-1'>
                            {mainCourse_1.map((mainCourse) =>
                                <div className='dishbox' key={mainCourse.dish_name}>
                                    <img src={mainCourse.dish_img} alt=''/>
                                    <h3>{mainCourse.dish_name}</h3>
                                    <p>${mainCourse.dish_price}</p>
                                    <div className='to-basket-button'>
                                        <AddToBasket price={mainCourse.dish_price}/>
                                    </div>
                                </div>
                            )}
                            </div>
                            <div className='dish-2'>
                            {mainCourse_2.map((mainCourse) =>
                                <div className='dishbox' key={mainCourse.dish_name}>
                                    <img src={mainCourse.dish_img} alt=''/>
                                    <h3>{mainCourse.dish_name}</h3>
                                    <p>${mainCourse.dish_price}</p>
                                    <div className='to-basket-button'>
                                        <AddToBasket price={mainCourse.dish_price}/>
                                    </div>
                                </div>
                            )}
                            </div>
                    </div>
                </section>
            </article>
        </main>
    </>
  )
}

export function Appetizers(){
  return (
    <>
        <main>
            <div className='photo-section'>
                <img className='main-img' src={menu_img} alt=''/>
            </div>
            <article>
                <section>
                    <div className='dish-category-select'>
                        <Link to="/menu/main-courses">
                            <DishCategoryButton onClick={MainCourses} name="Main Courses"/>
                         </Link>
                        <Link to="/menu/appetizers">
                            <DishCategoryButton name="Appetizers"/>
                         </Link>
                        <Link to="/menu/desserts">
                            <DishCategoryButton name="Desserts"/>
                         </Link>
                    </div>
                </section>
            </article>
            <article>
                <div className='dish-section'>
                        <div className='category-name'>
                            <h2>Appetizers</h2>
                        </div>
                            <div className='dish-1'>
                            {appetizers_1.map((appetizers) =>
                                <div className='dishbox' key={appetizers.dish_name}>
                                    <img src={appetizers.dish_img} alt=''/>
                                    <h3>{appetizers.dish_name}</h3>
                                    <p>${appetizers.dish_price}</p>
                                    <div className='to-basket-button'>
                                        <AddToBasket price={appetizers.dish_price}/>
                                    </div>
                                </div>
                            )}
                            </div>
                            <div className='dish-2'>
                            {appetizers_2.map((appetizers) =>
                                <div className='dishbox' key={appetizers.dish_name}>
                                    <img src={appetizers.dish_img} alt=''/>
                                    <h3>{appetizers.dish_name}</h3>
                                    <p>${appetizers.dish_price}</p>
                                    <div className='to-basket-button'>
                                        <AddToBasket price={appetizers.dish_price}/>
                                    </div>
                                </div>
                            )}
                            </div>
                    </div>
            </article>
        </main>
    </>
  )
}

export function Desserts() {
  return (
    <>
        <main>
            <div className='photo-section'>
                <img className='main-img' src={menu_img} alt=''/>
            </div>
            <article>
                <section>
                    <div className='dish-category-select'>
                        <Link to="/menu/main-courses">
                            <DishCategoryButton onClick={MainCourses} name="Main Courses"/>
                         </Link>
                        <Link to="/menu/appetizers">
                            <DishCategoryButton name="Appetizers"/>
                         </Link>
                        <Link to="/menu/desserts">
                            <DishCategoryButton name="Desserts"/>
                         </Link>
                    </div>
                </section>
            </article>
            <article>
                <section>
                <div className='dish-section'>
                        <div className='category-name'>
                            <h2>Desserts</h2>
                        </div>
                            <div className='dish-1'>
                            {desserts_1.map((desserts) =>
                                <div className='dishbox' key={desserts.dish_name}>
                                    <img src={desserts.dish_img} alt=''/>
                                    <h3>{desserts.dish_name}</h3>
                                    <p>${desserts.dish_price}</p>
                                    <div className='to-basket-button'>
                                        <AddToBasket price={desserts.dish_price}/>
                                    </div>
                                </div>
                            )}
                            </div>
                            <div className='dish-2'>
                            {desserts_2.map((desserts) =>
                                <div className='dishbox' key={desserts.dish_name}>
                                    <img src={desserts.dish_img} alt=''/>
                                    <h3>{desserts.dish_name}</h3>
                                    <p>${desserts.dish_price}</p>
                                    <div className='to-basket-button'>
                                        <AddToBasket price={desserts.dish_price}/>
                                    </div>
                                </div>
                            )}
                            </div>
                    </div>
                </section>
            </article>
        </main>
    </>
  )
}
