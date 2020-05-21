import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const VideoUpload = () => {
  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="video-upload__thumbnail-form-wrapper">
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
        <form className="video-upload__form">
          <label className="video-upload__form-label" htmlFor="titleInput">
            Title your video
          </label>
          <input
            className="video-upload__form-title-input"
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
            type="text"
            name="descriptionInput"
            placeholder="Add a description of your video"
          />
        </form>
      </div>
      <div className="video-upload__buttons-wrapper">
        <a className="video-upload__button-publish">Publish</a>
        <Link to="/" className="video-upload__button-cancel">
          Cancel
        </Link>
      </div>
    </section>
  );
};

export default VideoUpload;
