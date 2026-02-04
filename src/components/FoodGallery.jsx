import React from 'react'
import CategoryBlock from './CategoryBlock'




function FoodGallery({ products }) {

  const categories = [...new Set(products.map(product => product.category))];
  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };
  
  return (
    <div>
        {
          categories.map((category) => (
            <CategoryBlock key={category} filteredProducts={getProductsByCategory(category)} category={category} />
          ))
        }
       

    </div>
  )
}

export default FoodGallery