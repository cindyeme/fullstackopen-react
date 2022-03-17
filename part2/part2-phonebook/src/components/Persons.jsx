import React from "react";

export default function Person({ name, number, onDelete }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>
          {name} {number}
        </p>
        <button onClick={onDelete} style={{ marginLeft: "6px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
