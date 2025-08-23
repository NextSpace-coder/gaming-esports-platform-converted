import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import Footer from "../layout/footer/footer";
import CheckoutArea from "../components/checkout/checkout-area";

export default function CheckoutPage() {
    return (
        <Wrapper>
            {/* seo title */}
            <SEOCom title="Checkout" />
            {/* seo title */}

            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* breadcrumb area start */}
                <BreadcrumbArea title="Checkout" subtitle="Checkout" bg="/assets/img/bg/breadcrumb_bg01.jpg" brd_img="/assets/img/others/breadcrumb_img02.png" />
                {/* breadcrumb area end */}

                {/* chekout area start */}
                <CheckoutArea />
                {/* chekout area end */}

            </main>
            {/* main area end */}


            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
