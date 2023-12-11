import "./Destaque.css";
import { Card } from "./componentes/Card";
import { Aside } from "./Aside";

export function Destaque() {

  const videoSaves  = JSON.parse(localStorage.getItem("Lista")) || [];
console.log (videoSaves)

  return (
    <div className="container">
      <Aside />

      <div className="destaque">
        <h2>Destaque</h2>
        <div className="videos">
        {videoSaves.slice(-4).map((videoweb,index) => (
          <Card key = {index} video = {videoweb} />
          ))} 
        </div>
      </div>
    </div>
  );
}
