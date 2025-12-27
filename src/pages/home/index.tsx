import { useGetAllUsers } from "@/hooks/use-user"


const Home = () => {

    const { data: users } = useGetAllUsers();

    console.log(users, "Home page,")
    return (
        <div>
            {
                users?.map((user) => (
                    <div key={user._id} >
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home