export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          LiquidMetal
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => setCurrentPage("home")}
            className={`font-medium transition-colors ${
              currentPage === "home"
                ? "text-cyan-400"
                : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("agent")}
            className={`font-medium transition-colors ${
              currentPage === "agent"
                ? "text-cyan-400"
                : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Support Agent
          </button>
        </div>
      </div>
    </nav>
  );
}
