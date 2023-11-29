import { Contador } from "../contador";
import Image from "next/image";

interface Props {
  id: number;
  src: string;
  nome: string;
  preco: number;
}
export function Item({ id, src, nome, preco }: Props) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        height={200}
        width={260}
        className="rounded-t-lg h-44 w-full object-cover"
        src={src}
        alt="Imagem"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {nome}
        </h5>
      </div>
      <div className="flex justify-between px-4 items-center mb-2">
        <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </p>
        <Contador id={id} />
      </div>
    </div>
  );
}
