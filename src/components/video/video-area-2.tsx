import { useState } from "react";
import { NavLink } from "react-router-dom";

// nav data
const navData = [
    { id: "about01", title: "CSGO" },
    { id: "about02", title: "Dota-2" },
    { id: "about03", title: "Pubg" },
    { id: "about04", title: "Freefire" },
    { id: "about05", title: "Clash of clan" },
];
// tab content data
const tabContentData = [
    {
        id: "about01",
        imgSrc: "/assets/img/gallery/video3-1.jpg",
        title: "Daniel Barna Klark",
    },
    {
        id: "about02",
        imgSrc: "/assets/img/gallery/video3-2.png",
        title: "Daniel Barna Klark",
    },
    {
        id: "about03",
        imgSrc: "/assets/img/gallery/video3-3.png",
        title: "Daniel Barna Klark",
    },
    {
        id: "about04",
        imgSrc: "/assets/img/gallery/video3-4.jpg",
        title: "Daniel Barna Klark",
    },
    {
        id: "about05",
        imgSrc: "/assets/img/gallery/video3-5.jpg",
        title: "Daniel Barna Klark",
    },
];

export default function VideoAreaTwo() {
    const [activeTab, setActiveTab] = useState(navData[0].id);

    return (
        <section
            className="video__area section-pb-120 section-pt-120 bg-img-cover"
            style={{ backgroundImage: "url(/assets/img/bg/video_bg3.png)" }}
        >
            <div className="container">
                <div className="row justify-content-xl-between justify-content-center">
                    <div className="col-lg-auto">
                        <div className="section__title mb-50 title-shape-none text-xl-start text-center">
                            <h6 className="sub-title2">Watch My Live Videos</h6>
                            <h3 className="title2">Online STREAMS</h3>
                        </div>
                    </div>
                    <div className="col-lg-auto text-xl-end align-self-end text-center">
                        <ul className="nav nav-tabs video-tab-wrap mb-60" id="myTab" role="tablist">
                            {navData.map((nav) => (
                                <li className="nav-item" key={nav.id} role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === nav.id ? "active" : ""}`}
                                        onClick={() => setActiveTab(nav.id)}
                                        type="button"
                                        role="tab"
                                        aria-controls={nav.id}
                                        aria-selected={activeTab === nav.id}
                                    >
                                        {nav.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="myTabContent">
                    {tabContentData.map((content) => (
                        <div
                            key={content.id}
                            className={`tab-pane ${activeTab === content.id ? "show active" : ""}`}
                            id={content.id}
                            role="tabpanel"
                            aria-labelledby={`${content.id}-tab`}
                        >
                            <div className="video__card">
                                <div className="video-card-shape video-card-shape1">
                                    <img src="/assets/img/gallery/video3-card-shape1.png" alt="img" />
                                </div>
                                <div className="video-card-shape video-card-shape2">
                                    <img src="/assets/img/gallery/video3-card-shape2.png" alt="img" />
                                </div>
                                <div className="video-card-shape video-card-shape3">
                                    <img src="/assets/img/gallery/video3-card-shape3.png" alt="img" />
                                </div>
                                <div className="video-card-shape video-card-shape4">
                                    <img src="/assets/img/gallery/video3-card-shape4.png" alt="img" />
                                </div>
                                <div className="video-card-img">
                                    <img src={content.imgSrc} alt={content.title} />
                                </div>
                                <NavLink to="/service-details" className="video-card-title">
                                    <span className="icon">
                                        <i className="fas fa-link"></i>
                                    </span>
                                    <span className="video-card-title-shape video-card-title-shape2">
                                        <img src="/assets/img/gallery/video3-card-title-shape2.png" alt="img" />
                                    </span>
                                    <span className="title">
                                        <span className="video-card-title-shape video-card-title-shape1">
                                            <img src="/assets/img/gallery/video3-card-title-shape1.png" alt="img" />
                                        </span>
                                        {content.title}
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}