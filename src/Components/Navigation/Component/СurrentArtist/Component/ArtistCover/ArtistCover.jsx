import "./ArtistCover.scss";

import cover from "../../../../../../images/currentmusic.jpg";

function ArtistCover() {
  return (
    <div className="albums-cover">
      <img src={cover} alt="cover" />
    </div>
  );
}
export default ArtistCover;
