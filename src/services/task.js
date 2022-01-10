import apiIntance from "./config";

export const getAllTasks = () => apiIntance.get('/api/tasks');

export const getTaskById = (id) => apiIntance.get(`/api/tasks/${id}`);