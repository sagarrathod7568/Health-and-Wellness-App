import React, { useState } from "react";
import "../Sagar-components/styles/chatbot.css"; 
function Chatbot() {
  const [chatVisible, setChatVisible] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const escapeHTML = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    if (!userInput.trim()) return;

    const message = escapeHTML(userInput);
    setChatHistory([...chatHistory, { type: "user", message }]);
    setUserInput("");
    setIsLoading(true);

    setChatHistory((prev) => [
      ...prev,
      { type: "bot", message: "Typing...", typing: true },
    ]);

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botMessage = escapeHTML(data.response);

      setChatHistory((prev) =>
        prev.map((msg, i) =>
          i === prev.length - 1
            ? { ...msg, message: botMessage, typing: false }
            : msg
        )
      );
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) =>
        prev.map((msg, i) =>
          i === prev.length - 1
            ? {
                ...msg,
                message: "Sorry, something went wrong. Please try again.",
                typing: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <button
        id="chatbot-toggle"
        onClick={toggleChat}
        aria-label="Toggle Chatbot"
      >
        {chatVisible ? "✖" : "💬"}
      </button>

      {chatVisible && (
        <div id="chatbot">
          <div id="chat-header">
            <h1>Secure Chatbot</h1>
            <img
              src="https://user-images.githubusercontent.com/92524410/220310123-91c5a29e-03ad-4b13-aca7-e35f3eb5078d.png"
              alt="Bot Icon"
              width="30px"
            />
          </div>
          <div id="chat-container">
            <div id="chat-history">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`${msg.type}-message ${
                    msg.typing ? "typing" : ""
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
          </div>
          <form id="chat-form" onSubmit={sendMessage}>
            <input
              type="text"
              id="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me anything..."
              aria-label="User message"
            />
            <button type="submit" aria-label="Send message">
              Send
            </button>
          </form>
          {isLoading && (
            <div id="loader">
              <img src="loader.gif" width="50px" alt="Loading..." />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
