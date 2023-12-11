import React from 'react';
import "./Home.css"
import { Aside } from './Aside';
import { useParams } from 'react-router-dom';

export function Detalhe ()  {
  const {id} = useParams ()

  const videoSaves = JSON.parse(localStorage.getItem("Lista")) || [];const filterVideos = videoSaves.find((object) => object.id == id) || null
  const filterVideos = videoSaves.find((object) => object.id == id) || null
  console.log (videoSaves)

  return (
    <div className="container">
      <Aside />

      <div className='home'>
        <h2>Detalhe</h2>
        <div className='videos'>
        {filterVideos.name }  {filterVideos.canal } {filterVideos.data }  {filterVideos.local }  {filterVideos.letra }  
          
        </div>
      </div>
    </div>
  );
}