export default function ErrorMessage({ message }) {
  return (
    <div
      className="alert alert-danger d-flex align-items-center gap-2 mt-3"
      role="alert"
    >
      <span>⚠️</span>
      <span>Failed to load data: {message}</span>
    </div>
  );
}
