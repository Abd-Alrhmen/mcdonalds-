import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer () {
    return (
        <footer className="bg-red-700 text-white py-8 mt-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                {/* Logo */}
                <Link to="/">
                    <img 
                        src={logo} 
                        alt="McDonald's logo" 
                        className="h-[40px] object-contain"> 
                    </img>
                </Link>
                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="menu" className="hover:underline">Menu</Link>
                    <Link to="/#offers" className="hover:underline">Offer</Link>
                    <Link to="contact" className="hover:underline">Contact</Link>
                </div>

                {/*Social Icon*/}
                <div className="flex gap-4">
                    <a href="#" className="hover:text-yellow-300"><Facebook /></a>
                    <a href="#" className="hover:text-yellow-300"><Twitter /></a>
                    <a href="#" className="hover:text-yellow-300"><Instagram /></a>
                </div>
            </div>
            {/* copyright */}
            <div className="text-center text-sm mt-6 text-yellow-100">
                © 2025 Abdulrahman. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;