import React from 'react'
import { menu } from './Menu'

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

export default function Dish() {

  return (
    <div>
        <main>
            <div className='photo-section'>
                <img src='' alt=''/>
            </div>

            <article>
              <section>

              </section>
            </article>
        </main>
    </div>
  )
}


export function Salmon() {
  return (
    <div>
      <main>
            <div className='photo-section'>
                <img src={salmon} alt=''/>
            </div>

            <article>
              <section>
                <div className='dish-info'>
                  <div className='dish-name_price'>
                    <h3>{menu[0].dish_name}</h3>
                    <h4>{menu[0].dish_price}</h4>
                  </div>
                    <p>{menu[0].dish_description}</p>
                </div>
              </section>
            </article>
        </main>
    </div>
  )
}
