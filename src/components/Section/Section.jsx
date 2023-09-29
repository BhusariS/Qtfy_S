import { useState } from "react";
import styles from "./Section.module.css";
import {  CircularProgress } from "@mui/material";
import Card from "../Card/Card"; 
import Carousel from "../Carousel/Carousel";
 
 const Section=({title, data})=>{
    const [carouselToggle, setCarouselToggle]=useState(true);
    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }

    return(
        <div>
            <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle?"Show All":"Collapse All"}
            </h4>
            </div>
            
               (
                <CircularProgress/>
               ):(<div className={styles.cardWrapper}>
               {!carouselToggle?
               <div className={styles.wrapper}>
                {data.map((item)=><Card key={item.id} data={item} type="album"/>)} 
               </div>:(<Carousel data={data} componentRender={(data)=><Card data={data} type="album"/>}/>
               )}</div>)
                
        </div>
    )

 }

 export default Section;