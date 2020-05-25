import React from "react";
import { Link } from "react-router-dom";

function VideosList({ videosArray, mainVideoId }) {
  if (videosArray === undefined) {
    return <p>loading...</p>;
  }

  return (
    <div className="videos-list">
      <h5 className="videos-list__label">Next video</h5>
      <ul className="videos-list__ul">
        {videosArray
          .filter((sideVideo) => mainVideoId !== sideVideo.id)
          .map((sideVideo) => (
            <li key={sideVideo.id}>
              <Link
                to={`/videos/${sideVideo.id}`}
                className="videos-list__video-wrapper"
              >
                <div className="videos-list__video-thumbnail-container">
                  <img
                    className="videos-list__video-thumbnail"
                    src={sideVideo.image}
                    alt="next video thumbnail"
                  />
                </div>
                <div className="videos-list__video-details-wrapper">
                  <h4 className="videos-list__video-title">
                    {sideVideo.title}
                  </h4>
                  <h5 className="videos-list__video-author">
                    {sideVideo.channel}
                  </h5>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default VideosList;
