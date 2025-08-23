import { NavLink } from "react-router-dom";



export default function FooterFour() {
  return (
    <footer className="footer-style-four bg-img-cover bg-img-center" 
      style={{backgroundImage:`url(/assets/img/bg/footer_bg4.png)`}}>
        <div className="footer__top-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="footer-widget text-center">
                            <div className="footer-logo logo">
                                <NavLink to="/">
                                   <img src="/assets/img/logo/preloader.png" alt="Logo"/>
                                </NavLink>
                            </div>
                            <div className="footer-menu-link mt-20">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/shop">Shop</NavLink>
                                <NavLink to="/tournament">Tournament</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                            </div>
                        </div>
                        <div className="footer-newsletter2">
                            <h4 className="title">MYKD NEWSLETTER</h4>
                            <form action="#" className="footer-newsletter-form2">
                                <input type="email" placeholder="Enter Email Address"/>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright__wrap">
                <div className="row gy-2 align-items-center">
                    <div className="col-lg-6">
                        <div className="copyright__text">
                            <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>Mykd</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright__menu">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                <li><NavLink to="/contact">Join our team</NavLink></li>
                                <li><NavLink to="/contact">Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
