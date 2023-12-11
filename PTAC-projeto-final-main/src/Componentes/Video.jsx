import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Video.css";

const Video = ({ title, url, id }) => {
  const navigate = useNavigate();
  
  function handleNavigateDetails(id) {
    navigate(`/video/${id}`);
  }

  return (
    <div onClick={() => handleNavigateDetails(id)}>
      <h3>{title}</h3>
      <iframe width="560" height="315" src={url} frameborder="0" allowfullscreen className='iframe'></iframe>
    </div>
  );
}

export default Video;