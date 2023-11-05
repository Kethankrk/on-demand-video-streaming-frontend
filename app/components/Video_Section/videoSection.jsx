import React from "react";
import VideoPlayer from "./videoPlayer";
import Description from "./description";

export default function VideoSection({ section, lecture }) {
  return (
    <div className="pt-14">
      <p className="text-white text-2xl font-semibold pb-5">
        Section: {section}, Lecture: {lecture}
      </p>
      <div className="">
        <VideoPlayer src="http://localhost:8080/get/640203de-493d-45c5-a693-a6a1fa2837ac/output.mpd"/>
      </div>
      <div className="pb-5">
        <p className="text-white text-xl pt-4">Introduction and Course Overview</p>
      </div>
      <Description />
    </div>
  );
}
