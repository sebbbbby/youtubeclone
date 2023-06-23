import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments({ video }) {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/videos/comments/${video.video_id}`);
        if (res.data.length > 0) {
          setComments(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, []);
  // console.log(comments);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputComment) return;
    // console.log("hello");
    const comment = inputComment;
    const response = await axios.post(
      `/api/videos/comments/${video.video_id}`,
      {
        comment,
      }
    );
    const allComments = response.data;
    // console.log(allComments);
    setComments(allComments);
    setInputComment("");
  };

  return (
    <div className="flex flex-col text-white">
      {" "}
      Comments
      <form onSubmit={handleSubmit}>
        <input
          className="text-white"
          type="text"
          placeHolder="add comment"
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {comments &&
        comments.map((comment) => (
          <div className="flex flex-row items-start">
            <div className="flex flex-col">{comment.comment}</div>
          </div>
        ))}
    </div>
  );
}

export default Comments;
