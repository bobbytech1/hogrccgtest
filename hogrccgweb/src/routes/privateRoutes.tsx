import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'

function PrivateRoutes() {
    const admin = useAuth()
    return admin ? <Outlet /> : <Navigate to='/hogadmin' />
}

export default PrivateRoutes