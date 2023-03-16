import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import linkBUILDER from '../../assets/firstrubrique.jpg'
import linkABOUT from '../../assets/secondrubrique.webp'
import linkCOMPARE from '../../assets/thirdrubrique.jpg'

import {FaChevronLeft , FaChevronRight } from "react-icons/fa";

export default function Carousel() {

  const [sliderRef, setSliderRef] = useState(null)

  // const sliderSettings = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   arrows: true,
  // }
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const carouselCards = 
  [
    {
      imageSrc: linkBUILDER,
      title: "lien vers builder",
      description: 'Venez découvrir le builder !',
      buttonText: 'Découvrir içi',
    }
    ,
    {
      imageSrc: linkABOUT,
      title: "lien vers page about",
      description: 'Venez découvrir qui nous-sommes !',
      buttonText: 'Découvrir içi',
    }
    ,
    {
      imageSrc: linkCOMPARE,
      title: "lien vers compare",
      description: 'Venez découvrir le comparateur !',
      buttonText: 'Découvrir içi',
    }    
  ]

  // return (
  //   <div className="carousel--container">
  //     <Slider {...sliderSettings}>
  //       <div>
  //         <img src="https://picsum.photos/id/237/800/360" alt=""/>
  //       </div>
  //       <div>
  //         <div className="carousel-card--container">
  //           <img src={linkBUILDER} alt=""/>
  //         </div>
  //       </div>
  //       <div>
  //         <img src="https://picsum.photos/id/231/800/360" alt=""/>
  //       </div>
  //     </Slider>
  //   </div>
  // );

  // return (
  //   <div className='content'>

  //     <button onCLick={sliderRef?.slickPrev}>
  //       <FaChevronLeft />
  //     </button>
  //     <button onCLick={sliderRef?.slickNext}>
  //       <FaChevronRight />
  //     </button>

  //     <Slider {...sliderSettings}>
        // {carouselCards.map((card, index) => (
        //   <div key={index}>
        //     <img alt={card.title} src={card.imageSrc} width="800" height="360" />
        //     <p>{card.description}</p>
        //     <button className='btn'>{card.buttonText}</button>
        //   </div>
        // ))}
  //     </Slider>
  //   </div>
  // )

  return (
    <div className="carousel--container">
      <Slider {...settings}>

      {carouselCards.map((card, index) => (
          <div key={index} className="carousel-card--container">
            <img alt={card.title} src={card.imageSrc}/>
            <p>{card.description}</p>
            <button className='btn'>{card.buttonText}</button>
          </div>
        ))}
        
      </Slider>
    </div>
  );

}