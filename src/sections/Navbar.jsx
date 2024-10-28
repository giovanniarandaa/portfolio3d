import {useState} from "react";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {["Home", "About"].map((item, index) => (

            ))}
        </ul>
    )
}

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(p => !p)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Giovanni Aranda
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="toggle-menu">
                        <img src={open ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Navbar
