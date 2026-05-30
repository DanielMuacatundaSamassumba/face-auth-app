import { useState } from "react"
import { api } from "../app/infra/api"
export default function useSignUp() {
 const [formData, setFormData] = useState<{
    name:string, email:string, descriptor:string
 }>({
     email: "",
     name: "",
     descriptor:""
 })

  const [isOpened, setIsOpened] = useState(false)
    const handleChangeVAlue = (e: any) => {
        const { value, name } = e.target

        setFormData((prev: any) => {
            return { ...prev, [name]: value }
        })

    
    }
    async function handleSubmit(event:any) {
        event.preventDefault()
         localStorage.setItem("user_info", JSON.stringify(formData))
        setIsOpened(true)
    }
    return {
        handleChangeVAlue, formData,
        isOpened,
        handleSubmit,
        setIsOpened
    }
}
