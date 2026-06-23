import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useWorldBank } from "../hooks/useWorldBank";
import IndicatorSelect from "../components/controls/IndicatorSelect";
import YearRangeSlider from "../components/controls/YearRangeSlider";
import LineChartPanel from "../components/charts/LineChartPanel";
import BarChartPanel from "../components/charts/BarChartPanel";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import DataTable from "../components/ui/DataTable";
import InsightCard from "../components/ui/InsightCard";
import { INDICATORS } from "../constants/indicators";

export default function Trends() {
  const { state, dispatch } = useContext(DataContext);
  const { data, loading, error } = useWorldBank(state.selectedCode);

  const minYear = data.length > 0 ? data[0].year : "1960";
  const maxYear = data.length > 0 ? data[data.length - 1].year : "2023";

  const [startYear, setStartYear] = useState(minYear);
  const [endYear, setEndYear] = useState(maxYear);
  const [chartType, setChartType] = useState("line");

  useEffect(() => {
    setStartYear(minYear);
    setEndYear(maxYear);
  }, [minYear, maxYear]);

  const currentIndicator = INDICATORS.find(
    (i) => i.code === state.selectedCode,
  );

  return (
    <div className="container-lg py-4">
      <h2 className="fw-bold mb-1">Trends</h2>
      <p className="text-muted mb-4">
        Browse Pakistan's development indicators across decades.
      </p>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label small fw-semibold">Indicator</label>
          <IndicatorSelect
            selectedCode={state.selectedCode}
            onSelect={(newCode) =>
              dispatch({ type: "SET_CODE", payload: newCode })
            }
          />
        </div>
      </div>

      <YearRangeSlider
        startYear={startYear}
        endYear={endYear}
        onStartChange={(year) => setStartYear(year)}
        onEndChange={(year) => setEndYear(year)}
        minYear={minYear}
        maxYear={maxYear}
      />

      <div className="d-flex gap-2 mb-3">
        <button
          className={`btn ${chartType === "line" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setChartType("line")}
        >
          Line
        </button>
        <button
          className={`btn ${chartType === "bar" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setChartType("bar")}
        >
          Bar
        </button>
        <button
          className={`btn ${chartType === "table" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setChartType("table")}
        >
          Table
        </button>
      </div>

      {loading && data.length === 0 && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {data.length > 0 &&
        (startYear > endYear ? (
          <div className="alert alert-warning mb-0">
            Invalid range — "From" year cannot be greater than "To" year.
          </div>
        ) : (
          <>
            <div className="card border-0 shadow-sm p-3">
              {chartType === "line" && (
                <LineChartPanel
                  data={data}
                  label={currentIndicator?.label}
                  unit={currentIndicator?.unit}
                  startYear={startYear}
                  endYear={endYear}
                />
              )}
              {chartType === "bar" && (
                <BarChartPanel
                  data={data}
                  label={currentIndicator?.label}
                  unit={currentIndicator?.unit}
                  startYear={startYear}
                  endYear={endYear}
                />
              )}
              {chartType === "table" && (
                <DataTable
                  data={data}
                  label={currentIndicator?.label}
                  unit={currentIndicator?.unit}
                  startYear={startYear}
                  endYear={endYear}
                />
              )}
            </div>

            <InsightCard
              data={data}
              label={currentIndicator?.label}
              unit={currentIndicator?.unit}
              startYear={startYear}
              endYear={endYear}
            />
          </>
        ))}
    </div>
  );
}
