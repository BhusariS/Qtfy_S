import React, { useEffect , useState} from "react";

import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Serach";
import { fetchTopAlbums } from "../../api/api";

const NavBar=()=>{

    const [topAlbumsData, setTopAlbumsData]=useState([]);

    const generateData=async()=>{
        try{
            const data=await fetchTopAlbums();
            setTopAlbumsData(data);
           // console.log(data);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        generateData();
    },[])
    return(
        
        <nav className={styles.navbar}>

            <Logo/>
            <Search/>
            <Button children="Give Feedback"/>
            

        </nav>
    )

}

export default NavBar;