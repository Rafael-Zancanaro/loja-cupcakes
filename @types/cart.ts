export interface CartItens {
    id: number;
    amount: number;
  }
  
  export interface CartContextData {
    cart: CartItens[];
    addItem: (id: number, amount: number) => void;
    removeItem: (id: number, amount: number) => void;
    removeItemFromCart: (id: number) => void;
  }