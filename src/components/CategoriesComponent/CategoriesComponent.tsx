import React, { useState, useEffect } from 'react';
import { FunctionFetch } from '../../utils/FunctionFetch';

interface ICardProps {
  id: number;
  categoryId: number;
  // Agrega aquí las demás propiedades de tus productos
}

interface ICategory {
  name: string;
  id: number;
}

// Mapea nombres de categorías a sus respectivos IDs
const categoryMap: Record<string, number> = {
  Smartphones: 1,
  Laptops: 2,
  Tablets: 3,
  Headphones: 4,
  Cameras: 5,
  Printers: 6,
  Monitors: 7,
  Storage: 8,
  Accessories: 9,
};

const useFilteredProducts = (categoryNames: string[]) => {
  const [products, setProducts] = useState<ICardProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ICardProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await FunctionFetch("http://localhost:4000/products");
      setProducts(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const categoryIds = categoryNames.map(name => categoryMap[name]);
    const filtered = products.filter(product => categoryIds.includes(product.categoryId));
    setFilteredProducts(filtered);
  }, [products, categoryNames]);

  return filteredProducts;
};

export default useFilteredProducts;