const initialState = {
  games: [],
  cart: []
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GAMES":
      return { ...state, games: action.payload };
    case "REMOVE_GAME":
      return {
        ...state,
        games: state.games.filter(game => game.id !== action.payload)
      };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(game => game.id !== action.payload)
      };
    default:
      return state;
  }
};

export default gamesReducer;
