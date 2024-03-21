const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-12 absolute bg-gradient-to-r from-black w-full aspect-video text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-xl w-4/12">{overview}</p>
      <div>
        <button className="bg-white p-3 px-9 text-xl font-bold rounded-lg text-black hover:bg-opacity-80">
          <ion-icon name="caret-forward-circle-outline"></ion-icon>Play
        </button>
        <button className="bg-gray-500 p-3 px-9 text-lg mx-2 bg-opacity-50 rounded-lg text-white">
          <ion-icon name="information-circle-outline"></ion-icon>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
