import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md py-5 ">
            <div className="container grid grid-cols-3">
                <Link href={'./'} className="relative flex items-center h-10 my-auto">
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='logo-image' fill className="object-contain object-left " />
                </Link>
                <Searchbar />
                <Navbar />
            </div>

        </header>
    )
}

export default Header
