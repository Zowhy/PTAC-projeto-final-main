import React from 'react';
import Video from './Video';

import { videos } from "../videos";

import "./Home.css"
import { Aside } from './Aside';

const Home = () => {

  return (
    <div className="container">
      <Aside />

      <div className='home'>
        <h2>Meus Vídeos Favoritos</h2>
        <div className='videos'>
          {videos.map(video => (
            <Video key={video.id} title={video.title} url={video.url} id={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
