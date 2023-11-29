import { useCart } from "hooks/useCart";
import { Contador } from "../contador";
import { GoTrash } from "react-icons/go";
import Image from "next/image";

interface Items {
  id: number;
  nome: string;
  preco: number;
  src: string;
  amount: number;
}

export function ItemCarrinho({ id, src, preco, nome, amount }: Items) {
  const { removeItemFromCart } = useCart();
  return (
    <>
      <div className="flex gap-4">
        <div className="flex gap-4 flex-row w-full">
          <Image
            width={260}
            height={200}
            className="rounded-md border-2 border-gray-700"
            src={src}
            alt=""
          />
          <div>
            <p>{nome}</p>
            <div className="flex flex-row gap-1">
              <Contador id={id} initialAmount={amount} isCart />
              <button
                className="inline-flex items-center justify-between p-1 rounded-md cursor-pointer dark:hover:text-red-600
                 dark:text-gray-400 dark:bg-slate-300 dark:hover:bg-gray-300"
                onClick={() => removeItemFromCart(id)}
              >
                <GoTrash /> Remover
              </button>
            </div>
          </div>
        </div>
        <div className="font-bold">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </div>
      </div>
      <p className="border-b border-gray-300"></p>
    </>
  );
}
