import Message from "../components/Message";

export default function ChatInterface({
  currentQuestion,
  currentAnswer,
  inputValue,
  setInputValue,
  isTyping,
  handleSendMessage,
  handleKeyPress,
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Chat Interface
      </h1>

      {/* Message Input */}
      <div className="mb-6">
        <label className="block text-white text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask something..."
          className="w-full bg-slate-700/50 text-white placeholder-slate-400 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-600"
          rows="4"
        />
        <p className="text-xs text-slate-500 mt-2 text-right">
          Press Ctrl+Enter to apply
        </p>
      </div>

      {/* Run Flow Button */}
      <button
        onClick={handleSendMessage}
        disabled={!inputValue.trim()}
        className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-8"
      >
        Run Flow
      </button>

      {/* Current Question and Answer Display */}
      {currentQuestion && (
        <div className="space-y-6 mt-8">
          {isTyping && <Message isTyping={true} />}
          {currentAnswer && <Message message={currentAnswer} />}
        </div>
      )}

      {/* Policy Section */}
    </div>
  );
}
