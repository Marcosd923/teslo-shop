"use client";
import Image from "next/image";

import { useCartStore } from "@/store";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import { useEffect, useState } from "react";
import Link from "next/link";

export const ProductsInCart = () => {
  const [loaded, setloaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setloaded(true);
  });

  if (!loaded) {
    return <p>Cargando..</p>;
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              {product.size}-{product.title}
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={1}
              onQuantityChanged={(value) => console.log(value)}
            />

            <button className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
