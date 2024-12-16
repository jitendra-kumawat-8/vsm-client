"use client";

const VideoResourceDetailPage = () => {
  return (
    <div className="h-full  px-24 py-20 border-b-8 border-secondaryLight">
      <video controls className="w-screen ">
        <source src="/wedding.mp4" type="video/mp4" />
        Your br /owser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoResourceDetailPage;
