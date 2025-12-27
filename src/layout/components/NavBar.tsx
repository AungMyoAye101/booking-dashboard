import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header
            className='sticky top-0  max-w-8xl flex justify-between items-center gap-4 p-4 bg-white border-b '>
            <div>
                <Link to={'/'} className='font-bold text-2xl md:text-4xl text-blue-800'>
                    Booking.
                </Link>
            </div>
            <nav className='hidden md:flex gap-2'>

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