import { BsCartPlus } from "react-icons/bs";

export function Item({
  src,
  nome,
  preco,
}: {
  src: string;
  nome: string;
  preco: number;
}) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
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
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
          <BsCartPlus size={24} />
        </button>
      </div>
    </div>
  );
}
