"use client";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { BsCartPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

interface Props {
  id: number;
  initialAmount?: number;
  isCart?: boolean;
}

export function Contador({ id, initialAmount = 1, isCart }: Props) {
  const [amount, setAmount] = useState(initialAmount);

  const { addItem, removeItem } = useCart();

  function increaseAmount() {
    setAmount((state) => state + 1);

    if (isCart) {
      addItem(id, 1);
    }
  }

  function decreaseAmount() {
    if (amount === 0) {
      return;
    }

    setAmount((state) => state - 1);

    if (isCart) {
      removeItem(id, 1);
    }
  }

  function addToCart() {
    addItem(id, amount);
  }
  return (
    <div className="flex flex-row items-center content-center gap-1">
      <FaPlus
        className="w-6 h-4 rounded-md bg-gray-600 text-white hover:cursor-pointer select-none"
        onClick={() => {
          increaseAmount();
        }}
      />
      {isCart ? (
        <p className="text-black">{amount}</p>
      ) : (
        <p className="text-white">{amount}</p>
      )}
      <FiMinus
        className="w-6 h-4 rounded-md bg-gray-600 text-white hover:cursor-pointer select-none"
        onClick={() => {
          decreaseAmount();
        }}
      />
      {!isCart && (
        <button className="inline-flex items-center p-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900">
          <BsCartPlus onClick={() => addToCart()} size={16} />
        </button>
      )}
    </div>
  );
}
