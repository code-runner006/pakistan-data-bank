import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { formatValue } from "../../utils/formatValue";

export default function LineChartPanel({
  data,
  label,
  unit,
  startYear,
  endYear,
}) {
  const sliced = useMemo(
    () => data.filter((d) => d.year >= startYear && d.year <= endYear),
    [data, startYear, endYear],
  );

  return (
    <div>
      <h6 className="text-muted mb-3">
        {label} ({unit})
      </h6>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={sliced}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatValue} width={70} />
          <Tooltip formatter={(value) => [formatValue(value), label]} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#198754"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
