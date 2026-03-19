import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

const WHATSAPP_NUMBER = "+918790535149";
const DEFAULT_WHATSAPP_MESSAGE = "Hello I am interested in your car rental services";

const quickReplies = [
  { label: "Book a car", message: "Hi, I'd like to book a car." },
  { label: "View cars", message: "Can you show me available cars?" },
  { label: "Contact support", message: "I need help with my booking." },
];

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi! I'm your assistant. How can I help today?" },
  ]);
  const [input, setInput] = useState("");

  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const sendMessage = (text) => {
    if (!text?.trim()) return;

    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "bot",
          text: "Thanks! I'll connect you shortly. You can also tap the WhatsApp icon to chat directly.",
        },
      ]);
    }, 800);
  };

  const openWhatsApp = (message) => {
    const encoded = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encoded}`, "_blank");
  };

  return (
    <div className="whatsapp-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="whatsapp-panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            ref={panelRef}
          >
            <div className="whatsapp-header d-flex justify-content-between align-items-center">
              <div>
                <div className="whatsapp-title">Chat with us</div>
                <div className="whatsapp-subtitle">Quick replies or start a conversation.</div>
              </div>
              <button className="whatsapp-close" onClick={() => setOpen(false)} aria-label="Close chat">
                <FaTimes />
              </button>
            </div>

            <div className="whatsapp-body">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`whatsapp-message ${msg.from === "bot" ? "bot" : "user"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="whatsapp-quick">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  className="whatsapp-quick-btn"
                  onClick={() => sendMessage(reply.message)}
                >
                  {reply.label}
                </button>
              ))}
            </div>

            <div className="whatsapp-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button
                className="whatsapp-send"
                onClick={() => {
                  sendMessage(input);
                  openWhatsApp(input);
                }}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>

            <button
              className="whatsapp-direct"
              onClick={() => openWhatsApp(messages.slice(-1)[0]?.text || "Hi!")}
            >
              Open in WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "34px",
          boxShadow: "0 10px 25px rgba(37, 211, 102, 0.5)",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
          animation: "pulse-green 2s infinite"
        }}
        onClick={() => {
          openWhatsApp(DEFAULT_WHATSAPP_MESSAGE);
          setOpen((o) => !o);
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
