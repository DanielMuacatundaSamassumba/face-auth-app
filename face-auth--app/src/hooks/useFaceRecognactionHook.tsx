import * as faceapi from "face-api.js"
import useSignUp from "./useSignUp"
import { useLocation } from "react-router-dom"

export default function useFaceRecognactionHook() {
  const location = useLocation()
     async function startFaceDetection(webcam:any) {
        setInterval(async () => {
            if (
                webcam.current &&
                webcam.current.video &&
                webcam.current.video.readyState === 4
            ) {
                const video = webcam.current.video

                const detections = await faceapi.detectAllFaces(
                    video,
                    new faceapi.TinyFaceDetectorOptions
                ).withFaceLandmarks().
                    withFaceDescriptors()
                console.log(detections)
                if (detections.length > 0) {
                    console.log("Rosto detectado")
                    
                    const descriptor = detections[0].descriptor
                    console.log(location.pathname)
                    console.log("Descriptor facial:", descriptor)
                }
            }


        }, 1000)
    }
  return {
    startFaceDetection
  }
}
