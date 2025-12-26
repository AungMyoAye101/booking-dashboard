import { useUserById } from "@/hooks/use-user"

const Home = () => {
    const data = useUserById("694d689095219355fad63357")
    console.log(data)
    return (
        <div>Home
            adadada
            <div>
            </div> </div>
    )
}

export default Home