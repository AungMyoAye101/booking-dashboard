import { useEffect } from 'react'
import { useRefresh } from '@/hooks/use-auth';
import { useAuthStore } from '@/store/auth-store';
import { Spinner } from './ui/spinner';



const Auth = () => {

    const setAccessToken = useAuthStore(s => s.setAccessToken)
    const setUser = useAuthStore(s => s.setAuth)
    const clearAuth = useAuthStore(s => s.clearAuth)

    const { data, isSuccess, isError, isLoading, error } = useRefresh();


    useEffect(() => {
        if (isSuccess && data) {
            setUser(data.user, data.token!)
        }
        if (isError) {
            console.warn(error?.message)
            clearAuth();
        }
    }, [isSuccess, data, setAccessToken, setUser, isError])



    if (isLoading) {
        return <div className=' flex justify-center items-center absolute z-10 inset-0 bg-white'>
            <Spinner className='size-10 text-primary' />
        </div>
    }
    return null;
}
export default Auth