import { NavLink } from "react-router-dom";

const blogData = [
    {
        id: 1,
        imgSrc: "/assets/img/blog/blog_card3-1.jpg",
        date: "Aug 19, 2024",
        comments: "No comments",
        title: "Special edition boots campaign year end sale for you",
    },
    {
        id: 2,
        imgSrc: "/assets/img/blog/blog_card3-2.jpg",
        date: "Aug 19, 2024",
        comments: "No comments",
        title: "Special edition boots campaign year end sale for you",
    },
];

type IProps = {
    style_2?: boolean;
}

export default function BlogAreaTwo({ style_2=false }: IProps) {
    return (
        <section className={`blog-area3 position-relative section-pb-120 ${style_2 ? '' : 'section-pt-240 bg-img-center bg-img-cover'}`}>
            {!style_2 && (
                <div
                    className="blog-area3-bg-thumb"
                    style={{ backgroundImage: `url(/assets/img/bg/blog_bg3.png)` }}
                ></div>
            )}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        {!style_2 && (
                            <div className="section__title text-center mb-60 title-shape-none">
                                <span className="sub-title2">Professional Esports Team</span>
                                <h3 className="title2">
                                    Latest{" "}
                                    <span className="text-theme d-inline-block position-relative">
                                        <img
                                            className="section-line"
                                            src="/assets/img/others/section-line.png"
                                            alt="img"
                                        />
                                        Blog Posts
                                    </span>
                                </h3>
                            </div>
                        )}
                        {style_2 && (
                            <div className="section__title text-center mb-60 title-shape-none">
                                <span className="sub-title2">Professional Esports Team</span>
                                <h3 className="title2">Latest Blog Posts</h3>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="col-lg-6">
                            <div className="blog-card">
                                <div className="blog-card-img">
                                    <img src={blog.imgSrc} alt="Blog Thumbnail"/>
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <i className="far fa-calendar-alt"></i> {blog.date}
                                            </li>
                                            <li>
                                                <i className="far fa-comments"></i>
                                                <a href="#">{blog.comments}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="blog-card-title">
                                        <NavLink to={`/blog-details`}>{blog.title}</NavLink>
                                    </h4>
                                    <div className="blog-post-read">
                                        <NavLink to={`/blog-details`}>Read Details</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
