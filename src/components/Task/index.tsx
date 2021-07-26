import React from 'react'
import { Grid } from 'semantic-ui-react'

import TaskForm from 'components/Task/TaskForm/TaskForm'

import { grid } from './index.module'

const { Column, Row } = Grid

function Task(): JSX.Element {
  return (
    <Grid container style={grid}>
      <Row columns={2}>
        <Column stretched></Column>
        <Column stretched verticalAlign='middle'>
          <TaskForm />
        </Column>
      </Row>
    </Grid>
  )
}

export default Task