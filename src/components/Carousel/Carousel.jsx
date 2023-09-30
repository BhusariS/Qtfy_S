/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from "react";
import styles from "./Carousel.module.css";
import {Swiper, SwiperSlide, useSwiper } from "swiper/react";
//import {Swiper,  useSwiper } from "swiper/react";
 import CarouselLeftNavigation from "./CarouselLeftNavigation";
 import CarouselRightNavigation from "./CarouselRightNavigation";
import 'swiper/css';

const Carousel=({data,component})=>{
    const Controls=({data})=>{
        const swiper=  useSwiper();
        console.log(swiper);
        useEffect(()=>{
            swiper.slideTo(0,null);
        },[data]);
        return <></>;
    };
    return(
        <div className={styles.wrapper}>
            <Swiper style={{padding:"0px 20px"}} 
            initialSlide={0} 
            slidesPerView={"auto"} 
            spaceBetween={40} 
            allowTouchMove>
                <Controls data={data}/>
                <CarouselLeftNavigation/>
                <CarouselRightNavigation/>
               { data.map((item) => {
                        return(
                            <SwiperSlide>{component(item)}</SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
export default Carousel;