import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import Footer from "../layout/footer/footer";
import ResetPassForm from "../components/forms/reset-pass-form";

export default function ResetPasswordPage() {
    return (
        <Wrapper>
            {/* seo title */}
            <SEOCom title="Register" />
            {/* seo title */}

            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* breadcrumb area start */}
                <BreadcrumbArea title="Reset Password" subtitle="Reset Password" bg="/assets/img/bg/breadcrumb_bg01.jpg" brd_img="/assets/img/others/breadcrumb_img02.png" />
                {/* breadcrumb area end */}

                {/* reset password area start */}
                <section className="signup__area team-bg section-pt-120 section-pb-120" style={{ backgroundImage: `url(/assets/img/bg/team_bg.jpg)` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="singUp-wrap">
                                    <h2 className="title">Forgot Password!</h2>
                                    <p>Enter your email address to request password reset.</p>
                                    {/* form start */}
                                    <ResetPassForm />
                                    {/* form end */}
                                    <div className="account__switch">
                                        <p>Remember Password?<NavLink to="/login">Login</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* reset password area end */}

            </main>
            {/* main area end */}


            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
