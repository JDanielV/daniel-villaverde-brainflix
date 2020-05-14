import React from "react";
import Comment from "./Comment";

function CommentsList() {
  return (
    <ul className="comments-section__comments-ul">
      <Comment />
    </ul>
  );
}

export default CommentsList;
