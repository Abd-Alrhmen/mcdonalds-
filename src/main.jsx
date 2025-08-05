import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SearchProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
