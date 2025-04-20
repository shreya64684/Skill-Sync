// components/PoseAnalyzer.jsx
import React, { useEffect, useRef } from 'react';
import * as poseM from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import Webcam from 'react-webcam';

const PoseAnalyzer = ({ onPostureFeedback }) => {
  const webcamRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const pose = new poseM.Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      if (!results.poseLandmarks) return;

      const leftShoulder = results.poseLandmarks[11];
      const rightShoulder = results.poseLandmarks[12];
      const leftHip = results.poseLandmarks[23];
      const rightHip = results.poseLandmarks[24];

      const avgShoulderY = (leftShoulder.y + rightShoulder.y) / 2;
      const avgHipY = (leftHip.y + rightHip.y) / 2;
      const torsoLength = avgHipY - avgShoulderY;

      let suggestion = torsoLength < 0.2
        ? 'Sit straight — avoid slouching.'
        : 'Good posture!';

      onPostureFeedback(suggestion);
    });

    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4
    ) {
      cameraRef.current = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      cameraRef.current.start();
    }
  }, [onPostureFeedback]);

  return (
    <div className="relative w-full">
      <Webcam
        ref={webcamRef}
        mirrored
        audio={false}
        videoConstraints={{ facingMode: 'user' }}
        className="rounded-md w-full"
      />
    </div>
  );
};

export default PoseAnalyzer;
