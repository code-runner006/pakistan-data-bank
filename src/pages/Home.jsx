import { useWorldBank } from "../hooks/useWorldBank";
import { Link } from "react-router-dom";
import StatCard from "../components/ui/StatCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";

const FEATURED = [
  { code: "NY.GDP.MKTP.CD", label: "GDP", unit: "USD" },
  { code: "SP.POP.TOTL", label: "Population", unit: "People" },
  { code: "SE.ADT.LITR.ZS", label: "Literacy Rate", unit: "%" },
  { code: "FP.CPI.TOTL.ZG", label: "Inflation Rate", unit: "%" },
];

function StatCardWrapper({ code, label, unit }) {
  const { data, loading, error } = useWorldBank(code);

  if (loading || data.length === 0) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const latest = data[data.length - 1];

  return (
    <StatCard
      label={label}
      value={latest?.value}
      unit={unit}
      year={latest?.year}
    />
  );
}

export default function Home() {
  return (
    <div className="container-lg py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Pakistan at a Glance</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: 560 }}>
          Explore decades of Pakistan's economic, social, and demographic data
          through interactive visualisations.
        </p>
        <Link to="/trends" className="btn btn-success px-4 mt-2">
          Explore Data →
        </Link>
      </div>

      <h5 className="fw-semibold mb-3 text-muted">Latest Indicators</h5>
      <div className="row g-3">
        {FEATURED.map((item) => (
          <div className="col-12 col-md-6" key={item.code}>
            <StatCardWrapper
              code={item.code}
              label={item.label}
              unit={item.unit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
