import axios from 'axios'

export default async function taskFetch() {
  const tasklist = await axios.get('http://localhost:7000/task/')

  return tasklist
}