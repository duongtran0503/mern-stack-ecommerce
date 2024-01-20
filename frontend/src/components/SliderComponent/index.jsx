import React from 'react';
import { Image } from 'antd';
import Slider from 'react-slick';
import { nanoid } from 'nanoid';
const index = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <Slider {...settings}>
            {images.map((image) => {
                return (
                    <div key={nanoid()}>
                        <Image
                            src={image}
                            width={'100%'}
                            preview={false}
                            height={'300px'}
                        />
                    </div>
                );
            })}
        </Slider>
    );
};

export default index;
