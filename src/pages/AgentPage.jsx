import { useState } from "react";
import ChatInterface from "./ChatInterface";

export default function AgentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Clear previous answer and set new question
    setCurrentQuestion(userMessage);
    setCurrentAnswer(null);

    setIsTyping(true);

    // TODO: Replace with Raindrop API call
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content:
          "I'm your AI support agent. I can help you check order status, track shipments, answer product questions, and more. How can I assist you today?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setCurrentAnswer(aiMessage);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ChatInterface
      currentQuestion={currentQuestion}
      currentAnswer={currentAnswer}
      inputValue={inputValue}
      setInputValue={setInputValue}
      isTyping={isTyping}
      handleSendMessage={handleSendMessage}
      handleKeyPress={handleKeyPress}
    />
  );
}
