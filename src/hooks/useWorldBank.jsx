import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export function useWorldBank(code) {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    if (state.cache[code]) return;

    const url = `https://api.worldbank.org/v2/country/PK/indicator/${code}?format=json&per_page=100`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const cleaned = json[1]
          .filter((d) => d.value !== null)
          .reverse()
          .map((d) => ({ year: d.date, value: d.value }));

        dispatch({
          type: "CACHE_DATA",
          payload: { code, data: cleaned },
        });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err.message });
      });
  }, [code]);

  return {
    data: state.cache[code] || [],
    loading: state.loading,
    error: state.error,
  };
}
