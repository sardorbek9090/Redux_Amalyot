const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case " ADDITEM":
      //Chek if Product is Alredy Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increst the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qtty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      // eslint-disable-next-line no-unreachable
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      // eslint-disable-next-line no-unreachable
      break;
    default:
        return state;
        // eslint-disable-next-line no-unreachable
      break;
  }
};

export default handleCart;
