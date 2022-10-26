import AlbumName from "./Component/AlbumName/AlbumName";
import ArtistCover from "./Component/ArtistCover/ArtistCover";
import StatePlay from "./Component/StateofMusic/StateofMusic";
import "./CurrentArtist.scss";
function CurrentArtist() {
  return (
    <div className="artist-play">
      <ArtistCover />
      <div className="state-of-music">
        <StatePlay />
      </div>
      <div className="Album-name">
        <AlbumName />
      </div>
    </div>
  );
}
export default CurrentArtist;
