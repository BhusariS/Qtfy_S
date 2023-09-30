import { PropTypes } from "prop-types";
import React from "react";                                                                   
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
//import { Box } from "@mui/material/Box";



const TabPanel=({props})=>{
    const {children, value,index,...other}=props;
    return (
        <div
        role="tabpanel"
        hidden={value =!index}
        id={`simple-tabpanel-${index}`}
        area-aria-labelledby={`simple-tab-${index}`}
        {...other}>
            {value===index &&(
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )

            }

        </div>
    );
}

TabPanel.propTypes={
    children:PropTypes.node,
    index:PropTypes.number.isRequired,
    value:PropTypes.number.isRequired

};

function allProps(index){


    return{
        // <div 
        id:`simple-tab-${index}`,
        'area-control':`simple-tabpanel-${index}`
        // >
        // </div>
    };

}

export default function BasicTabs(){
    const[value,setValue]=React.useState(0);
    const handleChange=(event, newValue)=>{
        setValue(newValue);
    };

    return(
        <Box sx={{width:'100%'}}>
            <Box sx={{borderBottom:1, borderColor:"divider"}}>
                <Tabs value={value} onChange={handleChange} area-label="basic tabs example"
                textColor="" indicatorColor="secondary">
                    <Tab label="All"{...allProps(0)}></Tab>
                    <Tab label="Rock" {...allProps(1)}></Tab>
                    <Tab label="Pop" {...allProps(2)}></Tab>

                </Tabs>
            </Box>

            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}>Rock</TabPanel>
            <TabPanel value={value} index={2}>Pop</TabPanel>
        </Box>
    );
    
}