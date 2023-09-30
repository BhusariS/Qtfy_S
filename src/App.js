/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import { useState,useEffect } from 'react';
//import Card from './components/Card/Card';
import { fetchTopAlbums, fetchSongs } from './api/api';
import Section from './components/Section/Section';
//import Carousel from './components/Carousel/Carousel';
//import { all } from 'axios';
import React from 'react';
import styles from "./App.module.css"


function App() {
  const [data, setData]=useState([]);
  const[songsData,setSongsData]=useState([]);
  const [filteredDataValue, setFilteredDataValue]=useState([]);
  const[toggle, setToggle]=useState(false);
  const[value, setValue]= useState(0);

  const handleToggle=()=>{
    setToggle(!toggle);
  }
  const handleChange=(event, newValue)=>{
    setValue(newValue);
  }

  const generateSongsData=(value)=>{
    let key;
    if(value===0){
      setFilteredDataValue(value);
      return;
    }
    else if(value===1){
      key="rock";
    }
    else if(value===2){
      key="pop";
    }
    const res=songsData.filter(item => item.genre.key===key);
    filteredData(res);
  }

   useEffect(()=>{
      generateSongsData();
  },[value]);

    const generateData=async()=>{
        try{
            const data=await fetchTopAlbums();
            setData(data);
           // console.log(data);
        }catch(e){
            console.error(e);
        }
    }
    const generateAllSongsData=async()=>{
      try{
        const res= await fetchSongs();
        setSongsData(res);
        setFilteredDataValue(res);
      }catch(e){
        console.log(e);
      }
    };
    const filteredData=(val)=>{
      setFilteredDataValue(val);
    }

    useEffect(()=>{
      generateData();
        generateAllSongsData();
    },[]);

  return (
    <>
      <NavBar data={data}/>
      <Hero/>
      
      <div className={styles.sectionWrapper} >
      <Section data={data} title="Top Albums" type="album" filteredDataValue={data}/>   
      <Section data={data} title="New Albums" type="album" filteredDataValue={data}/>
      <Section data={songsData} title="song" type="song" filteredDataValue={filteredDataValue}
      filteredData={filteredData} value={value} handleChange={handleChange} handleToggle={handleToggle}/>
      </div>

    </>
  );
    }
export default App;
