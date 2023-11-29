import { CartContextData } from "../@types/cart";
import { createContext } from "react";

export const CartContext = createContext<CartContextData>({} as CartContextData)