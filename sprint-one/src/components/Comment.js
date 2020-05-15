import React from "react";
// COMPONENT LEFT UNUSED FOR NOW - DELETE FILE AT THE END IF NOT NEEDED
// COMPONENT LEFT UNUSED FOR NOW - DELETE FILE AT THE END IF NOT NEEDED
// COMPONENT LEFT UNUSED FOR NOW - DELETE FILE AT THE END IF NOT NEEDED
function Comment(props) {
  return (
    <li className="comments-section__comment-li-wrapper">
      <div className="comments-section__comment-user-img" />
      <div className="comments-section__comment-info-wrapper">
        <div className="comments-section__comment-user-timestamp-wrapper">
          <span className="comments-section__comment-user">Micheal Lyons</span>
          <span className="comments-section__comment-timestamp">
            12/18/2018
          </span>
        </div>
        <p className="comments-section__comment-content">
          They BLEW the ROOF off at their last show, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of a concert I have EVER witnessed.
        </p>
      </div>
    </li>
  );
}

export default Comment;
