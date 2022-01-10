import { useEffect, useState } from 'react'
import { getAllTasks, getTaskById } from 'services/task'

const useTask = () => {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
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

    return { getTask, task, getTasks, tasks, loading, error  }
}
 
export default useTask;