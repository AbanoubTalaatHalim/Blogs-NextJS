import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h5 className="card-title">{post.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text"> {post.body}</p>
      </div>
      <div className="card-footer text-muted">.</div>
    </div>
  );
};

export default Post;
