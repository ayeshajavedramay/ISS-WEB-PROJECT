import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ProductProvider } from './components/ProductContext.jsx'
import { AuthProvider } from './components/AuthContext.jsx'
import { CartProvider } from './components/CartContext.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
