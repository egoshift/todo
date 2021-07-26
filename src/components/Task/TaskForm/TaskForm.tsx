import React from 'react'
import { Form, Header } from 'semantic-ui-react'

import { form } from './TaskForm.module'

const { Field, Input } = Form

function TaskForm() {
  return (
    <Form style={form}>
      <Header as='h1'>What do you want to achieve today?</Header>
      <Field>
        <Input fluid />
      </Field>
    </Form>
  )
}

export default TaskForm