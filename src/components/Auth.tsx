import { useRefresh } from '@/hooks/use-auth';
import { useAuthStore } from '@/store/auth-store';



const Auth = () => {

    const setAccessToken = useAuthStore(s => s.setAccessToken)
    const setUser = useAuthStore(s => s.setAuth)
    const clearAuth = useAuthStore(s => s.clearAuth)
    const { data, isSuccess, isError, isLoading } = useRefresh();

    if (isLoading) {
        return <p>loading...</p>
    }
    if (isSuccess) {
        setAccessToken(data.token!)
        setUser(data.user)
    }
    if (isError) {
        clearAuth();
    }
}
export default Auth