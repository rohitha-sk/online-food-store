import React, { useState } from 'react'

function Item() {

  const[showDetails, setShowDetails] = useState(false);

  const name = "Potatoes"
  const price = "$13.00"
  const inStock = true

  return (
    <div className="flex-1 flex relative border-4 border-yellow-500" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      <img src='https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500' className="w-full h-full object-cover"/>
    
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`flex flex-col items-center transition-all duration-500 ease-out transform ${showDetails ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
          <h2 className="text-yellow-400 text-2xl font-bold uppercase tracking-widest">{name}</h2>
          <p className="text-yellow-400 text-xl mt-2">{price}</p>
          <p className={`text-sm mt-2 ${inStock ? 'text-green-400' : 'text-red-400'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          <button className="mt-4 px-6 py-2 border-2 border-yellow-400 text-yellow-400 font-bold uppercase hover:bg-yellow-400 hover:text-black transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default Item