import React, { useState } from 'react';
import './Todo.css';
import Button from '../Button';
import { addTodoAPI } from '../../services/todoApis';

export const TodoForm = ({ closeModal, setTodo }) => {
  const [formData, setFormData] = useState({});

  const handleOnInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setFormData({});
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();

    if (!formData?.title) {
      alert("Please enter a task title!");
      return;
    }

    const requestData = {
      todo: formData.title,
      description: formData.description || "",
      completed: false,
      userId: 1,
    };

    addTodoAPI(requestData, setTodo);

    setFormData({});
    closeModal && closeModal();
  };

  return (
    <form onSubmit={handleOnFormSubmit} className='todo-form' autoComplete='off'>
      <div className='field-group'>
        <label>Task</label>
        <input
          type='text'
          maxLength={70}
          value={formData.title || ""}
          name="title"
          placeholder='Enter your task title'
          onChange={handleOnInputChange}
        />
      </div>
      <div className='field-group'>
        <label>Description</label>
        <textarea
          name="description"
          maxLength={2000}
          onChange={handleOnInputChange}
          value={formData.description || ""}
          placeholder='Enter your task details.'
        ></textarea>
      </div>

      <div className='todo-form-actions'>
        <Button onClick={resetForm}>Reset</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
