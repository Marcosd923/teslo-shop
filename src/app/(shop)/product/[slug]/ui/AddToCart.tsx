"use client";

import { useState } from "react";

import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { Product, Size } from "@/interfaces";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size | undefined>();

  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    if (!size) return;
    console.log({ size, quantity });
  };

  return (
    <>
      {/* Selector de Tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      {/* Selector de cantidad */}

      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
