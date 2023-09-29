//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import { useState,useEffect } from 'react';
import Card from './components/Card/Card';
import { fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';
import Carousel from './components/Carousel/Carousel';


function App() {
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
  return (
    <div className='App' >
      <NavBar/>
      <Hero/>
      {topAlbumsData.map((item)=>{
        return(
          // eslint-disable-next-line no-undef
          <Card key={item.id} data={item} type="album"/>
        )

      })}
      <Section/>
      <Carousel/>

    </div>
  );
}

export default App;
