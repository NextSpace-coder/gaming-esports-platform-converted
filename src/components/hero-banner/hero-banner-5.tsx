import { NavLink } from "react-router-dom";


export default function HeroBannerFive() {
    return (
        <section className="banner__area banner__area-four">
            <div className="banner__bg tg-jarallax">
                <img src="/assets/img/slider/banner_bg5.png" alt="img" />
            </div>
            <div className="banner__bg-shape">
                <img src="/assets/img/slider/banner_bg_shape5-1.png" alt="img" />
            </div>
            <div className="container custom-container4">
                <div className="row gy-5 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="slider__img5">
                            <img src="/assets/img/slider/slider_img05.png" data-magnetic="" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="banner__content slider__content">
                            <h2 className="title wow fadeInUp" data-wow-delay=".1s">Wooting 60HE <span className="text-stroke">Wooting 60HE</span></h2>
                            <h3 className="sub-title wow fadeInUp" data-wow-delay=".2s">Challenge the industry
                                with us</h3>
                            <div className="banner__btn d-flex wow fadeInUp" data-wow-delay=".6s">
                                <NavLink to="/shop" className="tg-btn-5">
                                    <span>Order Now</span>
                                </NavLink>
                                <NavLink to="/about" className="tg-btn-line">
                                    <span>Learn More</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
