import { Route, Routes } from "react-router-dom";
import { AboutUs, ContactUs, Filter, Home, OnSale, PageNotFound, ProductDetail, Wedding } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />

      <Route path="about-us" element={ <AboutUs /> } />

      <Route path="contact-us" element={ <ContactUs /> } />

      <Route path="on-sale" element={ <OnSale /> } />

      <Route path="wedding" element={ <Wedding /> } />

      <Route path="products" element={ <Filter /> } />

      <Route path="products/:id" element={ <ProductDetail /> } />

      <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  )
}