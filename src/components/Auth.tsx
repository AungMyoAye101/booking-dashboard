
import { useRefresh } from '@/hooks/use-auth';
import { useAuthStore } from '@/store/auth-store'
import { useEffect } from 'react';

const Auth = () => {
    const setAuth = useAuthStore(s => s.setAuth)
    const setAccessToken = useAuthStore(s => s.setAccessToken)
    const clearAuth = useAuthStore(s => s.clearAuth)
    const { data, isSuccess, isError } = useRefresh();

    useEffect(() => {
        if (isSuccess) {
            setAuth(data.user);
            setAccessToken(data.token);
            return;
        }
        if (isError) {
            clearAuth()
            return;
        }
    }, [data, isSuccess, isError])

    return null;
}
export default Auth