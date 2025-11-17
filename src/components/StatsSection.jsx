export default function StatsSection() {
  const stats = [
    { value: "24/7", label: "Always Available" },
    { value: "<30s", label: "Average Response Time" },
    { value: "95%", label: "Issue Resolution Rate" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
