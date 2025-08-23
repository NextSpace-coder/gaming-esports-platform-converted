import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import CartArea from "../components/cart/cart-area";
import Footer from "../layout/footer/footer";

export default function CartPage() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Cart" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea
          title="Shop Cart"
          subtitle="Cart"
          bg="/assets/img/bg/breadcrumb_bg01.jpg"
          brd_img="/assets/img/others/breadcrumb_img02.png"
        />
        {/* breadcrumb area end */}

        {/* cart area start */}
        <CartArea />
        {/* cart area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
