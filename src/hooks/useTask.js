import { useEffect, useState } from 'react'
import { createTask, getAllTasks, getTaskById, updateTaskById, deleteTaskById } from 'services/task'

const useTask = () => {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    const newTask = async (data) => {
        try {
            await createTask(data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const getTasks = async () => {
        try {
            const response = await getAllTasks()
            setTasks(response.data.data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const getTask = async (id) => {
        try {
            const response = await getTaskById(id)
            setTask(response.data.data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const updateTask = async (id, data) => {
        try {
            await updateTaskById(id, data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const deleteTask = async (id) => {
        try {
            await deleteTaskById(id)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    

    return { newTask, getTask, task, getTasks, tasks, updateTask, deleteTask, loading, error  }
}
 
export default useTask;