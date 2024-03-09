import React from "react";
import Feed from "./Feed"
import Post from "./Post"
export default function Container(props) {
  if (props.flag === 1) return <Feed />;
  else if (props.flag === 2) return <Post />;
}