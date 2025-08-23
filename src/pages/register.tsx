import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import Footer from "../layout/footer/footer";
import { GoogleSvg } from "../components/svg";
import RegisterForm from "../components/forms/register-form";

export default function RegisterPage() {
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
                <BreadcrumbArea title="Registration" subtitle="SIGN UP" bg="/assets/img/bg/breadcrumb_bg01.jpg" brd_img="/assets/img/others/breadcrumb_img02.png" />
                {/* breadcrumb area end */}


                {/* register area start */}
                <section className="signup__area team-bg section-pt-120 section-pb-120" style={{ backgroundImage: `url(/assets/img/bg/team_bg.jpg)` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="singUp-wrap">
                                    <h2 className="title">Create Your Account</h2>
                                    <p>Hey there! Ready to join the party? We just need a few details from you to get started. {"Let's"} do this!</p>
                                    <div className="account__social">
                                        <a href="#" className="account__social-btn">
                                            <GoogleSvg />
                                            Continue with google
                                        </a>
                                    </div>
                                    <div className="account__divider">
                                        <span>OR</span>
                                    </div>
                                    {/* form start */}
                                    <RegisterForm />
                                    {/* form end */}
                                    <div className="account__switch">
                                        <p>Already have an account?<NavLink to="/login">Login</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* register area end */}


            </main>
            {/* main area end */}


            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
