import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal"
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-danger mx-1">
        <i class="bi bi-trash"></i>
      </button>

      <button type="button" class="btn btn-outline-success mx-1">
        <i class="bi bi-exclamation-triangle"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
