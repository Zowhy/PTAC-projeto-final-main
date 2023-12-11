import { Link } from "react-router-dom";
import "./Card.css";

export function Card({video}) {

const videoPegado = video.url.slice(17)

  return (
<Link to={`/detalhe/${video.id}`} >
  <h1> {video.name} </h1>
    <iframe 
    width="300" 
    height="200"
    src={`https://www.youtube.com/embed/${videoPegado}`} 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe> 
    
    </Link>
  )
 };