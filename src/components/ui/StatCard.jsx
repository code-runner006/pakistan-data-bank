import { formatValue } from "../../utils/formatValue";

export default function StatCard({ label, value, unit, year }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <p className="text-muted small mb-2">{label}</p>
        <h3 className="fw-bold text-success mb-1">{formatValue(value)}</h3>
        <span className="badge bg-success-subtle text-success-emphasis">
          {unit}
        </span>
        <p className="text-muted small mt-2 mb-0">As of {year}</p>
      </div>
    </div>
  );
}
