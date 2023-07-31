import React from 'react'
import menu_img from '../icons_assets/restaurant.jpg'
import { DishCategoryButton } from './Components'
import { Link } from 'react-router-dom'
import { AddToBasket } from './Components'
import '../style/Menu.css'

import salmon from '../icons_assets/Menu/Main courses/Salmon.webp'
import gado from '../icons_assets/Menu/Main courses/GadoGado.webp'
import aioli from '../icons_assets/Menu/Main courses/Grand-Aioli.webp'

import bruschetta from '../icons_assets/Menu/Appetizers/bruchetta.jpg'
import shrimp from '../icons_assets/Menu/Appetizers/Party-Shrimp.jpg'
import cheese_fries from '../icons_assets/Menu/Appetizers/cheese-fries.jpg'

import lemon_desert from '../icons_assets/Menu/Desserts/lemon dessert.jpg'
import cake from '../icons_assets/Menu/Desserts/Caramel Apple Cake.jpg'
import pie from '../icons_assets/Menu/Desserts/Fudge pie.jpg'


    const menu = [
    {
        dish_img: salmon,
        dish_category: 'main courses',
        dish_name: 'Cedar-Plank Salmon',
        dish_description:'Cedar',
        dish_price: 14.99
    },
    {
        dish_img:gado,
        dish_category: 'main courses',
        dish_name: 'Gado Gado',
        dish_description:'Gado Gado ...',
        dish_price: 11.99
    },
    {
        dish_img:aioli,
        dish_category: 'main courses',
        dish_name: 'Grand Aioli',
        dish_description:'Grand Aioli ...',
        dish_price: 19.99
    },
    {
        dish_img:bruschetta,
        dish_category: 'appetizers',
        dish_name: 'Bruschetta',
        dish_description:'Bruschetta ...',
        dish_price: 9.99
    },
    {
        dish_img:shrimp,
        dish_category: 'appetizers',
        dish_name: 'Party Shrimp',
        dish_description:'Party Shrimp ...',
        dish_price: 12.99
    },
    {
        dish_img:cheese_fries,
        dish_category: 'appetizers',
        dish_name: 'Cheese Fries',
        dish_description:'Cheese Fries ...',
        dish_price: 7.99
    },
    {
        dish_img:lemon_desert,
        dish_category: 'desserts',
        dish_name: 'Lemon Desert',
        dish_description:'Lemon Desert ...',
        dish_price: 4.99
    },
    {
        dish_img:cake,
        dish_category: 'desserts',
        dish_name: 'Caramel Apple Cake',
        dish_description:'Caramel Apple Cake ...',
        dish_price: 23.99
    },
    {
        dish_img:pie,
        dish_category: 'desserts',
        dish_name: 'Fudge Pie',
        dish_description:'Fudge Pie ...',
        dish_price: 12.99
    },];

    const mainCourse = menu.filter((main) => main.dish_category === "main courses")
    const appetizers = menu.filter((main) => main.dish_category === "appetizers")
    const desserts = menu.filter((main) => main.dish_category === "desserts")

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
                    <div className='main-courses-section'>
                            {mainCourse.map((mainCourse) =>
                                <div className='main-courses-dish' key={mainCourse.dish_name}>
                                    <img src={mainCourse.dish_img} alt=''/>
                                    <h3>{mainCourse.dish_name}</h3>
                                    <p>${mainCourse.dish_price}</p>
                                    <AddToBasket price={mainCourse.dish_price}/>
                                </div>
                            )}
                    </div>
                </section>
            </article>
        </main>
    </>
  )
}

export function Appetizers() {
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
                    <div className='main-courses-section'>
                            {appetizers.map((appetizers) =>
                                <div className='main-courses-dish' key={appetizers.dish_name}>
                                    <img src={appetizers.dish_img} alt=''/>
                                    <h3>{appetizers.dish_name}</h3>
                                    <p>${appetizers.dish_price}</p>
                                    <AddToBasket price={appetizers.dish_price}/>
                                </div>
                            )}
                    </div>
                </section>
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
                    <div className='main-courses-section'>
                            {desserts.map((desserts) =>
                                <div className='main-courses-dish' key={desserts.dish_name}>
                                    <img src={desserts.dish_img} alt=''/>
                                    <h3>{desserts.dish_name}</h3>
                                    <p>${desserts.dish_price}</p>
                                    <AddToBasket price={desserts.dish_price}/>
                                </div>
                            )}
                    </div>
                </section>
            </article>
        </main>
    </>
  )
}
