import { NavLink } from 'react-router-dom';

export default function AboutAreaFour() {
    return (
        <section className="about__area section-pb-120">
            <div className="container">
                <div className="row gy-5 justify-content-center align-items-center">
                    <div className="col-xl-6">
                        <div className="about__funFact-images3">
                            <img className="main-img1" src="/assets/img/others/about_img3-1.png" alt="background" />
                            <img className="main-img2" src="/assets/img/others/about_img3-2.png" alt="image" />
                            <img className="main-img3" src="/assets/img/others/about_img3-3.png" alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="section__title text-start mb-30 title-shape-none">
                            <h6 className="sub-title2">More About My Self</h6>
                            <h3 className="title2">Original Esports
                                <br /> <span className="text-theme d-inline-block position-relative"> Pro Player <img className="section-line" src="/assets/img/others/section-line.png" alt="img" /></span></h3>
                        </div>
                        <div className="about__content-three mt-50">
                            <p>Commodo metus auctor potenti sapien eget porttitor, elementum semper cubilia lacinia praesent dis hac dui, nisi ridiculus lobortis purus primis platea. Suscipit ultricies pellentesque hendrerit lectus habitant mattis aenean, quis justo odio blandit vitae nascetur a, vulputate aptent.</p>
                        </div>
                        <div className="btn-group mt-4">
                            <NavLink to="/about" className="tg-btn-4">
                                <span>Learn More</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
