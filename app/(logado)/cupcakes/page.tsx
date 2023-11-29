"use client";
import Aside from "@/components/aside";
import { Item } from "@/components/item";
import { Categoria, produtos } from "constants/produtos";

export default function Cupcakes() {
  return (
    <div>
      <Aside />
      <div className="p-4 ml-64 mt-14 bg-gray-300 h-screen">
        <div className="grid gap-4 mb-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {produtos
            .filter((product) => product.categoria === Categoria.Cupcake)
            .map((item) => (
              <Item
                key={item.id}
                id={item.id}
                src={item.image}
                nome={item.name}
                preco={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
