"use client";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePayment, MdOutlineAttachMoney } from "react-icons/md";
import { FaPix } from "react-icons/fa6";
import { RiBillLine } from "react-icons/ri";
import { useCart } from "hooks/useCart";
import { produtos } from "../../../constants/produtos";
import { ItemCarrinho } from "@/components/itemCarrinho";

export default function Carrinho() {
  const frete = 10;
  const { cart } = useCart();
  const checkoutItens = cart.map((cartItem) => {
    const produto = produtos.find((bolos) => bolos.id === cartItem.id)!;
    return {
      ...produto,
      amount: cartItem.amount,
    };
  });

  const totalPagar = checkoutItens.reduce(
    (total, produto) => total + produto.price * produto.amount,
    0
  );
  const totalComFrete = totalPagar + frete;

  return (
    <div className="bg-gray-300 h-screen w-screen">
      <div className="flex mx-40 mt-14 justify-around max-[1020px]:flex-wrap">
        <div className="dados_usuario mt-2 flex gap-3 flex-col mr-6 w-full">
          <h1 className="text-slate-900 font-bold text-lg">
            Complete seu pedido
          </h1>
          <div className="endereco_entrega bg-slate-100 p-5 rounded-md">
            <header className="flex items-center pb-3">
              <IoLocationOutline className="w-8 text-lg text-blue-700" />
              <div>
                <h1 className="text-slate-900">Endereço de entrega</h1>
                <p className=" text-slate-500">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </header>
            <form>
              <div className="Cep relative z-0 w-full mb-6 group">
                <input
                  name="cep"
                  pattern="[0-9]{5}-[0-9]{3}"
                  className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Cep (12345-678)
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="rua"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Rua
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    name="bairro"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Bairro
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    name="cidade"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Cidade
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-sm mb-6 group">
                  <input
                    name="numero"
                    className="block py-2.5 px-0 w-sm text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Número
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    name="complemento"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Complemento
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="forma_pagamento bg-slate-100 p-5 rounded-md">
            <header className="flex items-center pb-3">
              <MdOutlineAttachMoney className="w-8 text-[25px] text-blue-600" />
              <div>
                <h1 className="text-slate-900">Forma De Pagamento</h1>
                <p className=" text-slate-500">
                  Escolha a forma de pagamento desejada
                </p>
              </div>
            </header>
            <ul className="grid w-full gap-6 md:grid-cols-3">
              <li className="cartao">
                <input
                  type="radio"
                  id="cartao"
                  value=""
                  name="pagamento"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="cartao"
                  className="inline-flex items-center justify-between w-full p-5 border-2 rounded-lg cursor-pointer 
                dark:hover:text-gray-600 dark:border-gray-400 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-600 
                peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-slate-200 dark:hover:bg-gray-300"
                >
                  <MdOutlinePayment className="text-blue-500 mr-1" />
                  <div className="block w-full text-sm font-semibold">
                    Cartão de Crédito/Débito
                  </div>
                </label>
              </li>
              <li className="pix">
                <input
                  type="radio"
                  id="pix"
                  value=""
                  name="pagamento"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="pix"
                  className="inline-flex items-center justify-between w-full p-5 border-2 rounded-lg cursor-pointer 
                dark:hover:text-gray-600 dark:border-gray-400 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-600 
                peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-slate-200 dark:hover:bg-gray-300"
                >
                  <FaPix className="text-blue-500 mr-1" />
                  <div className="block w-full text-sm font-semibold">Pix</div>
                </label>
              </li>
              <li className="boleto">
                <input
                  type="radio"
                  id="boleto"
                  value=""
                  name="pagamento"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="boleto"
                  className="inline-flex items-center justify-between w-full p-5 border-2 rounded-lg cursor-pointer 
                dark:hover:text-gray-600 dark:border-gray-400 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-600 
                peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-slate-200 dark:hover:bg-gray-300"
                >
                  <RiBillLine className="text-blue-500 mr-1" />
                  <div className="block w-full text-sm font-semibold">
                    Boleto
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="produtos  mt-2 flex gap-3 flex-col w-full">
          <h1 className="text-slate-900 font-bold text-lg">
            Produtos Selecionados
          </h1>
          <div className="produtos_selecionados flex bg-slate-100 p-5 rounded-md flex-col gap-5">
            {checkoutItens.map((produto) => (
              <ItemCarrinho
                id={produto.id}
                src={produto.image}
                preco={produto.price}
                nome={produto.name}
                amount={produto.amount}
              />
            ))}
            <footer>
              <div className="flex justify-between">
                <p>Total de itens</p>
                <p>{checkoutItens.length}</p>
              </div>
              <div className="flex justify-between">
                <p>Frete</p>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(frete)}
                </p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Total a pagar</p>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalComFrete)}
                </p>
              </div>
              <a
                href="/entrega"
                className=" flex justify-center w-full bg-green-400 hover:bg-green-500 rounded-lg font-sans font-medium"
              >
                Confirmar Pedido
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
