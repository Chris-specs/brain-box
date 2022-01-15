import apiIntance from "./config";

export const getAllTasks = () => apiIntance.get('/api/tasks');

export const getTaskById = (id) => apiIntance.get(`/api/tasks/${id}`);

export const createTask = (data) => apiIntance.post('/api/tasks', data)

export const updateTaskById = (id, data) => apiIntance.put(`/api/tasks/${id}`, data);

export const deleteTaskById = (id) => apiIntance.delete(`/api/tasks/${id}`);
