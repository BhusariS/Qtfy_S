import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/iconS.png";


//import Button from "../Button/Button";
const  Search=()=>{
    return(
        <div >
            <form className={styles.wrapper}>
            <input className={styles.search}/>
                <div>
                    <button className={styles.searchButton} type="submit" >
                    <img src={searchIcon} alt="search" />

                        </button>
                </div>
            </form>
        </div>
    )

}
// eslint-disable-next-line react/jsx-no-undef

export default Search;