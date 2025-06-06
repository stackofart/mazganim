
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AutoCarousel.css'; // стиль для анимации/размещения


import img1 from "../assets/filters.png";
import img2 from "../assets/worker.png";
import img3 from "../assets/cleaning.png";

const images = [
    img1,
    img2,
    img3
];



export default function AutoCarousel() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,


        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 900, settings: { slidesToShow: 1 } },
        ],
    };

    return (

        <Slider {...settings}>
            {images.map((src, i) => (
                <div key={i} className="carousel-slide">
                    <img src={src} alt="" className="carousel-image" />
                </div>
            ))}
        </Slider>

    );
}