import { createContext, useReducer } from "react";

const initialState = {
  cache: {},
  selectedCode: "NY.GDP.MKTP.CD",
  loading: false,
  error: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "CACHE_DATA":
      return {
        ...state,
        loading: false,
        cache: { ...state.cache, [action.payload.code]: action.payload.data },
      };

    case "SET_CODE":
      return { ...state, selectedCode: action.payload };

    default:
      return state;
  }
}

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
