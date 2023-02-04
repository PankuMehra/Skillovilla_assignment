import React, { useState } from "react";

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div>
      <h3>Comment Widget</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input style={{padding:"8px 10px",  }}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Join the discussion"
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comment;
