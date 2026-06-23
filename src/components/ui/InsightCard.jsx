import { useMemo } from "react";
import { useYearFilter } from "../../hooks/useYearFilter";
import { formatValue } from "../../utils/formatValue";

export default function InsightCard({ data, label, unit, startYear, endYear }) {
  const sliced = useYearFilter(data, startYear, endYear);

  const stats = useMemo(() => {
    if (sliced.length < 2) return null;

    const first = sliced[0];
    const last = sliced[sliced.length - 1];
    const pctChange = (
      ((last.value - first.value) / first.value) *
      100
    ).toFixed(1);
    const direction = last.value > first.value ? "increased" : "decreased";

    const max = sliced.reduce((a, b) => (a.value > b.value ? a : b));
    const min = sliced.reduce((a, b) => (a.value < b.value ? a : b));

    return { first, last, pctChange, direction, max, min };
  }, [sliced]);

  if (!stats) return null;

  return (
    <div className="alert alert-success border-0 mt-3">
      <h6 className="fw-bold mb-2">📊 Data Insight</h6>
      <p className="mb-1 small">
        <strong>{label}</strong> {stats.direction} by{" "}
        <strong>{Math.abs(stats.pctChange)}%</strong> between {stats.first.year}{" "}
        and {stats.last.year}.
      </p>
      <p className="mb-0 small text-muted">
        Peak: {formatValue(stats.max.value)} {unit} ({stats.max.year}) · Lowest:{" "}
        {formatValue(stats.min.value)} {unit} ({stats.min.year})
      </p>
    </div>
  );
}
