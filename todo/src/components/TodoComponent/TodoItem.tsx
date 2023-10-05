import React from "react";
import { Delete } from "../../icons/Delete";
import { Todo } from "./types";
import useTodoStore from "./TodoStore"; // Importe o store

interface TodoItemProps {
  item: Todo;
  deleteTodo: (todoId: number) => void;
  complete: (todoId: number) => void;
}

export function TodoItem({ item }: TodoItemProps) {
  const toggleComplete = useTodoStore((state) => state.completeTodo);
  const handleDelete = useTodoStore((state) => state.deleteTodo);

  const handleToggleComplete = () => {
    toggleComplete(item.id);
  };

  return (
    <div className="bg-blue-50 px-4 py-2 rounded-full shadow mb-4 relative focus:outline-none">
      <button
        type="button"
        onClick={() => handleDelete(item.id)}
        className="absolute top-3 right-3"
      >
        <Delete />
      </button>

      <input
        type="checkbox"
        className="h-4 w-4 mr-2 text-gray-500"
        checked={item.isCompleted}
        onChange={handleToggleComplete}
      />
      <span className={item.isCompleted ? "line-through" : ""}>
        {item.text}
      </span>
    </div>
  );
}
