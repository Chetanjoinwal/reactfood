// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react'
const Slider = () => {
  return (
    <section id="hero" className="hero section main-image">
      <div className="container swiper-slide">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up" className="aos-init aos-animate">Enjoy Your Healthy<br/>Delicious Food</h1>
            <p data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <a href="#book-a-table" className="btn-get-started">Booka a Table</a>
              <a href="#" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out">
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
   
    </section>


//     <section id="slider-home" className="d-none MY-EFFECT slider slider-prlx bg-b">
//     <Swiper
//       spaceBetween={10}
//       slidesPerView={1}
//       loop={true}
//       nav={true}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide><img src="./images/banner-1.jpeg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="./images/banner-1.jpeg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="./images/banner-1.jpeg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="./images/banner-1.jpeg" alt="" /></SwiperSlide>
    
//     </Swiper>
  
// </section>
  )
}

export default Slider