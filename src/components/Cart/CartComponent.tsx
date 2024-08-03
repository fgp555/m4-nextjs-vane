'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const ShoppingCart = () => {
  const [cart, setCart] = useState<number[]>([]); // Estado para almacenar los IDs de los productos

  const addToCart = (productId: number) => {
    setCart([...cart, productId]); // Agregar el ID del producto al carrito
  };

  return (
    <div>
      {/* Aquí va tu contenido de productos */}
      <button onClick={() => addToCart(1)}>Agregar Producto 1</button>
      <button onClick={() => addToCart(2)}>Agregar Producto 2</button>
      {/* Botón para ver el carrito */}
      <Link href={'/Carrito'}> <button>Ver Carrito</button> </Link>
    </div>
  );
};

export default ShoppingCart;

