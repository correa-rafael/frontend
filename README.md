# QR Code Detector App

The QR Code Detector App is a web application that enables users to upload images and detect QR codes within them. It utilizes [RT-DETR](https://github.com/lyuwenyu/RT-DETR), a Transformer-based AI model for real-time object detection, fine-tuned to accurately identify QR codes.

## Features

- Upload images to detect QR codes.
- QR code detection using a fine-tuned [RT-DETR](https://github.com/lyuwenyu/RT-DETR) model.
- Simple and intuitive user interface.

## Technologies Used

### Frontend:

- **React:** A powerful JavaScript library for building dynamic user interfaces, providing a robust foundation for the QR Code Detector App's frontend development.
- **Material-UI:** Leveraging Material-UI components, the frontend of the QR Code Detector App is styled with ease, allowing rapid development and customization of user interface components.

### Backend ([qr-detection-app-backend](https://github.com/correa-rafael/qr-detection-app-backend)):

- **Flask:** A micro web framework written in Python, Flask powers the backend of the QR Code Detector App, handling image processing and QR code detection tasks.
- **ONNX Runtime:** Utilizing ONNX Runtime, the QR Code Detector App integrates a fine-tuned RT-DETR model for real-time object detection, ensuring accurate and efficient QR code detection.

## Deployment

The frontend of QR Code Detector App is deployed on [Vercel](https://qr-detection-app.vercel.app/). The backend is deployed on a separate server implemented in the [qr-detection-app-backend](https://github.com/correa-rafael/qr-detection-app-backend) repository.

Both the frontend and backend components work together to provide a seamless user experience, with the frontend handling user interactions and the backend performing image processing and QR code detection tasks.

## Installation

To run the QR Code Detector App locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Local Usage

To use the QR Code Detector App, follow these steps:

1. Open your web browser and go to http://localhost:3000.
2. Upload an image containing QR codes.
3. Wait for the app to process the image and detect QR codes.
4. View the detected QR codes.

## Contributing

Contributions to the QR Code Detector App are welcome! Whether it's through opening a pull request, submitting an issue, or providing feedback, your contributions help enhance and improve the application for all users.
