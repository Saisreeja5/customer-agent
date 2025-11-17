export default function Message({ message, isTyping }) {
  if (isTyping) {
    return (
      <div className="space-y-2">
        <div className="text-slate-400 text-sm font-medium">AI Agent</div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-slate-400 text-sm font-medium">
        {message.type === "user" ? "You" : "AI Agent"}
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
        <p className="text-slate-200">{message.content}</p>
      </div>
    </div>
  );
}
