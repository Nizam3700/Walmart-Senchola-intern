import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Compounds/header/Header';
import Card_img from './Compounds/card_img/Card_img';
import ReviewCard from './Compounds/cardExample/ReviewCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <div className="cards">
{/* card1  */}
     <Card_img source_img = "https://images.samsung.com/in/smartphones/galaxy-z-flip5/buy/product_color_blue.png?imwidth=480" card_Title = "Galaxy  flip 5" Text = "Galaxy Flip 5 | Yellow | Gray | Blue | Green 256GB|8GB"  btn_text = "Add to Cart" btn_buy = "Buy Now" btn_off = "₹98,990.00" buy = "primary" off = "outline-info" add = "warning"/>
{/* card2  */}
     <Card_img source_img = "https://images.samsung.com/in/smartphones/galaxy-z-fold5/buy/product_color_gray.png?imwidth=480" card_Title = "Galaxy Z Fold 5 " Text = "Galaxy Z Fold5 | Grey | Blue | Cream 256GB| 12GB"  btn_text = "Add to done" btn_buy = "Buy Now" btn_off = "₹1,54,999.00" buy = "primary" off = "outline-info" add = "warning"/>
{/* card3 */}
     <Card_img source_img = "https://lh3.googleusercontent.com/spp/AE_ITi3vCy4qGIeJQZQqRvW3cC3n4VQZPdouZn6uP39Igjqh8wTTs_-c5IF7F2IwqbJVbCXqjJC-YnaINQ4eEYi9vofCWHF359GpTVsz8_zHgJDkdXUxh-wOoN6t6heC1-j0jfxp1Ay2hGlkw9H3NoNLFymTTLflVjeaSEN_S3GvrUsQi7oz6oLZbijm4FveFWzZZIFKBpxV_Q=s512-rw-pd-pc0x00ffffff" card_Title = "OnePlus 11R 5G 128 GB, 8 GB RAM" Text = "128 GB, 8 GB RAM, Galatic Silver, Mobile Phone"  btn_text = "Add to Cart" btn_buy = "Out of Stock" btn_off = "₹87,999" buy = "danger" off = "outline-info" add = "outline-warning"/>
{/* card4 */}
     <Card_img source_img = "https://lh3.googleusercontent.com/spp/AE_ITi2FO5atbiHXHQbhrfCVI8VtK6TUSV4xyMU4Jo4z3qYQqouP9z9xi0oxO2zTVx9txhVhcXbGQ0IGMB0fIQ6iSrb4Rf6bVb2uVyRWzsteTbE0FxS8yIbfYUrQJhJ0zgUCNaegWw-1c95BuXkp7drGATf1Qhjqs9k-Wn69m9v--id1CfdxpnjnGEG9_rX6X2gBsvJmFKsi6oA=s512-rw-pd-pc0x00ffffff" card_Title = "Samsung Galaxy A23 5G 128 GB" Text = "5G 128 GB, 6 GB RAM, Awesome Blue, Mobile Phone"  btn_text = "Add to Cart" btn_buy = "Out of Stock" btn_off = "₹23,990" buy = "danger" off = "outline-info" add = "outline-warning"/>
     </div>

     <div>

     <ReviewCard images = "https://www.mobilepixels.us/cdn/shop/articles/close_laptop_and_use_monitor.webp?v=1678353293&width=2048"
     title = "Apple mac book" text = "walmart is good service provider and quick delivery"
     feedback = "⭐⭐⭐⭐"/>
     </div>
    </>
  )
}

export default App;
