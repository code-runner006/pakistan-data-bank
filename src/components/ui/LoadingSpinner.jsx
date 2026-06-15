export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="ms-3 text-muted">Loading data...</span>
    </div>
  );
}
