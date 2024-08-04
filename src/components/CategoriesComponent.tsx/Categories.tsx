'use client'
import React, { useEffect, useState } from "react";
import { FunctionFetch } from "@/utils/FunctionFetch";
import {Card} from "../Card"

interface CategoryIdProps {
  categoryId: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number; 
}

const DetailCategorie: React.FC<CategoryIdProps> = ({ categoryId }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products: Product[] = await FunctionFetch("https://gio.1rodemayo.com/products");
        const foundProduct = products.find(product => product.categoryId === categoryId); 
        setProduct(foundProduct || null);
        console.log(products);
        console.log(foundProduct); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, [categoryId]); 

  if (product === null) {
    return ;
  }

  return (
    <div>

      <Card image={""} key={product.id} {...product}/>
    </div>
  );
};

export default DetailCategorie;
