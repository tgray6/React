//npx json-server -w data/products.json -p 3500
//npm run dev
import { useReducer, useMemo, createContext, ReactElement } from "react";

export interface ICartItem {
  quantity: number;
  sku: string;
  name: string;
  price: number;
}

interface ICartState {
  cart: ICartItem[];
}

const InitCartState: ICartState = {
  cart: [],
};

const REDUCER_ACTION_CASES = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionCasesType = typeof REDUCER_ACTION_CASES;

export interface IREDUCER_ACTION {
  type: string;
  payload?: ICartItem;
}

const reducer = (state: ICartState, action: IREDUCER_ACTION): ICartState => {
  switch (action.type) {
    //ADD REDUCER TYPE
    case REDUCER_ACTION_CASES.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
      const { sku, name, price } = action.payload;

      const filteredCart: ICartItem[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      const itemExists: ICartItem | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const quantity: number = itemExists ? itemExists.quantity + 1 : 1;

      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity }],
      };
    }
    //REMOVE REDUCER TYPE
    case REDUCER_ACTION_CASES.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }

      const { sku } = action.payload;

      const filteredCart: ICartItem[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return {
        ...state,
        cart: [...filteredCart],
      };
    }
    //QUANTITY REDUCER TYPE
    case REDUCER_ACTION_CASES.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }

      const { sku, quantity } = action.payload;

      const itemExists: ICartItem | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity");
      }

      const updatedItem: ICartItem = { ...itemExists, quantity };

      const filteredCart: ICartItem[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return {
        ...state,
        cart: [...filteredCart, updatedItem],
      };
    }
    //SUBMIT REDUCER TYPE
    case REDUCER_ACTION_CASES.SUBMIT: {
      return {
        ...state,
        cart: [],
      };
    }

    default: {
      throw new Error("Unidentified reducer action type");
    }
  }
};

const useCartContext = (InitCartState: ICartState) => {
  const [state, dispatch] = useReducer(reducer, InitCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_CASES;
  }, []);

  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.quantity * cartItem.price;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_CASES,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

interface ChildrenType {
  children?: ReactElement | ReactElement[];
}

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(InitCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
