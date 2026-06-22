import { useMemo } from "react";

export function useYearFilter(data, startYear, endYear) {
  return useMemo(
    () => data.filter((d) => d.year >= startYear && d.year <= endYear),
    [data, startYear, endYear]
  );
}