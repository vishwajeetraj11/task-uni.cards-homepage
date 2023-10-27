const BackgroundVideo = () => {
  return (
    <video
      muted
      loop
      autoPlay
      playsInline
      className="w-[100vw] h-[100vh] object-cover absolute top-0 left-0 right-0 bottom-0 z-[0]"
    >
      <source src="/nxt_wave_bg.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
