'use client';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VideoSvg } from "../svg";
import VideoPopup from "../common/video-popup";
import { NavLink } from "react-router-dom";
import { gallery_slider_setting } from "../../data/slider-setting";



// Video data
const videoItemData = [
   {
      id: 1,
      imgSrc: '/assets/img/gallery/video3-1.jpg',
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 2,
      imgSrc: '/assets/img/gallery/video3-2.png',
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 3,
      imgSrc: '/assets/img/gallery/video3-3.png',
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 4,
      imgSrc: '/assets/img/gallery/video3-4.jpg',
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
   {
      id: 5,
      imgSrc: '/assets/img/gallery/video3-5.jpg',
      videoId: "ssrNcwxALS4",
      cardTitle: "Daniel Barna Klark",
   },
];

export default function VideoAreaThree() {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   const [videoId, setVideoId] = useState<string>("");

   function handleVideo(videoId: string) {
      setIsVideoOpen(true);
      setVideoId(videoId);
   }
   return (
      <>
         <section
            className="video__area fix section-pb-120 section-pt-120 bg-img-cover bg-img-center"
            style={{ backgroundImage: "url(/assets/img/bg/video_bg4.png)" }}
         >
            <div className="container">
               <div className="row justify-content-center justify-content-center">
                  <div className="col-lg-auto">
                     <div className="section__title mb-60 text-center title-shape-none">
                        <h6 className="sub-title2">Popular Videos</h6>
                        <h3 className="title2">Mykd Media Section</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="video__slider">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-12">
                        <Swiper {...gallery_slider_setting} className="swiper-container gallery-active">
                           {videoItemData.map((video) => (
                              <SwiperSlide key={video.id}>
                                 <div className="video__item2">
                                    <div className="video__thumb">
                                       <img src={video.imgSrc} alt="img"/>
                                       <a
                                          onClick={() => handleVideo(video.videoId)}
                                          data-magnetic
                                          className="popup-video video-play-btn pointer"
                                       >
                                          <VideoSvg />
                                       </a>
                                    </div>
                                    <NavLink
                                       to="/services-details"
                                       className="video-card-title"
                                    >
                                       <span className="icon">
                                          <i className="fas fa-link"></i>
                                       </span>
                                       <span className="video-card-title-shape video-card-title-shape2">
                                          <img
                                             src="/assets/img/gallery/video3-card-title-shape2.png"
                                             alt="img"
                                          />
                                       </span>
                                       <span className="title">
                                          <span className="video-card-title-shape video-card-title-shape1">
                                             <img
                                                src="/assets/img/gallery/video3-card-title-shape1.png"
                                                alt="img"
                                             />
                                          </span>
                                          {video.cardTitle}
                                       </span>
                                    </NavLink>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         {videoId && (
            <VideoPopup
               isVideoOpen={isVideoOpen}
               setIsVideoOpen={setIsVideoOpen}
               videoId={videoId}
            />
         )}
         {/* video modal end */}
      </>
   );
}
