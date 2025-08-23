import { NavLink } from 'react-router-dom';


export default function CtaArea() {
    return (
        <section className="cta-area position-relative section-pb-120">
            <div className="container custom-container4">
                <div className="cta-wrap">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-7">
                            <div className="cta-thumb">
                                <img src="/assets/img/others/cta-thumb.png" alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="cta-content-wrap">
                                <div className="section__title mb-0 title-shape-none">
                                    <h3 className="title mb-20">Best Gaming Sales</h3>
                                    <p>Register for your newsletter today to stay updated on your latest product release and exclusive offers</p>
                                    <NavLink to="/shop" className="tg-btn-5">
                                        <span>Learn More</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
