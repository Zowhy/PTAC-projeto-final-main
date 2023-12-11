import React from 'react';
import "./Home.css"
import { Aside } from './Aside';
import { useParams } from 'react-router-dom';

export function Detalhe ()  {
  const {id} = useParams ()

  const videoSaves = JSON.parse(localStorage.getItem("Lista")) || [];const filterVideos = videoSaves.find((object) => object.id == id) || null
  const filterVideos = videoSaves.find((object) => object.id == id) || null
  console.log (videoSaves)