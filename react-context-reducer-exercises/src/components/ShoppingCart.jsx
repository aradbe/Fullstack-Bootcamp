import { useReducer } from "react";

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.data;

      const newItem = {
        ...product,
        id: Date.now(),
      };

      return {
        items: [...state.items, newItem],
        total: state.total + product.price,
        itemCount: state.itemCount + 1,
      };
    }

    case "REMOVE_ITEM": {
      const id = action.data;

      const itemToRemove = state.items.find((item) => item.id === id);

      if (!itemToRemove) {
        return state;
      }

      return {
        items: state.items.filter((item) => item.id !== id),
        total: state.total - itemToRemove.price,
        itemCount: state.itemCount - 1,
      };
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 120 },
  ];

  return (
    <div className="box">
      <h2>
        Shopping Cart ({cart.itemCount} items) - Total: ${cart.total}
      </h2>

      <div className="buttons">
        {products.map((product) => (
          <button
            key={product.name}
            onClick={() => dispatch({ type: "ADD_ITEM", data: product })}
          >
            Add {product.name}
          </button>
        ))}

        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      </div>

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", data: item.id })
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;