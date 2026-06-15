export default function About() {
  return (
    <div className="container py-5" style={{ maxWidth: 720 }}>
      <h2 className="fw-bold mb-1">About This Project</h2>
      <p className="text-muted mb-4">Pakistan Data Bank</p>

      <div className="card border-0 shadow-sm p-4 mb-4">
        <h5 className="fw-semibold mb-2">What is this?</h5>
        <p className="mb-0 text-muted">
          A React web application that visualises decades of Pakistan's
          economic, social, demographic, and environmental data sourced from the
          World Bank Open Data API. Users can explore individual indicators,
          filter by year range, and compare any two indicators side by side on a
          dual-axis chart.
        </p>
      </div>

      <div className="card border-0 shadow-sm p-4 mb-4">
        <h5 className="fw-semibold mb-2">Data Source</h5>
        <p className="mb-1 text-muted">
          All data is sourced from the <strong>World Bank Open Data API</strong>{" "}
          — a free, publicly available API requiring no authentication.
        </p>

        <a
          href="https://data.worldbank.org"
          target="_blank"
          rel="noreferrer"
          className="text-success"
        >
          data.worldbank.org →
        </a>
      </div>

      <div className="card border-0 shadow-sm p-4 mb-4">
        <h5 className="fw-semibold mb-2">Tech Stack</h5>
        <div className="d-flex flex-wrap gap-2">
          {[
            "React 18",
            "Vite",
            "React Router v6",
            "Context API",
            "useReducer",
            "useMemo",
            "useCallback",
            "Custom Hooks",
            "Recharts",
            "Bootstrap 5",
            "React Icons",
          ].map((t) => (
            <span
              key={t}
              className="badge bg-success-subtle text-success-emphasis px-3 py-2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="card border-0 shadow-sm p-4">
        <h5 className="fw-semibold mb-2">Built By</h5>
        <p className="mb-1">
          <strong>Umer Farooq Afridi</strong>
        </p>
        <p className="text-muted small mb-2">
          BS Computer Science — PUCIT, University of the Punjab
        </p>
        <div className="d-flex gap-3">
          <a
            href="https://github.com/code-runner006"
            target="_blank"
            rel="noreferrer"
            className="text-success"
          >
            GitHub →
          </a>

          <a
            href="https://linkedin.com/in/umerfarooqafridi"
            target="_blank"
            rel="noreferrer"
            className="text-success"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
