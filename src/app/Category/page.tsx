'use client'
import React, { useState } from 'react';
import DetailCategorie from '../../components/CategoriesComponent.tsx/Categories';

// Define the CategoryIdProps type
interface CategoryIdProps {
  categoryId: number;
}

const ParentComponent: React.FC<CategoryIdProps> = ({ categoryId = 0 }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(categoryId);

  const handleCategoryChange = (id: number) => {
    setSelectedCategoryId(id);
  };

  return (
    <div className='justify-center text-center m-9'>
      <div className='justify-center'>
        <button className='button-primary bg-blue-700 hover:bg-green-500 rounded-s mb-6 p-2' onClick={() => handleCategoryChange(0)}>Todos los Productos</button>
        <button className='button-primary bg-blue-700 hover:bg-green-500 mb-6 p-2' onClick={() => handleCategoryChange(1)}>Celulares</button>
        <button className='button-primary bg-blue-700 hover:bg-green-500 mb-6 p-2' onClick={() => handleCategoryChange(2)}>Laptops</button>
        <button className='button-primary bg-blue-700 hover:bg-green-500 mb-6 p-2' onClick={() => handleCategoryChange(3)}>Tablets</button>
        <button className='button-primary bg-blue-700 hover:bg-green-500 mb-6 p-2' onClick={() => handleCategoryChange(4)}>Smartwatch</button>
        <button className='button-primary bg-blue-700 hover:bg-green-500 mb-6 p-2' onClick={() => handleCategoryChange(5)}>Airpods</button>
        <button className='button-primary bg-blue-700 hover:bg-green-500 rounded-e mb-6 p-2' onClick={() => handleCategoryChange(6)}>Accessories</button>
      </div>
      <DetailCategorie categoryId={selectedCategoryId} />
    </div>
  );
};

export default ParentComponent;
