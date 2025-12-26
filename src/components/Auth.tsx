import { useFetchMe } from '@/hooks/use-auth'
import { useAuthStore } from '@/store/auth-store'

const Auth = () => {
    const setAuth = useAuthStore(s => s.setAuth)
    const clearAuth = useAuthStore(s => s.clearAuth)
    const { data, isSuccess, isError } = useFetchMe();

    if (isSuccess) {
        setAuth(data)
    }
    if (isError) {
        clearAuth()
    }
    console.log(data, "auth")
    return null;
}
export default Auth