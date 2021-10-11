import { TaskType } from 'types/Task.type'
import axios from 'axios'

export const createTask = async (data: TaskType) => {
  const { data: response } = await axios.post('http://localhost:7000/task/new', data)
  return response.data
}