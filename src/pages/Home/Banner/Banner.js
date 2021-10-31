import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>

                    <img
                        className="d-block w-100 w-80"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>  TOURBHAI </h3>
                        <p> We let you see the world differently  </p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </>
    );
};

export default Banner;