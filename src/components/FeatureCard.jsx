export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
      <div className="bg-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-cyan-400" size={28} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
