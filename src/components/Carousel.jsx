import React from "react";
import AwesomeSwiper from "react-awesome-swiper";
import QuotesCard from "./QuoteCard";
import quotes from "../quotes.json";

//this config is same as idangrous swiper
const config = {
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    bulletElement: "li",
    hideOnClick: true,
    clickable: true,
  },
  on: {
    slideChange: function () {
      // console.log(this.activeIndex);
    },
  },
};
class Example extends React.Component {
  swiperRef = null;
  goNext = () => {
    //use `this.swiperRef.swiper` to get the instance of Swiper
    this.swiperRef.swiper.slideNext();
  };
  render() {
    return (
      <AwesomeSwiper
        ref={(ref) => (this.swiperRef = ref)}
        config={config}
        className="h-[70vh] p-4"
      >
        <div className="swiper-wrapper p-4">
          {quotes.length &&
            quotes.map((quote, index) => (
              <div key={index} className="swiper-slide">
                <QuotesCard key={index} quote={quote} />
              </div>
            ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    );
  }
}

export default Example;

// import React from 'react'

// function Carousel() {
//   return (
//     <div className="carousel w-full">
// {quotes.length &&
//             quotes.map((quote, index) => (
//               <div key={index} className="carousel-item relative w-full">
//                 <QuotesCard key={index} quote={quote} />
//               </div>
//             ))}

//   <div id="slide1" className="carousel-item relative w-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//   )
// }

// export default Carousel;
