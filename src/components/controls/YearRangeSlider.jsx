export default function YearRangeSlider({
  startYear,
  endYear,
  minYear,
  maxYear,
  onStartChange,
  onEndChange,
}) {
  return (
    <div className="card bg-light border-0 p-3 mb-3">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label small fw-semibold">
            From: <span className="text-success">{startYear}</span>
          </label>
          <input
            type="range"
            className="form-range"
            min={minYear}
            max={maxYear}
            value={startYear}
            onChange={(e) => onStartChange(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label small fw-semibold">
            To: <span className="text-success">{endYear}</span>
          </label>
          <input
            type="range"
            className="form-range"
            min={minYear}
            max={maxYear}
            value={endYear}
            onChange={(e) => onEndChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
