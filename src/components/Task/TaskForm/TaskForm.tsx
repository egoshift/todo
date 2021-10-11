import React, { useState } from 'react'
import { Form, Header } from 'semantic-ui-react'
import { useMutation, useQueryClient } from 'react-query'

import { form } from './TaskForm.module'
import { createTask } from 'queries/Task/createTask'

const { Field, Input } = Form

function TaskForm() {
  const [task, setTask] = useState('')
  const queryClient = useQueryClient()
  const { mutate } = useMutation(createTask, {
    onSuccess: data => {
      console.log(data)
    },
    onError: error => {
      console.log(error)
    },
    onSettled: () => queryClient.invalidateQueries('createTask')
  })

  function handleOnChange(event: React.FormEvent) {
    const { target } = event
    const value = (target as HTMLInputElement).value
    setTimeout(() => setTask(value), 100)
  }

  function handleOnEnter(event: React.KeyboardEvent) {
    const taskData = {
      owner: 1,
      task,
    }

    if (event.code === 'Enter') {
      mutate(taskData)
    }
    
  }

  return (
    <Form style={form}>
      <Header as='h1'>What do you want to achieve today?</Header>
      <Field>
        <Input fluid onKeyDown={handleOnEnter} onChange={handleOnChange} />
      </Field>
    </Form>
  )
}

export default TaskForm