import { NavLink } from "react-router-dom";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export default function HeroBannerThree() {
    return (
        <MouseParallaxContainer>
            <section className="banner__area banner__area-two">
                <div className="banner__bg-shape" style={{ backgroundImage: `url(/assets/img/slider/banner_bg_shape3-2.jpg)` }}>
                    <img src="/assets/img/slider/banner_bg_shape3-1.jpg" alt="img" />
                </div>
                <div className="banner__bg tg-jarallax">
                    <img src="/assets/img/slider/banner_bg3.png" alt="img" />
                </div>
                <div className="banner__shape banner__shape3-1 jump">
                    <img src="/assets/img/slider/slider_shape3-1.svg" alt="img" />
                </div>
                <div className="banner__shape banner__shape3-2 movingX">
                    <img src="/assets/img/slider/slider_shape3-2.svg" alt="img" />
                </div>
                <div className="banner__shape banner__shape3-3 jump-reverse">
                    <img src="/assets/img/slider/slider_shape3-3.svg" alt="img" />
                </div>
                <div className="container custom-container2">
                    <div className="row gy-5 align-items-center flex-row-reverse">
                        <div className="col-xl-6">
                            <MouseParallaxChild factorX={0.03} factorY={0.03}  className="banner__img wow bounceInRight" data-magnetic data-wow-delay=".4s">
                                <div className="banner__img-shape">
                                    <img src="/assets/img/slider/thumb_bg_shape3-1.jpg" alt="img" />
                                </div>
                                <div className="thumb">
                                    <img src="/assets/img/slider/slider_img03.png" alt="img" />
                                </div>
                            </MouseParallaxChild>
                        </div>
                        <div className="col-xl-6">
                            <div className="banner__content slider__content">
                                <span className="sub-title2 wow bounceInLeft" data-wow-delay=".1s">Professional Esports Team</span>
                                <h2 className="title wow bounceInLeft" data-wow-delay=".2s">Game Live</h2>
                                <p className="wow bounceInLeft" data-wow-delay=".4s">Lorem ipsum dolor sit amet consectetur adipiscing elit, non parturient nulla eleifend in sagittis, torquent semper cubilia cras donec vehicula. Ultrices cubilia venenatis mattis senectus vestibulum etiam...</p>
                                <div className="banner__btn d-flex wow bounceInLeft" data-wow-delay=".6s">
                                    <NavLink to="/contact" className="tg-btn-4">
                                        <span>Explore Items</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </MouseParallaxContainer>
    )
}
