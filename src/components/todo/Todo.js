import React, { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';
import Modal from '../Modal';
import { Toaster } from 'react-hot-toast';
import { deleteTodoAPI, fetchTodoAPI, updateTodoAPI } from '../../services/todoApis';
import { TodoEditForm } from './TodoEditForm';

export const Todo = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [todo, setTodo] = useState(null);
  const [editTaskData, setEditTaskData] = useState(null);

  useEffect(() => {
    fetchTodoAPI(setTodo);
  }, []);

  const todoList = todo?.todos || [];

  const handleOnCompleteTask = (data) => {
    updateTodoAPI(data.id, { completed: true }, setTodo);
  };

  const handleOnEditTask = (data) => {
    setEditTaskData(data);
    setShowEditTaskModal(true);
  };

  const handleOnDeleteTask = (data) => {
    deleteTodoAPI(data.id, setTodo);
  };

  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
        </div>
        <TodoList
          todoList={todoList}
          onEdit={handleOnEditTask}
          onDelete={handleOnDeleteTask}
          onComplete={handleOnCompleteTask}
        />
      </div>

      {showAddTaskModal &&
        <Modal
          onClose={() => setShowAddTaskModal(false)}
          open={showAddTaskModal}
          heading={"Add Task Form"}
        >
          <TodoForm
            closeModal={() => setShowAddTaskModal(false)}
            setTodo={setTodo}
          />
        </Modal>
      }

      {showEditTaskModal &&
        <Modal
          onClose={() => setShowEditTaskModal(false)}
          open={showEditTaskModal}
          heading={"Edit Task Form"}
        >
          <TodoEditForm
            closeModal={() => setShowEditTaskModal(false)}
            setTodo={setTodo}
            taskData={editTaskData}
          />
        </Modal>
      }

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
};
