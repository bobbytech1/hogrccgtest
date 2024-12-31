import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'

function PublicRoutes() {
    const admin = useAuth()
    return admin ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoutes