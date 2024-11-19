import toast from "react-hot-toast";
import { axios } from "./Axios";

export const fetchTodoAPI = async (setData, resMsg = 'Todo list loaded successfully.') => {
    try {
        const res = await axios.get("/todos");
        if (res.status === 200) {
            setData(res.data)
            toast.success(resMsg)
        } else {
            toast.error('Unable to load todos')
        }
    } catch (error) {
        toast.error('Something went wrong with add todo api')
        console.log('Error', error)
    }
}

export const addTodoAPI = async (payload, setData) => {
    try {
        if (payload.userId) {
            const res = await axios.post("/todos/add", JSON.stringify(payload));
            if (res.status === 200 || res.status === 201) {
                fetchTodoAPI(setData, 'Todo Task added successfully.'); // Will update the list
            } else {
                toast.error('Unable to load add task')
            }
        } else {
            toast.error('User Id not found.')
        }
    } catch (error) {
        toast.error('Something went wrong with add todo api')
        console.log('Error', error)
    }
}

export const updateTodoAPI = async (id, data, setData) => {
    try {
        const res = await axios.put(`/todos/${id}`, data);
        if (res.status === 200) {
            fetchTodoAPI(setData, 'Task updated successfully.'); // Will update the list
        } else {
            toast.error('Unable to load todos')
        }
    } catch (error) {
        toast.error('Something went wrong with add todo api')
        console.log('Error', error)
    }
}

export const deleteTodoAPI = async (id, setData) => {
    try {
        const res = await axios.delete(`/todos/${id}`);
        if (res.status === 200) {
            fetchTodoAPI(setData, 'Task deleted successfully.'); // Will update the list
        } else {
            toast.error('Unable to load todos')
        }
    } catch (error) {
        toast.error('Something went wrong with add todo api')
        console.log('Error', error)
    }
}

