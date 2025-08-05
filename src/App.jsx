import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import OfferProducts from './pages/OfferProducts';

function App() {
  return (
    <>
      <Helmet>
        <title>Happy Meal - McDonald's</title>
        <meta name="description" content="Order your favorite McDonald's meals online. Fast, fresh, and hot!" />
        <meta name="keywords" content="McDonald's, Burger, Fast Food, Happy Meal, Offers" />

        {/* Open Graph */}
        <meta property="og:title" content="Happy Meal - McDonald's" />
        <meta property="og:description" content="Discover offers, meals, and more from McDonald's!" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Happy Meal" />
        <meta property="og:image" content="https://abd-alrhmen.github.io/mcdonalds-/social-banner.jpg" />
        <meta property="og:url" content="https://abd-alrhmen.github.io/mcdonalds-" />
      </Helmet>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='menu' element={<Menu />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path='/home/:tag' element={<OfferProducts />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}
export default App;
