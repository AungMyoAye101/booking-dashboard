import { useEffect } from 'react'
import { useRefresh } from '@/hooks/use-auth';
import { useAuthStore } from '@/store/auth-store';
import { Spinner } from './ui/spinner';


const Auth = () => {

    const setAccessToken = useAuthStore(s => s.setAccessToken)
    const setUser = useAuthStore(s => s.setAuth)
    const clearAuth = useAuthStore(s => s.clearAuth)
    const { data, isSuccess, isError, isLoading } = useRefresh();

    useEffect(() => {
        if (isSuccess && data) {
            setAccessToken(data.token!)
            setUser(data.user)
        }
    }, [isSuccess, data, setAccessToken, setUser])

    useEffect(() => {
        if (isError) {
            clearAuth();
        }
    }, [isError, clearAuth])

    if (isLoading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <Spinner />
        </div>
    }

    return null
}
export default Auth