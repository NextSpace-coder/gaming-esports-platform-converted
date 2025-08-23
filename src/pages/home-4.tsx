import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/header/header-three";
import HeroBannerFour from "../components/hero-banner/hero-banner-4";
import BrandArea from "../components/brand/brand-area";
import NftItemAreaTwo from "../components/nft-item/nft-item-area-2";
import AboutAreaFive from "../components/about-area/about-area-5";
import TeamAreaTwo from "../components/team/team-area-2";
import VideoAreaThree from "../components/video/video-area-3";
import ContactAreaTwo from "../components/contact/contact-area-2";
import TestimonialArea from "../components/testimonial/testimonial-area";
import BlogAreaTwo from "../components/blog/blog-area-2";
import FooterFour from "../layout/footer/footer-4";


export default function HomeFour() {
    return (
        <Wrapper>
            {/* seo title */}
            <SEOCom title="Home 4" />
            {/* seo title */}

            {/* header start */}
            <HeaderThree />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">

                {/* hero banner start */}
                <HeroBannerFour />
                {/* hero banner end */}

                {/* area background start */}
                <div className="area-background" style={{ backgroundImage: `url(/assets/img/bg/area_bg03.png)` }}>

                    {/* brand area start */}
                    <BrandArea top_cls="brand-area4" hideTitle={true} />
                    {/* brand area start */}

                    {/* nft item area start */}
                    <NftItemAreaTwo />
                    {/* nft item area end */}

                    {/* about area start */}
                    <AboutAreaFive />
                    {/* about area end */}

                </div>
                {/* area background end*/}

                {/* team area start */}
                <TeamAreaTwo style_2={true} />
                {/* team area end */}

                {/* video area start */}
                <VideoAreaThree />
                {/* video area end */}

                {/* contact area start */}
                <ContactAreaTwo />
                {/* contact area end */}

                {/* testimonial area start */}
                <TestimonialArea />
                {/* testimonial area end */}

                {/* blog area   start */}
                <BlogAreaTwo style_2={true} />
                {/* blog area   end */}
            </main>
            {/* main area end */}

            {/* footer start */}
            <FooterFour />
            {/* footer end */}
        </Wrapper>
    );
}
