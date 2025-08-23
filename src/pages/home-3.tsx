import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import HeroBannerThree from "../components/hero-banner/hero-banner-3";
import AboutAreaFour from "../components/about-area/about-area-4";
import VideoAreaTwo from "../components/video/video-area-2";
import ServiceAreaTwo from "../components/services/services-area-2";
import UpcomingMatchesTwo from "../components/upcoming-match/upcoming-match-2";
import TeamAreaTwo from "../components/team/team-area-2";
import BlogAreaTwo from "../components/blog/blog-area-2";
import BrandArea from "../components/brand/brand-area";
import FooterThree from "../layout/footer/footer-3";


export default function HomeThree() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Home 3" />
      {/* seo title */}

      {/* header start */}
      <HeaderTwo />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">

        {/* hero banner start */}
        <HeroBannerThree />
        {/* hero banner end */}

        {/* about area start */}
        <AboutAreaFour />
        {/* about area end */}

        {/* video area start */}
        <VideoAreaTwo />
        {/* video area end */}

        {/* service area start */}
        <ServiceAreaTwo />
        {/* service area end */}

        {/* upcoming match start */}
        <UpcomingMatchesTwo />
        {/* upcoming match end */}

        {/* team area start */}
        <TeamAreaTwo />
        {/* team area end */}

        {/* blog area start */}
        <BlogAreaTwo />
        {/* blog area end */}

        {/* brand area start */}
        <BrandArea top_cls="brand-area3 pb-60" hideTitle={true} />
        {/* brand area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <FooterThree/>
      {/* footer end */}
    </Wrapper>
  );
}
