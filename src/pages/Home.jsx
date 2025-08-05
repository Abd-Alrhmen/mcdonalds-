import { Link } from "react-router-dom";
import Offers from "../components/Offers";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import burgerImg from '../assets/burger.png';
import { Helmet } from "react-helmet";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Home - Happy Meal</title>
        <meta
          name="description"
          content="Welcome to Happy Meal! Explore our delicious menu, amazing offers, and enjoy the best fast food experience."
        />
        <meta name="keywords" content="Happy Meal, fast food, burgers, offers, McDonald's" />
        <meta name="author" content="Happy Meal Team" />
      </Helmet>

      <div className="bg-[#c22015] py-12 ">
        <div className="container mx-auto px-8 md:flex md:flex-row items-center justify-between ">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={burgerImg} alt="Happy Meal Burger" className="w-[250px] md:w-[350px]" />
          </div>
          <div className="w-full md:w-1/2 text-white text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <br /> McDonald's
            </h1>
            <p className="text-lg mb-6">Taste the Joy in Every Bite!</p>
            <Link
              to="menu"
              className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-black font-semibold transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
      <Offers />
    </>
  );
}

export default Home;
