import "./MainView.css";

const MainView = ({ data }) => {
  const renderArtists = (artists) =>
    artists.map((artist) => (
      <a href="#">
        {artist.first_name} {artist.last_name}
      </a>
    ));

  return (
    <div>
      <h1>FEATURED ARTISTS & STUDIOS</h1>
      <div className="window-container">{renderArtists(data)}</div>
    </div>
  );
};

export default MainView;
