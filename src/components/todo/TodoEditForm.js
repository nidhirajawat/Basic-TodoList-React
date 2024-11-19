import React, { useState } from 'react';
import './Todo.css';
import Button from '../Button';
import { updateTodoAPI } from '../../services/todoApis';

export const TodoEditForm = ({ closeModal, setTodo, taskData }) => {

  const [formData, setFormData] = useState(taskData)

  const handleOnInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const resetForm = (e) => {
    e.preventDefault();
    setFormData(taskData)
  }

  const getFieldValue = (name) => {
    return formData ? formData[name] : ""
  }

  const handleOnFormSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      todo: formData?.title,
      completed: false,
      userId: 1,
    }

    updateTodoAPI(taskData.id, requestData, setTodo)

    // setFormData(taskData)
    closeModal && closeModal();
  }

  return (
    <>
      <form onSubmit={(e) => handleOnFormSubmit(e)} className='todo-form' autoComplete='off'>
        <div className='field-group'>
          <label>
            Task
          </label>
          <input
            type='text'
            maxLength={70}
            // value={formData ? formData?.title : ""}
            value={getFieldValue('title')}
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
            value={formData ? formData?.description : ""}
            placeholder='Enter your task details.'>
            {formData?.description}
          </textarea>
        </div>

        <div className='todo-form-actions'>
          <Button onClick={resetForm}>Reset</Button>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  )
}
