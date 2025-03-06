import React from "react";
import {gallery} from "../../content/gallery";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

const galleryContainer: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '10px',
    padding: '10px'
};

const imageItem: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
};
const imageName: React.CSSProperties = {
    color: 'white',
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '18px'
};

export const Gallery = () => {
    return (
        <Swiper spaceBetween={10} slidesPerView={3} loop={true}>
            <div id="gallery-container">
                {gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.src} alt={image.alt} className="image-item"/>
                        <div className="image-name">{image.name}</div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    )
}