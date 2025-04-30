import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<NotFoundPage/>} />
            {/* <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/orders" element={<Orders />} /> */}
            {/* <Route path="/order/:id" element={<OrderDetails />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
            {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} /> */}
            {/* <Route path="/search" element={<SearchResults />} /> */}
            {/* <Route path="/wishlist" element={<Wishlist />} /> */}
            {/* <Route path="/compare" element={<Compare />} /> */}
            {/* <Route path="/404" element={<NotFoundPage />} /> */}
            {/* <Route path="/500" element={<ServerError />} /> */}
            {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
            {/* <Route path="/maintenance" element={<Maintenance />} /> */}
            {/* <Route path="/access-denied" element={<AccessDenied />} /> */}
            {/* <Route path="/under-construction" element={<UnderConstruction />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App