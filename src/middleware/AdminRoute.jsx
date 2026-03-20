import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import api from "../Api/api"

function AdminRoute({ children }) {

    const [loading,setLoading] = useState(true)
    const [auth,setAuth] = useState(false)

    useEffect(() => {

        api.get("api/auth/admin/me")
        .then(res => {
            if(res.data.role === "admin"){
                setAuth(true)
            }
        })
        .catch(() => {
            setAuth(false)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    if(!auth){
        return <Navigate to="/admin/login" replace />
    }

    return children
}

export default AdminRoute
