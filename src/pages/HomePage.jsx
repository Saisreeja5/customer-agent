import { Package, Search, MessageSquare } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import StatsSection from "../components/StatsSection";

export default function HomePage({ setCurrentPage }) {
  const features = [
    {
      icon: Package,
      title: "Order Tracking",
      description:
        "Real-time order status, shipping updates, and delivery tracking for all your purchases",
    },
    {
      icon: Search,
      title: "Product Search",
      description:
        "Find detailed product information, specifications, and availability instantly",
    },
    {
      icon: MessageSquare,
      title: "Smart FAQ",
      description:
        "Get answers to common questions using RAG-powered knowledge base",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-6">
          AI-Powered Customer Support
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Get instant answers about your orders, track shipments, and resolve
          issues with our intelligent support agent powered by Raindrop AI
        </p>
        <button
          onClick={() => setCurrentPage("agent")}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
        >
          Start Chat
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}
