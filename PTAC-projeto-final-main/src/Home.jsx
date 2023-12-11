import React from 'react';
import "./Home.css"
import { Card } from './componentes/Card';
import { Aside } from './Aside';

export function Home ()  {

const videoSaves  = JSON.parse(localStorage.getItem("Lista")) || [];
console.log (videoSaves)

  return (
    <div className="container">
      <Aside />

      <div className='home'>
        <h2>Performances PlayboiCarti</h2>
        <div className='videos'>
          {videoSaves.map((videoweb,index) => (
          <Card key = {index} video = {videoweb} />
          ))} 
          
        </div>
      </div>
    </div>
  );
}

export default Home;
