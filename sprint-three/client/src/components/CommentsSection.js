import React from "react";
import CommentsList from "./CommentsList";

// Contains the comments form and comments <ul>
function CommentsSection(props) {
  return (
    <div className="comments-section">
      <span className="comments-section__comments-count">3 Comments</span>
      <div className="comments-section__form-wrapper">
        <div className="comments-section__form-user-img" />
        <form className="comments-section__form">
          <div className="comments-section__form-input-wrapper">
            <label
              className="comments-section__form-label"
              htmlFor="commentField"
            >
              Join the conversation
            </label>
            <textarea
              type="text"
              className="comments-section__form-input"
              name="commentField"
              placeholder="Add a comment"
            />
          </div>
          <button type="submit" className="comments-section__form-button">
            Comment
          </button>
        </form>
      </div>
      <CommentsList commentsArray={props.commentsArray} />
    </div>
  );
}
export default CommentsSection;
