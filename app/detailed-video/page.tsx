"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Video1 from "./video-1";

const VideoContent = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams?.get("videoId");

  return <Video1 videoId={videoId} />;
};

const VideoPage = () => {
  return (
    <Suspense fallback={<div>Loading video...</div>}>
      <VideoContent />
    </Suspense>
  );
};

export default VideoPage;
