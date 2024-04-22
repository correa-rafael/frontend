import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import ImageUploader from "./components/ImageUploader";
import { Container, Typography, Card, CardContent, Box, CircularProgress } from "@mui/material";
import "./App.css";

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageUpload = async (image: File) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(
        "https://qr-detection-app-backend.adaptable.app/detect_qr_codes",
        {
          method: "POST",
          body: formData,
        }
      );

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" align="center" gutterBottom style={{ color: "#3f51b5", fontFamily: "Arial, sans-serif" }}>
          QR Code Detector
        </Typography>
      </Box>
      <Card className="app-card">
        <CardContent>
          <Typography variant="body1" align="center" gutterBottom style={{ marginBottom: "20px" }}>
            Upload an image and let us detect QR codes for you!
          </Typography>
          <ImageUploader onImageUpload={handleImageUpload} />
          {loading && <CircularProgress style={{ margin: "20px auto", display: "block" }} />}
          {errorMessage && (
            <Box
              mt={2}
              color="error.main"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FiAlertCircle className="error-icon" />
              {errorMessage}
            </Box>
          )}
          {imageUrl && (
            <Box mt={4} display="flex" justifyContent="center">
              <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;
