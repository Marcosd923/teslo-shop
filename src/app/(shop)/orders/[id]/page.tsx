import Title from "@/components/ui/title/Title";
import Link from "next/link";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function OrdersByIdPage({ params }: Props) {
  const { id } = params;

  //to do : verificar(ver si esta logueado, o si es admin)
  // redirect
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-10">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex item-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                { "bg-red-600": false },
                { "bg-green-700": true }
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2 py-2">Pendiente de pago</span> */}
              <span className="mx-2 my-2">Orden pagada</span>
            </div>

            {/* Items */}

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
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
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout - Resumen de compra*/}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Marcos Daut</p>
              <p>Av. siempre viva</p>
              <p>Col. Centro</p>
              <p>Pergamino</p>
              <p>Buenos aires</p>
              <p>Cod posta: 2400</p>
              <p>Tel: 2477 336490</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">1 Articulo</span>
              <span>Subtotal</span>
              <span className="text-right">$ 75</span>
              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>
              <span className="text-2xl mt-5">Total:</span>
              <span className="text-2xl mt-5 text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex item-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  { "bg-red-600": false },
                  { "bg-green-700": true }
                )}
              >
                <IoCardOutline size={30} />
                {/* <span className="mx-2 py-2">Pendiente de pago</span> */}
                <span className="mx-2 my-2">Orden pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
