import './App.css'
import { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import coffeeone from './assets/coffee1.png'
import coffeeTwo from './assets/coffee2.png'
import coffeeThree from './assets/coffee3.png';
import mocha from './assets/mocha-shake.png'
import lavender from './assets/lavender-shake.png'
import caramel from './assets/caramel-shake.png'
import BlueIce from './assets/BlueIce.png'
import Chocolate from './assets/chocolate-shake.png'
import meoShake from './assets/meo-shake.png'
import choc from './assets/Choc-shake.png'
import oreo from './assets/oreo-shake.png'
import StrawBery from  './assets/strawberry-shake.png'

import {Text} from './Components/Text/Text'

import ItemCard from './Components/Card/ItemCard'
import BlogsContainer from './Components/Card/BlogsContainer'
import Categories from './Components/Category/Categories'
import MilkshakeStock from './Components/MilkshakeCard/MilkshakeStock'
import Footer from './Components/Footer/Footer'
import Hero from './Components/HeroSection/Hero'


function App() {
  const [milkshake, setMilkshake] = useState([
    { imgLink: mocha, name: 'Mocha Shake', price: '20.00'},
    { imgLink: lavender, name: 'Lavender Shake', price: '20.00'},
    { imgLink: caramel, name: 'Caramel Shake', price:'20.00' },
    { imgLink: BlueIce, name: 'Blue Ice Shake', price: '20.00'},
    { imgLink: Chocolate, name: 'Chocolate Shake', price:'20.00' },
    { imgLink: meoShake, name: 'Meo Shake', price:'20.00'},
    { imgLink: choc, name: 'Choc Shake', price: '20.00'},
    { imgLink: oreo, name: 'Oreo Shake', price: '20.00' },
    { imgLink: StrawBery, name: 'StrawBerry Shake', price: '20.00'},
  ])
  
  const [blog,setBlog]=useState([
    {imgLink: coffeeone , name : 'Coffee Connoisseu',description:'Coffee is more than just a morning beverage, its an experience that brings people together. From carefully selected beans grown in rich soils to the precise aromas and flavors , every cup tells a story.', key:1},
    {imgLink: coffeeTwo , name : 'Coffee Connoisseu',description:'Whether you enjoy a bold expresso, a creamy cuppuccino or smooth latem understanding  can transform the way you drink it. Learn how different roastinbg levels, grind sizes, and brewing influence taste.', key:2},
    {imgLink: coffeeThree, name : 'Coffee Connoisseu',description:'Every great cup of coffee begins with passion and craftmaship.In this blog we share insighrs into coffee culture, brewing equipment, seaasonal drink recipes and science behind extractingrich flavours.',keys:3},
  ])
  

  return (
    <>
     <div id='app-container'>
        <div id='scrollable'>
          <Navbar/>
          <div>
            <Hero/>
          </div>
           <div id='milkshakesText'>
            
            <Categories/>
             <Text variant='h2'>TOP MILK SHAKES</Text>
              <Text variant='p'>Explore The Recent Most Bought Shakes This Week</Text>
            <MilkshakeStock  milkshakes={milkshake}/>

           </div>
           
           <div>
              <Text variant='h2'>LATEST BLOGS</Text>
              <Text variant='p'>Explore The Recent Most Bought Shakes This Week</Text>
            <BlogsContainer blogs={blog}/>
            </div>
          
        </div>
        <Footer/>
       

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default App
      