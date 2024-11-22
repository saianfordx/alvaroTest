"use client";

import React from "react";
import { Todo } from "../interfaces/todo";
import { motion } from "framer-motion";

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  delay: number; // Added delay prop for animation
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete, delay }) => {
  return (
    <motion.div
      className={`relative rounded-lg p-4 shadow-md hover:shadow-lg transition ${todo.color}`}
      style={{ minHeight: "150px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }} // Smooth animation with delay
    >
      <h2 className="text-lg font-semibold text-black mb-2">{todo.title}</h2>
      <p className="text-sm text-black mb-6">{todo.description}</p>
      <div className="absolute bottom-2 right-2 flex gap-2">
        <button
          onClick={() => onEdit(todo.id)}
          className="text-sm text-blue-500 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-sm text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
