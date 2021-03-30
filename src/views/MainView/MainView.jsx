const MainView = ({ data }) => {
  const renderArtists = (artists) =>
    artists.map((artist) => <div>{artist.first_name}</div>);
  return (
    <div>
      <h1>FEATURED ARTISTS & STUDIOS</h1>
      <div className="window-container">{renderArtists(data)}</div>
    </div>
  );
};

export default MainView;
