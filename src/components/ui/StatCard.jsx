import styles from "./StatCard.module.css";

export default function StatCard({ label, value, unit, year }) {
  const formatted =
    value >= 1e9
      ? (value / 1e9).toFixed(2) + " B"
      : value >= 1e6
        ? (value / 1e6).toFixed(2) + " M"
        : value >= 1e3
          ? (value / 1e3).toFixed(2) + " K"
          : value.toFixed(2);

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <p className="text-muted small mb-2">{label}</p>
        <h3 className="fw-bold text-success mb-1">{formatted}</h3>
        <span className="badge bg-success-subtle text-success-emphasis">
          {unit}
        </span>
        <p className="text-muted small mt-2 mb-0">As of {year}</p>
      </div>
    </div>
  );
}
