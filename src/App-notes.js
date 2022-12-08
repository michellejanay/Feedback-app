import React from "react";

const App = () => {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "comment" },
    { id: 2, text: "comment" },
    { id: 3, text: "comment" },
  ];

  const loading = false;
  const showComments = true;
  const commentDiv = (<div>
    <h3>Comments: {comments.length}</h3>
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  </div>)

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      {showComments && commentDiv}
      
    </div>
  );
};

export default App;
