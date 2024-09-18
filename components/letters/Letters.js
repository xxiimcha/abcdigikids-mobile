import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import Tesseract from 'tesseract.js';  // Import Tesseract.js for OCR

const imageList = [
  { id: 'A', image: require('../../assets/images/learn_abc/A.png') },
  { id: 'B', image: require('../../assets/images/learn_abc/B.png') },
  { id: 'C', image: require('../../assets/images/learn_abc/C.png') },
  // Continue adding images for all letters...
];

export default function OCRScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recognizedText, setRecognizedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageList[0].image);

  useEffect(() => {
    if (currentIndex < imageList.length) {
      // Log current image and index to ensure flow
      console.log("Processing Image Index: ", currentIndex);
      processImage(currentIndex);
    }
  }, [currentIndex]);

  const processImage = async (index) => {
    setIsProcessing(true); // Show loader while processing
    
    const imageUri = Image.resolveAssetSource(imageList[index].image).uri;
    console.log("Image URI: ", imageUri);

    try {
      // Use fetch to get the image as a blob and convert to base64
      const response = await fetch(imageUri);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result.split(',')[1];  // Get base64 content
        recognizeImage(base64data);
      };
      reader.readAsDataURL(blob);  // Read as base64
    } catch (error) {
      console.error('Error converting image to base64:', error);
    }
  };

  const recognizeImage = (base64Image) => {
    try {
      Tesseract.recognize(
        `data:image/png;base64,${base64Image}`,
        'eng',
        { logger: (m) => console.log(m) }
      ).then(({ data: { text } }) => {
        console.log('OCR Result:', text);
        setRecognizedText(text);
        Speech.speak(text);  // Speak the recognized text aloud
        setIsProcessing(false);

        // Move to the next image after processing
        setTimeout(() => {
          if (currentIndex + 1 < imageList.length) {
            setCurrentIndex(currentIndex + 1);
          }
        }, 3000); // Change image every 3 seconds
      });
    } catch (error) {
      console.error('Error with Tesseract.js OCR:', error);
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      {isProcessing && <ActivityIndicator size="large" color="#0000ff" />}
      
      {currentImage && <Image source={currentImage} style={styles.image} />}

      <Text style={styles.recognizedText}>Recognized Text: {recognizedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 300, marginTop: 20 },
  recognizedText: { fontSize: 18, marginTop: 20, paddingHorizontal: 20, textAlign: 'center' },
});
