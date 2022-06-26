import React from "react";
import ReactPlayer from "react-player"
import mg from "./videos/1mg.mp4"
const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>

      <div>
        <div className="project">
          <ReactPlayer
           url={mg}
           loop={true}
           playing={true}
           muted={true}
           playbackRate={0.5}
          />
        </div>

      </div>
    </div>
  );
};

export default Projects;
