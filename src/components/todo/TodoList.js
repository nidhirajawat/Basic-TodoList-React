// components/TodoList.js
import React, { useState } from "react";
import { PiCheck, PiPencil, PiX } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, markCompleted } from "../../features/todo/todoSlice";
import ConfirmationModal from "../../features/todo/ConfirmationModal";


export const TodoList = ({ onEdit }) => {
  const taskList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleTaskActions = (task, type = "mark-complete") => {
    if (type === "mark-complete") {
      dispatch(markCompleted(task));
    } else if (type === "edit") {
      onEdit && onEdit(task);
    } else if (type === "delete") {
      setTaskToDelete(task); // Set the task to delete
      setIsModalOpen(true);  // Open confirmation modal
    }
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      dispatch(removeTodo(taskToDelete)); // Dispatch delete action
      setTaskToDelete(null);
    }
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="todo-list">
      <ul>
        {taskList &&
          taskList.map((task, index) => (
            <li key={`list_item${index}`}>
              {task?.id} - {task?.title} - {task?.description}
              <span>{task?.status}</span>
              <div className="todo-actions">
                <button onClick={() => handleTaskActions(task)}>
                  <PiCheck />
                </button>
                <button onClick={() => handleTaskActions(task, "edit")}>
                  <PiPencil />
                </button>
                <button onClick={() => handleTaskActions(task, "delete")}>
                  <PiX />
                </button>
              </div>
            </li>
          ))}
      </ul>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete the task "${taskToDelete?.title}"?`}
      />
    </div>
  );
};
