import React, { useState } from 'react'
import type { loginType } from '../loginType'
import { api } from '../app/infra/api'

export default function useLogin() {
    const [formData, setFormData] = useState<loginType>({
        email: ""
    })
    const [isOpened, setIsOpened] = useState(false)
    const handleChangeVAlue = (e: any) => {
        const { value, name } = e.target

        setFormData((prev: any) => {
            return { ...prev, [name]: value }
        })
    }
    async function loginAuth(event: any) {
        event.preventDefault()
        localStorage.setItem("info_user_login", JSON.stringify(formData))
        setIsOpened(true)
    }
    return {
        handleChangeVAlue, formData,
        loginAuth,
        isOpened
    }
}
