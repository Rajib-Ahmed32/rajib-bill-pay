//AuthReducer
export const initialState = {
  user: null,
  loading: true,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, loading: false };
    case "LOGOUT":
      return { ...state, user: null, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};
