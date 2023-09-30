import { useState } from "react";
import styles from "./Section.module.css";
import {  Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card"; 
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";
 
 const Section=({title, data, type, filteredData=null, filteredDataValue=[], toggle=false, handleToggle=null, value=0, handleChange=null})=>{
    const [carouselToggle, setCarouselToggle]=useState(true);
    // const handleToggle=()=>{
    //     setCarouselToggle(!carouselToggle);
    

    return(
        <div>
            <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle?"Show All":"Collapse All"}
            </h4>
            </div>
            {type==="songs"? <BasicTabs value={value} handleChange={handleChange}/>:null}
               { data.length ===0?
               ( <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <CircularProgress/>
                </Box>
               ):(<div className={styles.cardWrapper}>
               {/* {!carouselToggle?  */}

              {toggle? <div className={styles.wrapper}>
                {filteredDataValue.map((item)=>{
                // <Card key={item.id} data={item} type="album"/>)} 
                return(
                 <Card  data={item} type={type}/>)
                })
                }</div>
                :(<Carousel data={filteredDataValue} component={(data)=><Card data={data} type={type}/>}/>
                )} 
               </div>)
                }
        </div>
    )

 }

 export default Section;