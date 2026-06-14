export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 text-center py-3 mt-5 small">
      Data sourced from the{" "}
      <a
        href="https://data.worldbank.org"
        target="_blank"
        rel="noreferrer"
        className="text-success"
      >
        World Bank Open Data API
      </a>
    </footer>
  );
}
