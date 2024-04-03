import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
  return (
    <div>
      <Comment name="jungho" comment="just do it" />
      <Comment name="React" comment="React is State and props" />
    </div>
  );
}
