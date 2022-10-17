import React from 'react'
import Navbar from '../components/Navbar'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import 'swiper/css';
import Editorpick from '../components/home/Editorpick';

const HomePage = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Navbar />

      <div className="mt-20">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner-image position-relative">
         
            <img src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_02-1500x500.jpg" class="banner-img" alt="" loading="lazy" width="1500" height="500"/>
              <span className="gridlove-hidden-overlay" />

            </div>

            <div className="gridlove-cover-content pl-10 ">
              <div className="entry-header">
                <div className="entry-category">
                  <a
                    href="https://demo.mekshq.com/gridlove/?cat=3"
                    className="gridlove-cat gridlove-cat-3"
                  >
                    Lifestyle
                  </a>{" "}
                </div>
                <h2 className="entry-title h1">
                  <a href="https://demo.mekshq.com/gridlove/?p=192" className="banner-h2">
                    Everything you ever need to know about flowers
                  </a>
                </h2>
                <div className="entry-content">
                  <p>
                    Credibly empower enterprise wide mindshare for excellent
                    "outside the box" thinking. Proactively mesh impactful meta
                    services rather than enterprise results. Professionally
                    generate end-to-end human capital...
                  </p>
                </div>
                <div className="entry-meta d-flex" style={{color: 'rgba(255, 255, 255, .8)'}}>
                  <div className="meta-item meta-author d-flex">
                    <div className="coauthors">
                      <span className="vcard author">
                        <span className="fn">
                          <a href="https://demo.mekshq.com/gridlove?author_name=meks2" className="d-flex mr-10">
                            <img
                              alt=""
                              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                              className="avatar avatar-24 photo"
                              loading="lazy"
                              width={24}
                              height={24}
                            />
                            Lisa Scholfield
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="meta-item meta-comments">
                    <a href="https://demo.mekshq.com/gridlove/?p=192#comments">
                      4 comments
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image position-relative">
         
            <img src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_37-1500x500.jpg" className="banner-img" alt="" loading="lazy" width="1500" height="500"/>
              <span className="gridlove-hidden-overlay" />

            </div>

            <div className="gridlove-cover-content pl-10 ">
              <div className="entry-header">
                <div className="entry-category">
                  <a
                    href="https://demo.mekshq.com/gridlove/?cat=3"
                    className="gridlove-cat gridlove-cat-3"
                  >
                    Lifestyle
                  </a>{" "}
                </div>
                <h2 className="entry-title h1">
                  <a href="https://demo.mekshq.com/gridlove/?p=192" className="banner-h2">
                    Everything you ever need to know about flowers
                  </a>
                </h2>
                <div className="entry-content">
                  <p>
                    Credibly empower enterprise wide mindshare for excellent
                    "outside the box" thinking. Proactively mesh impactful meta
                    services rather than enterprise results. Professionally
                    generate end-to-end human capital...
                  </p>
                </div>
                <div className="entry-meta d-flex" style={{color: 'rgba(255, 255, 255, .8)'}}>
                  <div className="meta-item meta-author d-flex">
                    <div className="coauthors">
                      <span className="vcard author">
                        <span className="fn">
                          <a href="https://demo.mekshq.com/gridlove?author_name=meks2" className="d-flex mr-10">
                            <img
                              alt=""
                              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                              className="avatar avatar-24 photo"
                              loading="lazy"
                              width={24}
                              height={24}
                            />
                            Lisa Scholfield
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="meta-item meta-comments">
                    <a href="https://demo.mekshq.com/gridlove/?p=192#comments">
                      4 comments
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
          </SwiperSlide>
        </Swiper>

        <div className="test"></div>
      </div>
    </>
  );
};

export default HomePage;
 

