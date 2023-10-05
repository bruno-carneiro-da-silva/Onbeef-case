import React, { FormEvent, ChangeEvent } from "react";
import useTodoStore from "./TodoStore"; // Importe o store

interface TodoNewProps {
  createTodo: (todoText: string) => void;
}

export function TodoNew({ createTodo }: TodoNewProps) {
  const todoText = useTodoStore((state) => state.todoText);
  const setTodoText = useTodoStore((state) => state.setTodoText);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todoText);
    setTodoText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="relative flex justify-between">
      <input
        type="text"
        placeholder="Tarefa"
        value={todoText}
        className="bg-blue-50 w-2/4 sm:w-10/12 p-3 rounded-full mt-2"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="rounded-full mt-2 w-2/5 ml-2 bg-purple-500 text-white"
      >
        Criar
      </button>
    </form>
  );
}
