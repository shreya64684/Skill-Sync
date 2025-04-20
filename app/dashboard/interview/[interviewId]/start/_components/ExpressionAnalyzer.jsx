// components/ExpressionAnalyzer.jsx

import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';

const ExpressionAnalyzer = ({ onEmotionChange }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  const mapToHighLevelEmotion = (expressions) => {
    const { happy, angry, sad, surprised, neutral, fearful, disgusted } = expressions;

    if (happy > 0.6 || (happy > 0.4 && neutral > 0.3)) return 'Confident';
    if (angry > 0.4 || disgusted > 0.4) return 'Stressed';
    if (sad > 0.4 || fearful > 0.4) return 'Anxious';
    if (surprised > 0.5) return 'Nervous';
    if (neutral > 0.5) return 'Relaxed';

    return 'Unclear';
  };

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setModelsLoaded(true);
    };

    loadModels();
  }, []);

  useEffect(() => {
    let intervalId;

    const detect = async () => {
      const video = webcamRef.current?.video;
      const canvas = canvasRef.current;

      if (!video || video.readyState !== 4 || !canvas) return;

      const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      const dims = faceapi.matchDimensions(canvas, video, true);
      const resized = faceapi.resizeResults(detection, dims);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

      if (resized) {
        // faceapi.draw.drawDetections(canvas, resized);

        const expressions = resized.expressions;
        const highLevelEmotion = mapToHighLevelEmotion(expressions);
        if (onEmotionChange) onEmotionChange(highLevelEmotion);

        // const box = resized.detection.box;
        const ctx = canvas.getContext('2d');
        ctx.font = '16px Arial';
        ctx.fillStyle = 'red';
        // ctx.fillText(highLevelEmotion, box.x, box.y - 10);
      }
    };

    if (modelsLoaded) {
      intervalId = setInterval(detect, 1000);
    }

    return () => clearInterval(intervalId);
  }, [modelsLoaded]);

  return (
    <div className="relative w-full">
      <Webcam
        ref={webcamRef}
        audio={false}
        className="rounded-md w-full"
        videoConstraints={{ facingMode: 'user' }}
      />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default ExpressionAnalyzer;
