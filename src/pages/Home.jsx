import { useWorldBank } from "../hooks/useWorldBank";

export default function Home() {
  const { data, loading, error } = useWorldBank("NY.GDP.MKTP.CD");

  console.log("loading:", loading);
  console.log("data:", data);
  console.log("error:", error);

  return (
    <div className="container py-4">
      <h1>Home Page</h1>
    </div>
  );
}
