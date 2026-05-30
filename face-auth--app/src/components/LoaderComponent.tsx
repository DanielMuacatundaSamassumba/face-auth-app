import { Modal } from "@mui/material";
import { ScanFace } from "lucide-react";
export default function LoaderComponent() {
    return (
        <Modal open className="min-h-svh">
            <div className="h-full flex items-center justify-center">
                < ScanFace  size={80} color='#00F0FF' className="animate-bounce" />
            </div>
        </Modal>
    )
}
