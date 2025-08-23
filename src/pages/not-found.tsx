import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import Footer from "../layout/footer/footer";
import { NotFoundSvg } from "../components/svg";

export default function NotFoundPage() {
    return (
        <Wrapper>
            {/* seo title */}
            <SEOCom title="Not Found" />
            {/* seo title */}

            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* breadcrumb area start */}
                <BreadcrumbArea title="Page Not Found" subtitle="404" bg="/assets/img/bg/breadcrumb_bg01.jpg" brd_img="/assets/img/others/breadcrumb_img02.png" />
                {/* breadcrumb area end */}

                {/* not found area start */}
                <div className="error__area team-bg section-pt-120 section-pb-120" style={{ backgroundImage: `url(/assets/img/bg/team_bg.jpg)` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-7 col-lg-8">
                                <div className="error-content text-center">
                                    <NotFoundSvg />
                                    <h2 className="title">Look Like You’re Lost</h2>
                                    <p>Sorry, the page you are looking for could not be found</p>
                                    <NavLink to="/" className="btn">back to home</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* not found area end */}

            </main>
            {/* main area end */}


            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
