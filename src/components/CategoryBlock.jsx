import React from 'react'

import Item from './Item'

function CategoryBlock({filteredProducts, category}) {

  return (
    <div className="bg-black py-25 px-10 pb-0">
      
      <h1 className="text-white text-6xl pb-8 font-bold mb-8 text-center italic font-sans">{category.toUpperCase()}</h1>
      <div className="flex flex-row  justify-between gap-5 h-[360px]">
        {filteredProducts.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryBlock