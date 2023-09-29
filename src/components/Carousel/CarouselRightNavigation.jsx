import React, { useEffect, useState } from "react";
import {useSwiper} from "swiper/react";
import 'swiper/css';
import  RightArrow from "../../assets/navRight.png"

//const swiper=new useSwiper();
const CarouselRightNavigation=()=>{
    const swiper=  useSwiper();
    const [isend, setIsEnd]=useState(swiper.isend);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isend);

})},[]);

    return(
        <div>
        {!isend && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}
export default CarouselRightNavigation;