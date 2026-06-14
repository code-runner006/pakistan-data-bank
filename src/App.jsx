import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <DataProvider>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </DataProvider>
  );
}
