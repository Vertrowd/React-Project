import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [currentPost, setCurrentPost] = useState(1);

  const {
    data,
    loading,
    error
  } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${currentPost}`
  );

  return (
    <div style={{ padding: "1rem", fontFamily: "system-ui" }}>
      <h2>Posts</h2>

      
      <div style={{ marginBottom: "1rem" }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setCurrentPost(id)}
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              background: currentPost === id ? "#0ea5e9" : "#e5e7eb",
              color: currentPost === id ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px"
            }}
          >
            {id}
          </button>
        ))}
      </div>

      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Something went wrong</p>}

      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
