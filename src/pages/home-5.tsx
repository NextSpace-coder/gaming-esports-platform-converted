import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderFour from "../layout/header/header-four";
import FooterFour from "../layout/footer/footer-4";
import HeroBannerFive from "../components/hero-banner/hero-banner-5";
import ProductCategory from "../components/category/product-category";
import ShopOfferArea from "../components/shop/shop-offer-area";
import ShopAreaTwo from "../components/shop/shop-area-2";
import ShopDealArea from "../components/shop/shop-deal-area";
import CtaArea from "../components/cta/cta-area";


export default function HomeFive() {
    return (
        <Wrapper>
            {/* seo title */}
            <SEOCom title="Home 5" />
            {/* seo title */}

            {/* header start */}
            <HeaderFour />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* hero banner start */}
                <HeroBannerFive />
                {/* hero banner end */}

                {/* product category area start */}
                <ProductCategory />
                {/* product category area end */}

                {/* shop offer area start */}
                <ShopOfferArea />
                {/* shop offer area end */}

                {/* shop area start */}
                <ShopAreaTwo/>
                {/* shop area end */}

                {/* shop deal area start */}
                <ShopDealArea/>
                {/* shop deal area end */}

                {/* cta area start */}
                <CtaArea />
                {/* cta area end */}

            </main>
            {/* main area end */}

            {/* footer start */}
            <FooterFour />
            {/* footer end */}
        </Wrapper>
    );
}
