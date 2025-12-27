import { Card, CardContent } from "@/components/ui/card";
import { useGetAllUsers } from "@/hooks/use-user"


const Home = () => {

    const { data, isLoading } = useGetAllUsers();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            {
                data?.users.map((user) => (
                    <Card key={user._id}>
                        <CardContent>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </CardContent>
                    </Card>
                ))
            }

        </div>
    )
}

export default Home