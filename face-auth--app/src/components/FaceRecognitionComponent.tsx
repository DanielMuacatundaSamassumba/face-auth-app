import { Modal, Box } from "@mui/material"
import Webcam from "react-webcam"
import useFaceRecognition from "./useFaceRecognition"

export default function FaceRecognitionComponent() {
  const { webcamRef, descriptor } = useFaceRecognition()

  return (
    <Modal open>
      <Box className="min-h-svh w-full flex items-center justify-center bg-black">
        <div className="relative">
          
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 640,
              height: 480,
              facingMode: "user",
            }}
          />

         

        </div>
      </Box>
    </Modal>
  )
}