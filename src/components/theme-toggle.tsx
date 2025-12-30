import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from './theme-provider'
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        < >
            {
                theme === "light" ?
                    <MoonIcon onClick={() => setTheme("dark")} className='text-primary-violet' /> :
                    <SunIcon onClick={() => setTheme("light")} />
            }
        </>
    )
}

export default ThemeToggle