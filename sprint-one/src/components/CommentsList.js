import React from "react";

function CommentsList(props) {
  console.log(props);
  return (
    <ul className="comments-section__comments-ul">
      {props.commentsArray &&
        props.commentsArray.map((comment) => (
          <li key={comment.id} className="comments-section__comment-li-wrapper">
            <div className="comments-section__comment-user-img" />
            <div className="comments-section__comment-info-wrapper">
              <div className="comments-section__comment-user-timestamp-wrapper">
                <span className="comments-section__comment-user">
                  {comment.name}
                </span>
                <span className="comments-section__comment-timestamp">
                  {comment.timestamp}
                </span>
              </div>
              <p className="comments-section__comment-content">
                {comment.comment}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default CommentsList;
