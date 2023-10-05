import React from "react";
import { TodoNew } from "./TodoNew";
import { TodoItem } from "./TodoItem";
import useTodoStore from "./TodoStore";

function TodoList() {
  const showCompleted = useTodoStore((state) => state.showCompleted);
  const toggleShowCompleted = useTodoStore((state) => state.toggleShowCompleted);
  const todos = useTodoStore((state) => state.todos);
  const createTodo = useTodoStore((state) => state.createTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const completeTodo = useTodoStore((state) => state.completeTodo);

  // Filtrar tarefas pendentes apenas quando showCompleted for falso
  const filteredPendingTodos = showCompleted
    ? []
    : todos.filter((todo) => !todo.isCompleted);

  // Filtrar tarefas completadas quando showCompleted for verdadeiro
  const filteredCompletedTodos = showCompleted
    ? todos.filter((todo) => todo.isCompleted)
    : [];

  // Contagem de tarefas pendentes e completadas
  const pendingCount = filteredPendingTodos.length;
  const completedCount = filteredCompletedTodos.length;

  const pendingText =
    pendingCount === 1
      ? "Você tem 1 tarefa pendente"
      : `Você tem ${pendingCount} tarefas pendentes`;

  const completedText =
    completedCount === 1
      ? "Você tem 1 tarefa completada"
      : `Você tem ${completedCount} tarefas completadas`;

  return (
    <div className="bg-white shadow-md grid gap-2 md:w-4/5 sm:w-2/4 lg:w-2/5 p-8 rounded-xl">
      <h1 className="text-2xl font-bold">Lista de tarefas</h1>
      <hr className="mt-2" />
      <TodoNew createTodo={createTodo} />
      <button
        onClick={toggleShowCompleted}
        className="text-blue-500 mt-4 cursor-pointer"
      >
        {showCompleted ? "Mostrar Pendentes" : "Mostrar Completadas"}
      </button>
      <div className="mt-4">
        {showCompleted ? completedText : pendingText}
      </div>
      <div className="mt-4">
        {showCompleted
          ? filteredCompletedTodos.map((it) => (
              <TodoItem
                key={it.id}
                item={it}
                deleteTodo={deleteTodo}
                complete={completeTodo}
              />
            ))
          : filteredPendingTodos.map((it) => (
              <TodoItem
                key={it.id}
                item={it}
                deleteTodo={deleteTodo}
                complete={completeTodo}
              />
            ))}
      </div>
    </div>
  );
}

export default TodoList;
