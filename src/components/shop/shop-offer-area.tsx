import { NavLink } from "react-router-dom";


export default function ShopOfferArea() {
    return (
        <section className="offer__area fix bg-img-cover bg-img-center" style={{ backgroundImage: `url(/assets/img/bg/offer_bg5.png)` }}>
            <div className="container custom-container4">
                <div className="row justify-content-center flex-row-reverse">
                    <div className="col-xl-5">
                        <div className="section__title text-center title-shape-none">
                            <h3 className="title2">UPTO 70% OFF</h3>
                            <p>Register for your newsletter today to stay updated on your latest product
                                release and exclusive offers</p>
                            <div className="btn-group">
                                <NavLink to="/shop" className="tg-btn-4">
                                    <span>Explore Items</span>
                                </NavLink>
                                <NavLink to="/shop-details" className="tg-btn-4">
                                    <span>Items Details</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 align-self-end">
                        <div className="offer-thumb">
                            <img src="/assets/img/others/offer-thumb5-1.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
