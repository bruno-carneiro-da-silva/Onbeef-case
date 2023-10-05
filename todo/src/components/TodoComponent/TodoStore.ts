import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TodoStore {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  todoText: string;
  setTodoText: (newText: string) => void;
  createTodo: (todoText: string) => void;
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
  showCompleted: boolean;
  toggleShowCompleted: () => void;
}

const useTodoStore = create<TodoStore>((set) => {
  // Recupere os dados do localStorage, se disponíveis
  const savedTodos = localStorage.getItem('todos');
  const initialTodos: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];

  return {
    todos: initialTodos,
    todoText: '',
    setTodoText: (newText) => set({ todoText: newText }),
    setTodos: (todos) => {
      set({ todos });
      // Salve os dados no localStorage sempre que o estado for atualizado
      try {
        localStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
      }
    },
    createTodo: (todoText) =>
      set((state) => {
        const newTodo = {
          id: Math.floor(Math.random() * 10000000),
          text: todoText,
          isCompleted: false,
        };
        const updatedTodos = [...state.todos, newTodo];
        // Salve os dados no localStorage após adicionar uma nova tarefa
        try {
          localStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
          console.error('Erro ao salvar no localStorage:', error);
        }
        return { todos: updatedTodos };
      }),
    deleteTodo: (todoId) =>
      set((state) => {
        const updatedTodos = state.todos.filter((todo) => todo.id !== todoId);
        // Remova os dados do localStorage após excluir uma tarefa
        try {
          localStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
          console.error('Erro ao salvar no localStorage:', error);
        }
        return { todos: updatedTodos };
      }),
    completeTodo: (todoId) =>
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        // Atualize os dados no localStorage após concluir uma tarefa
        try {
          localStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
          console.error('Erro ao salvar no localStorage:', error);
        }
        return { todos: updatedTodos };
      }),
    showCompleted: false, // Inicialize como falso
    toggleShowCompleted: () => {
      set((state) => ({ showCompleted: !state.showCompleted }));
    },
  };
});

export default useTodoStore;
