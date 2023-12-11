import { useParams } from "react-router-dom";
import { videos } from "../videos";
import { Aside } from "./Aside";

import "./VideoDetails.css";
export function VideoDetails() {

  const { id } = useParams();

  const videoWithSameId = videos.find(video => String(video.id) === id);

}