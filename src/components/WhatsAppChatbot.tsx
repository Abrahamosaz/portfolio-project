"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

interface WhatsAppChatbotProps {
  phoneNumber: string; // Phone number with country code (e.g., "1234567890")
  welcomeMessage?: string;
}

const WhatsAppChatbot: React.FC<WhatsAppChatbotProps> = ({
  phoneNumber,
  welcomeMessage = "Hello! Thank you for visiting my portfolio.",
}) => {
  return (
    <FloatingWhatsApp
      accountName="Abraham"
      phoneNumber={phoneNumber}
      // avatar="/images/avatar.png"
      allowClickAway={false}
      notification={true}
      notificationDelay={60}
      notificationSound={true}
      statusMessage="Typically replies within 1 hour"
      chatMessage={welcomeMessage}
      darkMode={true}
      placeholder="Type a message"
    />
  );
};

export default WhatsAppChatbot;
