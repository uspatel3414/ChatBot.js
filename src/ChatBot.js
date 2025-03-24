import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    // Simulate AI reply
    setTimeout(() => {
      const botMessage = { text: "I'm here! 😊 How can I help?", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>AI ChatBot 🤖</h2>
      <div style={{ maxWidth: "400px", margin: "auto", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <b>{msg.sender === "user" ? "You" : "Bot"}:</b> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ padding: "8px", width: "60%", marginRight: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "8px 12px" }}>Send</button>
    </div>
  );
};

export default ChatBot;

