import { useUserById } from "@/hooks/use-user"
import { useAuthStore } from "@/store/auth-store"

const Home = () => {

    const id = useAuthStore(s => s.user?._id)
    console.log(useUserById(id!));

    return (
        <div>Home
            adadada
            <div>

            </div> </div>
    )
}

export default Home