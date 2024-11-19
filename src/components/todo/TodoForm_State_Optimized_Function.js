import React, { useState } from 'react';
import './Todo.css';
import Button from '../Button';

export const TodoForm = () => {

  const [formData, setFormData] = useState(null)

  const handleFormActions = (type = "change", name = null, event = null) => {
    if (type === 'change') {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value })
      return
    }

    if (type === 'reset') {
      event.preventDefault();
      setFormData(null)
      return
    }
    return formData ? formData[name] : ""
  }

  return (
    <>
      <form onSubmit={() => console.log('Form submitted')} className='todo-form'>
        <div className='field-group'>
          <label>
            Task
          </label>
          <input
            type='text'
            value={handleFormActions('title')}
            name="title"
            placeholder='Enter your task title'
            onChange={(e) => handleFormActions("change", null, e)}
          />
        </div>
        <div className='field-group'>
          <label>
            Category
          </label>
          <input
            type='text'
            value={formData ? formData?.category : ""}
            name="category"
            placeholder='Enter your task category'
            onChange={(e) => handleFormActions("change", null, e)}
          />
        </div>
        <div className='field-group'>
          <label>Description</label>
          <textarea
            name="description"
            onChange={(e) => handleFormActions("change", null, e)}
            value={formData ? formData?.description : ""}
            placeholder='Enter your task details.'>
            {formData?.description}
          </textarea>
        </div>

        <div className='todo-form-actions'>
          <Button onClick={(e) => handleFormActions('reset', null, e)}>Reset</Button>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  )
}
