import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div>
                <Link to={'/'} className='font-bold text-2xl md:text-4xl text-blue-800'>
                    Booking.
                </Link>
            </div>
            <nav>
                <Button>
                    <Link to={"/login"}>Login</Link>
                </Button>
                <Button>
                    <Link to={"/signup"}>signup</Link>
                </Button>
            </nav>
        </header>
    )
}

export default NavBar