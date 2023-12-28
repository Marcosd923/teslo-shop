import { getPaginatedProductsWithImages } from "@/actions";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";

export default async function Home() {
  const { products } = await getPaginatedProductsWithImages();

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
