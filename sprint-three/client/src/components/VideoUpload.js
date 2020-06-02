import React from "react";
import { Link } from "react-router-dom";

const VideoUpload = (props) => {
  const onClick = (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title-input");

    const descrInput = document.getElementById("descr-input");

    const titleValue = titleInput.value;
    const descrValue = descrInput.value;
    props.uploadVideo(event, titleValue, descrValue);
  };

  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="video-upload__thumbnail-form-wrapper">
        <div className="video-upload__label-thumbnail-wrapper">
          <label className="video-upload__form-label" htmlFor="videoThumbnail">
            Video thumbnail
          </label>
          <div
            className="video-upload__thumbnail-container"
            name="videoThumbnail"
          >
            <img
              className="video-upload__thumbnail"
              src="/assets/Images/Upload-video-preview.jpg"
              alt="video thumbnail"
            />
          </div>
        </div>
        <form className="video-upload__form">
          <label className="video-upload__form-label" htmlFor="titleInput">
            Title your video
          </label>
          <input
            className="video-upload__form-title-input"
            id="title-input"
            type="text"
            name="titleInput"
            placeholder="Add a title to your video"
          />
          <label
            className="video-upload__form-label"
            htmlFor="descriptionInput"
          >
            Add a video description
          </label>
          <textarea
            className="video-upload__form-description-input"
            id="descr-input"
            type="text"
            name="descriptionInput"
            placeholder="Add a description of your video"
          />
        </form>
      </div>
      <div className="video-upload__buttons-wrapper">
        <a className="video-upload__button-publish" onClick={onClick}>
          Publish
        </a>
        <Link to="/videos" className="video-upload__button-cancel">
          Cancel
        </Link>
      </div>
    </section>
  );
};

export default VideoUpload;
