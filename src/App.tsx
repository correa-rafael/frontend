import React, { useState, useRef, useEffect } from "react";
import ImageUploader from "./components/ImageUploader";
import "./App.css";

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/detect_qr_codes", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageUrl(imageUrl);
        setErrorMessage(null);
      } else {
        setErrorMessage("Error uploading image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setErrorMessage("An error occurred while processing the image.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">QR Code Detector</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
        </div>
      )}
    </div>
  );
};

export default App;
