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

import greek_salad from '../icons_assets/greek salad.jpg'

    export const menu = [
    {
        dish_img: salmon,
        dish_category: 'main courses',
        dish_rows: 1,
        dish_name: 'Cedar-Plank Salmon',
        dish_description:'Cedar-plank salmon is a fish delicacy that involves cooking salmon on cedar planks, a unique method of cooking which is believed to have been originally practiced by the Native Americans who mostly used Western red cedar',
        dish_price: 14.99,
        dish_link: "/menu/main-courses/cedar-plank-salmon"
    },
    {
        dish_img:gado,
        dish_category: 'main courses',
        dish_rows: 1,
        dish_name: 'Gado Gado',
        dish_description:'Gado-gado is an Indonesian salad made with several steamed vegetables and also accompanied by hard-boiled eggs, boiled potatoes, fried tofu, tempe, as well as chopped lontong or ketupat (rice cake), served with a spicy peanut sauce dressing',
        dish_price: 11.99,
        dish_link: "/menu/main-courses/gado-gado"
    },
    {
        dish_img:aioli,
        dish_category: 'main courses',
        dish_rows: 1,
        dish_name: 'Grand Aioli',
        dish_description:'Grand aioli is a Provençal tradition. Aioli is the deliciously thick garlicky sauce invented in the South of France, and a grand aioli is a platter style meal with all sorts of fresh "dippables" surrounding the aioli like crisp veggies, eggs, fish, etc.',
        dish_price: 19.99,
        dish_link: "/menu/main-courses/aioli"
    },
    {
        dish_img:pizza,
        dish_category: 'main courses',
        dish_rows: 2,
        dish_name: 'Supreme Pizza',
        dish_description:'The supreme pizza, or as we call it here in the Northeast, pizza with the works, is the ultimate pizza and features six classic toppings. The supreme pizza is traditionally topped with pepperoni, sausage, meatballs, mushrooms, green bell peppers, and onions.',
        dish_price: 9.99,
        dish_link: "/menu/main-courses/supreme-pizza"
    },
    {
        dish_img:lasagna,
        dish_category: 'main courses',
        dish_rows: 2,
        dish_name: 'Ravioli Lasagna',
        dish_description:'Ravioli Lasagna recipe aka Lazy Lasagna is a delicious baked ravioli casserole. It features meat sauce layers and plenty of gooey mozzarella cheese.',
        dish_price: 14.99,
        dish_link: "/menu/main-courses/ravioli-lasagna"
    },
    {
        dish_img:chicken,
        dish_category: 'main courses',
        dish_rows: 2,
        dish_name: 'Lemon Chicken',
        dish_description:'In Canadian- and British-Chinese cuisine, Lemon Chicken usually consists of pieces of chicken meat that are sautéed or battered and deep-fried and coated with a thick, sweet lemon-flavored sauce.',
        dish_price: 10.99,
        dish_link: "/menu/main-courses/lemon-chicken"
    },
    {
        dish_img:bruschetta,
        dish_category: 'appetizers',
        dish_rows: 1,
        dish_name: 'Bruschetta',
        dish_description:"Bruschetta is made using the only essential oil that matters- olive oil. It's also made with balsamic vinegar, which has mad antioxidants. Bruschetta is made with a ton of garlic. If you want to low-key over a vampire, offer them some bruschetta.",
        dish_price: 9.99,
        dish_link: "/menu/main-courses/bruschetta"
    },
    {
        dish_img:shrimp,
        dish_category: 'appetizers',
        dish_rows: 1,
        dish_name: 'Party Shrimp',
        dish_description:'Party Shrimp is a quick and easy finger food. Shrimp is marinated in Italian seasoning and broiled for 10 minutes. With some pre planning and prepping, it is a 10 minute recipe, a must have on a party menu.',
        dish_price: 12.99,
        dish_link: "/menu/main-courses/party-shrimp"
    },
    {
        dish_img:cheese_fries,
        dish_category: 'appetizers',
        dish_rows: 1,
        dish_name: 'Cheese Fries',
        dish_description:'Cheese fries are French fries covered in a cheese sauce. Of course, you can always add other toppings like chili for chili cheese fries. But the classic cheese fry is simply sauce and potatoes.',
        dish_price: 7.99,
        dish_link: "/menu/main-courses/cheese-fries"
    },
    {
        dish_img:meatballs,
        dish_category: 'appetizers',
        dish_rows: 2,
        dish_name: 'Glazed Meatballs',
        dish_description:'These orange glazed meatballs are made with a citrusy mix of marmalade, vinegar, and sesame oil, served alongside tender vegetables, for a full meal!',
        dish_price: 16.99,
        dish_link: "/menu/main-courses/glazed-meatballs"
    },
    {
        dish_img: pepperoni,
        dish_category: 'appetizers',
        dish_rows: 2,
        dish_name: 'Pepperoni Pizza Loaf',
        dish_description:"Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.",
        dish_price: 12.99,
        dish_link: "/menu/main-courses/pepperoni-pizza-loaf"
    },
    {
        dish_img:pretzels,
        dish_category: 'appetizers',
        dish_rows: 2,
        dish_name: 'Soft Beer Pretzels',
        dish_description:"These soft beer pretzels are made with beer instead of water, giving the pretzel an extra layer of hoppy wheat flavor. The beer flavor isn't super strong, but it's pronounced enough to give the pretzel a deeper, more complex flavor than traditionally made soft pretzels.",
        dish_price: 4.99,
        dish_link: "/menu/main-courses/soft-beer-pretzels"
    },
    {
        dish_img:lemon_desert,
        dish_category: 'desserts',
        dish_rows: 1,
        dish_name: 'Lemon Dessert',
        dish_description:'Lemon cheesecake combines the creaminess of cheesecake with the zing of lemon. The cheesecake filling is often flavored with lemon juice and zest and set atop a graham cracker crust.',
        dish_price: 4.99,
        dish_link: "/menu/main-courses/lemon-dessert"
    },
    {
        dish_img:cake,
        dish_category: 'desserts',
        dish_rows: 1,
        dish_name: 'Caramel Apple Cake',
        dish_description:'Kick off apple season with this delicious Caramel Apple Cake! A spice cake made with diced apples, paired with a caramel buttercream, and caramel drizzle.',
        dish_price: 23.99,
        dish_link: "/menu/main-courses/caramel-apple-cake"
    },
    {
        dish_img:pie,
        dish_category: 'desserts',
        dish_rows: 1,
        dish_name: 'Fudge Pie',
        dish_description:'A fudge pie is a chocolate pie made with eggs and baked. It has a gooey chocolate center and a crusty chocolate top like a brownie. This gooey chocolate fudge pie tastes like a melted brownie!',
        dish_price: 12.99,
        dish_link: "/menu/main-courses/fudge-pie"
    },
    {
        dish_img:cobbler,
        dish_category: 'desserts',
        dish_rows: 2,
        dish_name: 'Chocolate Cobbler',
        dish_description:"Also known as chocolate pudding cake, chocolate cobbler is two desserts in one: a layer of tender cake mixed up with warm, pudding-like fudge. It's also made with basic pantry staples, so you can whip it up at a moment's notice or whenever a serious chocolate craving hits.",
        dish_price: 5.99,
        dish_link: "/menu/main-courses/chocolate-cobbler"
    },
    {
        dish_img:mississippi,
        dish_category: 'desserts',
        dish_rows: 2,
        dish_name: 'Mississippi Cake',
        dish_description:'Mississippi Mud Cake is a classic Southern sheet cake filled with marshmallows and chopped pecans and covered in a rich chocolate frosting. This particular recipe offers a cupcake variation as well as a shortcut version.',
        dish_price: 4.99,
        dish_link: "/menu/main-courses/mississippi-cake"
    },
    {
        dish_img:chess_pie,
        dish_category: 'desserts',
        dish_rows: 2,
        dish_name: 'Chess Pie',
        dish_description:'Chess Pie, a very sweet egg-rich pie, popular in Tennessee and other parts of the southern United States, made with a simple recipe of sugar, eggs, cornmeal, and butter with vanilla. Some recipe variations add brown sugar, chocolate, lemon juice, or nuts as well.',
        dish_price: 4.99,
        dish_link: "/menu/main-courses/chess-pie"
    },
    {
        dish_img:greek_salad,
        dish_category: 'salad',
        dish_rows: 1,
        dish_name: 'Greek Salad',
        dish_description:'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch.',
        dish_price: 12.99,
        dish_link: "/menu/main-courses/greek_salad"
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
                                        <AddToBasket LinkTo={mainCourse.dish_link}/>
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
                                        <AddToBasket LinkTo={mainCourse.dish_link}/>
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
                                        <AddToBasket LinkTo={appetizers.dish_link}/>
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
                                        <AddToBasket LinkTo={appetizers.dish_link}/>
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
                                        <AddToBasket LinkTo={desserts.dish_link}/>
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
                                        <AddToBasket LinkTo={desserts.dish_link}/>
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
