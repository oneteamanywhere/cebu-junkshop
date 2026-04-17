"use client";

import Slider from "react-slick";
import Image from "next/image";

const images = [
  "/images/model2.jpg",
  "/images/model1.jpg",
  "/images/model3.jpg",
  "/images/model2.jpg",
];

const JunkshopGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "80px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Our Junkshop Gallery
      </h2>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`junkshop-${index}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JunkshopGallery;