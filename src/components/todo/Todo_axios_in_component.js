
import React, { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './Todo.css';
import Button from '../Button';
import Modal from '../Modal';
import { ConfirmationModal } from '../ConfirmationModal';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


// List Task (Add / Remove)
// Modal Close / Open / Toggle
// Form Data Manage

export const Todo = () => {

  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const [todo, setTodo] = useState(null)

  const baseURL = "https://dummyjson.com"

  const fetchTodoAPI = async () => {
    const res = await axios.get(baseURL + "/todos");

    if (res.status == 200) {
      console.log('res', res)
      setTodo(res.data)
    } else {
      toast.error('Unable to load todos')
    }
  }

  useEffect(() => {
    fetchTodoAPI()
  }, [])

  const todoList = todo ? todo.todos : [];

  const handleOnCompleteTask = (data) => {
    toast('Marked as completed')
  }

  const handleOnEditTask = (data) => {
    toast('Editing task')
  }

  const handleOnDeleteTask = (data) => {
    toast('Asked for deletion')
    console.log('on delete', data)
  }

  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
        </div>
        <TodoList
          data={todoList}
          onDelete={handleOnDeleteTask}
          onEdit={handleOnEditTask}
          onComplete={handleOnCompleteTask}
        />
      </div>

      {/* Add Task Modal */}

      {showAddTaskModal &&
        <Modal
          onClose={() => setShowAddTaskModal(false)}
          open={showAddTaskModal}
          heading={"Add Task Form"}
        >
          <TodoForm closeModal={() => setShowAddTaskModal(false)} />
        </Modal>
      }

      {/* Confimation Modal */}
      {/* <ConfirmationModal title={"the account"} /> */}

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}