import { videos } from "../videos";
import Video from "./Video";
import "./Destaque.css";
import { Aside } from "./Aside";

export function Destaque() {

  const filteredVideosArray = videos.filter(video => video.id <= 4);

  return (
    <div className="container">
      <Aside />

      <div className="destaque">
        <h2>Destaque</h2>
        <div className="videos">
          {filteredVideosArray.map(video => (
            <Video key={video.id} title={video.title} url={video.url} id={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
