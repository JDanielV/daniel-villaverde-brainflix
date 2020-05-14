import React from "react";
import CommentsList from "./CommentsList";

// Contains the comments form and comments <ul>

function CommentsSection() {
  return (
    <div className="comments-section__wrapper">
      <span className="comments-section__comments-count">3 Comments</span>
      <div className="comments-section__form-wrapper">
        <div className="comments-section__form-user-img" />
        <form class="comments-section__form">
          <label className="comments-section__form-label" for="comment-field">
            Join the conversation
          </label>
          <input
            type="text"
            className="comments-section__form-input"
            name="comment-field"
          />
          <button type="submit" className="comments-section__form-button">
            Comment
          </button>
        </form>
      </div>
      <CommentsList />
    </div>
  );
}
export default CommentsSection;
