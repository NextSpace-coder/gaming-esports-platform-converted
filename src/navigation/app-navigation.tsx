import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import HomeTwo from "../pages/home-2";
import AboutPage from "../pages/about";
import TournamentPage from "../pages/tournament";
import TournamentDetailsPage from "../pages/tournament-details";
import ShopPage from "../pages/shop";
import ShopDetailsPage from "../pages/shop-details";
import ServicesPage from "../pages/services";
import ServiceDetailsPage from "../pages/service-details";
import TeamDetailsPage from "../pages/team-details";
import BlogPage from "../pages/blog";
import BlogDetailsPage from "../pages/blog-details";
import ContactPage from "../pages/contact";
import ScrollToTop from "../components/scroll-to-top";
import HomeThree from "../pages/home-3";
import HomeFour from "../pages/home-4";
import HomeFive from "../pages/home-5";
import CartPage from "../pages/cart";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ResetPasswordPage from "../pages/reset-password";
import CheckoutPage from "../pages/checkout";
import NotFoundPage from "../pages/not-found";


export default function AppNavigation () {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/home-3" element={<HomeThree />} />
        <Route path="/home-4" element={<HomeFour />} />
        <Route path="/home-5" element={<HomeFive/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route path="/tournament-details" element={<TournamentDetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details" element={<ShopDetailsPage />} />
        <Route path="/shop-details/:id" element={<ShopDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}