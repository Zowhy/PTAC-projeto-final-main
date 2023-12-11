import React from 'react';
import "./Home.css"
import { Aside } from './Aside';
import { useParams } from 'react-router-dom';

export function Detalhe ()  {
  const {id} = useParams ()

  const videoSaves = JSON.parse(localStorage.getItem("Lista")) || [];