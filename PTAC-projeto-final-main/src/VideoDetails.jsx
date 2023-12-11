import { useParams } from "react-router-dom";
import { videos } from "../videos";
import { Aside } from "./Aside";

import "./VideoDetails.css";

export function VideoDetails() {
  const { id } = useParams();

  const videoWithSameId = videos.find(video => String(video.id) === id);

  return (
    <div className="container">
      <Aside />
      
      <div className="container-video">
        <div className="card">
          <h2>{videoWithSameId.title}</h2>

          <div className="details">
            <iframe src={videoWithSameId.url} width={500} height={300}></iframe>

            <span>{videoWithSameId.description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
