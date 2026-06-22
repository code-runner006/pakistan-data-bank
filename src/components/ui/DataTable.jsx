import { useYearFilter } from "../../hooks/useYearFilter";
import { formatValue } from "../../utils/formatValue";

export default function DataTable({ data, label, unit, startYear, endYear }) {
  const sliced = useYearFilter(data, startYear, endYear).reverse();

  return (
    <div style={{ maxHeight: 420, overflowY: "auto" }}>
      <table className="table mb-0">
        <thead className="sticky-top">
          <tr>
            <th
              className="border-0 py-3 ps-3 text-success small fw-bold text-uppercase"
              style={{ letterSpacing: "0.05em", backgroundColor: "#f8f9fa" }}
            >
              Year
            </th>
            <th
              className="border-0 py-3 pe-3 text-end text-success small fw-bold text-uppercase"
              style={{ letterSpacing: "0.05em", backgroundColor: "#f8f9fa" }}
            >
              {label} ({unit})
            </th>
          </tr>
        </thead>
        <tbody>
          {sliced.map((d, i) => (
            <tr
              key={d.year}
              style={{
                backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e8f5ef")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  i % 2 === 0 ? "#ffffff" : "#fafbfc")
              }
            >
              <td
                className="border-0 ps-3 py-2 fw-semibold"
                style={{ color: "#495057" }}
              >
                {d.year}
              </td>
              <td className="border-0 pe-3 py-2 text-end fw-bold text-dark">
                {formatValue(d.value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
