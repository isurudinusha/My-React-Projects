import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="qr-text"
          value={input}
          placeholder="Enter text to generate QR code"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          id="generate-qr"
          onClick={handleGenerateQRCode}
        >
          Generate QR Code
        </button>
        <div id="qr-code">
          <QRCode id="qr-code-value" value={qrCode} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
