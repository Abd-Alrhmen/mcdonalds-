import {useContext,useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart  } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import logo from '../assets/logo.png';
function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [ showNavbar, SetShowNavbar ] = useState(true);
  const [ lastScrollY, setLastScrollY ] = useState(0);
  const {setSearchTrem} = useContext(SearchContext);
  const navigate = useNavigate();
  
  // Search
  const handleSearchChange = (e)=> {
    const value = e.target.value ;
    setSearchTrem(value);
    navigate("/menu")
  }

// Scroll
  useEffect(()=>{
    const handleScroll = ()=>{
      const currenty = window.scrollY;
      if(currenty > lastScrollY){
        SetShowNavbar(false);
      }else{
        SetShowNavbar(true);
      }
      setLastScrollY(currenty);
    }

    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    };
  },[lastScrollY]);

  const totalQuantity = cartItems.reduce((total, item)=>
    total + item.quantity, 0
  )

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`bg-red-500 p-4 text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
      showNavbar ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/">
          <img 
            src={logo} 
            alt="McDonald's logo" 
            className="h-[40px] object-contain"> 
          </img>
        </Link>
        <input type="text"
          placeholder="Search.." 
          onChange={handleSearchChange}
          className=" px-3 py-1 md:w-1/3 rounded-lg text-black border border-yellow-500 hover:border-yellow-600 focus:outline-none"
        />

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex gap-4">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/menu"className="hover:text-yellow-500">Menu</Link></li>
          <li><Link to="/contact"className="hover:text-yellow-500">Contact</Link></li>
        </ul>

        <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

        {/* Cart */}
        <Link to="cart" className="relative">
          <ShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 text-yellow-200 text-xs font-semibold px-1">
            {totalQuantity}
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 px-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="menu">Menu</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li><Link to="wishlist">Wishlist</Link></li>
        </ul>
      )}
    </nav>
  )
}
export default Navbar ;