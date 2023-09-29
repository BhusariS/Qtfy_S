import React, { useEffect, useState } from "react";
import {useSwiper} from "swiper/react";
import 'swiper/css';
import  {ReactComponent as RightArrow} from "../../assets/navRight1.svg";
import styles from "./Carousel.module.css";

//const swiper=new useSwiper();
const CarouselRightNavigation=()=>{
    const swiper=  useSwiper();
    const [isend, setIsEnd]=useState(swiper.isend);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isend);

})},[]);

    return(
        <div className={styles.rightNavigation}>
        {!isend && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}
export default CarouselRightNavigation;