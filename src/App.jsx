import React from 'react'
import FoodGallery from './components/FoodGallery';


const products = [
  // 🍔 Burgers
  {
    name: "Classic Beef Burger",
    price: 1200,
    inStock: true,
    category: "burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    name: "Double Cheese Burger",
    price: 1500,
    inStock: true,
    category: "burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
  },
  {
    name: "Chicken Burger",
    price: 1100,
    inStock: false,
    category: "burger",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
  },
  {
    name: "BBQ Burger",
    price: 1400,
    inStock: true,
    category: "burger",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500",
  },

  // 🥗 Salads
  {
    name: "Healthy Green Salad",
    price: 900,
    inStock: true,
    category: "salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },
  {
    name: "Avocado Salad",
    price: 1100,
    inStock: true,
    category: "salads",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
  },
  {
    name: "Greek Salad",
    price: 1000,
    inStock: false,
    category: "salads",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500",
  },
  {
    name: "Fresh Veggie Salad",
    price: 850,
    inStock: true,
    category: "salads",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500",
  },

  // 🍟 Snacks
  {
    name: "Crispy Fries",
    price: 600,
    inStock: true,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500",
  },
  {
    name: "Chicken Nuggets",
    price: 750,
    inStock: true,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500",
  },
  {
    name: "Spring Rolls",
    price: 700,
    inStock: false,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=500",
  },
  {
    name: "Onion Rings",
    price: 650,
    inStock: true,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1608835291093-e2c5f0d3b1da?w=500",
  },

  // 🍲 Soups
  {
    name: "Chicken Soup",
    price: 850,
    inStock: true,
    category: "soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500",
  },
  {
    name: "Mushroom Soup",
    price: 900,
    inStock: true,
    category: "soups",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500",
  },
  {
    name: "Tomato Soup",
    price: 800,
    inStock: false,
    category: "soups",
    image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=500",
  },
  {
    name: "Vegetable Soup",
    price: 780,
    inStock: true,
    category: "soups",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=500",
  },
];



function App() {
  return (
    <div>
      <FoodGallery products={products} />
    </div>
  )
}

export default App