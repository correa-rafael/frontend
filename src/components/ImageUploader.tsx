import React, { useState } from "react";

interface ImageUploaderProps {
  onImageUpload: (image: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      onImageUpload(file);
    }
  };

  return (
    <div className="image-uploader-container">
      <input
        id="upload-input"
        className="upload-input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button className="upload-button" onClick={() => document.getElementById("upload-input")?.click()}>
        Upload
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};


export default ImageUploader;
