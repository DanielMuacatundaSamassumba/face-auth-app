import { useEffect, useRef, useState } from "react"
import * as faceapi from "face-api.js"
import Webcam from "react-webcam"
import { useLocation } from "react-router-dom"
import useSignUp from "../hooks/useSignUp"
import { api } from "../app/infra/api"
import Swal from "sweetalert2"
export default function useFaceRecognition() {
  const webcamRef = useRef<Webcam>(null)
  const [descriptor, setDescriptor] = useState<any>(null)
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const location = useLocation()
  const MODEL_URL = "/models"
  const intervalRef = useRef<any>(null)
  const [isOpenedFace, setIsOpedFace] = useState(false)
  useEffect(() => {
    async function loadModels() {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ])

      setModelsLoaded(true)
    }

    loadModels()
  }, [])


  useEffect(() => {
    if (!modelsLoaded) return

    intervalRef.current = setInterval(async () => {
      const video = webcamRef.current?.video

      if (video && video.readyState === 4) {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors()

        if (detections.length > 0) {

          console.log(location.pathname)
          if (location.pathname === "/sign-up") {
            setDescriptor(detections[0].descriptor)
            await signUp(detections[0].descriptor)
          } else if
            (location.pathname === "/") {

            try {
              const descriptor = JSON.stringify(
                Array.from(detections[0].descriptor)
              );

              const { email } = JSON.parse(String(localStorage.getItem("info_user_login")))
              const response = await api.post("/auth/login", {
                email: email,
                descriptor: descriptor
              })
              console.log("login sucessfully", response)
              console.log("login ", detections[0].descriptor)
              setModelsLoaded(false)
              stopWebcam()
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                customClass: {
                  popup: 'swal-top'
                }
              });
              window.location.href = "/dashboard"
              localStorage.setItem("user_info_login", JSON.stringify(response.data.user))
              clearInterval(intervalRef.current)
            } catch (error) {
              console.error(error)
            }
          }

        }
      }
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [modelsLoaded])

  function stopWebcam() {
    const stream = webcamRef.current?.video?.srcObject as MediaStream

    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }
  }
  async function signUp(desc: any) {
    try {

      const descriptor = JSON.stringify(
        Array.from(desc)
      );
      const { name, email } = JSON.parse(
        localStorage.getItem("user_info") || "{}"
      ); const response = await api.post("/auth/sign-up", {
        name: name,
        email: email,
        descriptor: descriptor
      })

      console.log("user created successfully", response)
      localStorage.removeItem("user_info")
      setModelsLoaded(false)
      stopWebcam()
      clearInterval(intervalRef.current)
      window.location.href = "/"
    } catch (error) {
      console.log("error to create user", error)
      setModelsLoaded(false)
    }
  }
  return {
    webcamRef,
    descriptor,
    modelsLoaded,
    isOpenedFace
  }
}