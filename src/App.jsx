import { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AgentPage from "./pages/AgentPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" ? (
        <HomePage setCurrentPage={setCurrentPage} />
      ) : (
        <AgentPage />
      )}
    </div>
  );
}
