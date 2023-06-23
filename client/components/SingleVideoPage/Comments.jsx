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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    const comment = inputComment;
    axios.post(`/api/videos/comments/${video.video_id}`, { comment });
  };

  return (
    <div className="flex flex-col text-white">
      {" "}
      Comments
      {comments.map((comment) => (
        <div className="flex flex-row items-start">
          <div className="flex flex-col">
            <div className="flex flex-row text-white"></div>
          </div>
        </div>
      ))}
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
    </div>
  );
}

export default Comments;
