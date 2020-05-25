import React from "react";

function CommentsList(props) {
  if (props.commentsArray === undefined) {
    return <p>Loading...</p>;
  }
  const FormatDate = (timestamp) => {
    const dateObj = new Date(timestamp);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    console.log(day);

    return `${month}/${day}/${year}`;
  };
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
                  {FormatDate(comment.timestamp)}
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
