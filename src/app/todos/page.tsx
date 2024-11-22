"use client";

import React, { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";
import CreateTodoModal from "../components/CreateTodoModal";
import EditTodoModal from "../components/EditTodoModal";
import { Todo } from "../interfaces/todo";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const colors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-red-100",
    "bg-purple-100",
    "bg-pink-100",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      color: getRandomColor(),
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: string, title: string, description: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Sticky Wall</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={(id) =>
              setEditingTodo(todos.find((todo) => todo.id === id) || null)
            }
            onDelete={deleteTodo}
            delay={index * 0.4} // Animation delay
          />
        ))}
        <div
          onClick={() => setShowCreateModal(true)}
          className="flex items-center justify-center bg-gray-200 text-gray-600 rounded-lg shadow-md cursor-pointer hover:bg-gray-300"
          style={{ minHeight: "150px" }}
        >
          <span className="text-4xl">+</span>
        </div>
      </div>

      {showCreateModal && (
        <CreateTodoModal
          onCreate={addTodo}
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {editingTodo && (
        <EditTodoModal
          todo={editingTodo}
          onSave={updateTodo}
          onClose={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
};

export default TodoPage;
