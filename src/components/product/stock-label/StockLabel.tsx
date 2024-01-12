"use client";

import { titleFont } from "@/config/font";
import { useEffect, useState } from "react";
import { getStockBySlug } from "../../../actions/products/get-stock-by-slug";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setstock] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setstock(inStock);
    setisLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-ping`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
