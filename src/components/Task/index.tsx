import React from 'react'
import { Grid, Segment, Menu, Button, Container, Dimmer, Loader } from 'semantic-ui-react'
import { useQuery } from 'react-query'

import TaskForm from 'components/Task/TaskForm/TaskForm'
import { fetchTask } from 'queries/Task/fetchTask'
import { TaskType } from 'types/Task.type'
import TaskContextMenu  from './TaskContextMenu'

import { grid, menuButton, menuContainer, menuItem, segment } from './index.module'

const { Column, Row } = Grid
const { Item: MenuItem } = Menu

const MenuButton: JSX.Element = (
  <Button size='mini' icon="ellipsis vertical" style={menuButton}></Button>
)

function Task(): JSX.Element {
  const { isLoading, data, isFetching } = useQuery('tasks', fetchTask)

  return (
    <Grid columns={1} style={grid}>
      <Row centered stretched>
        <Column centered stretched mobile={15} tablet={13} computer={8} largeScreen={6} verticalAlign='middle'>
          <Segment style={segment}>
              <TaskForm />
          </Segment>
        </Column>
      </Row>
      <Row centered stretched style={{ maxHeight: '60%', overflow: 'hidden' }}>
        <Column centered stretched verticalAlign='middle' mobile={15} tablet={13} computer={8} largeScreen={6} style={{ maxHeight: '100%' }}>
          <Container fluid style={menuContainer}>
            <Dimmer active={isLoading || isFetching}>
              <Loader />
            </Dimmer>
            <Menu vertical fluid>
              {data?.map((item: TaskType) => {
                return (
                  <MenuItem link style={menuItem}>
                    <span>{item.task}</span>
                    <TaskContextMenu trigger={MenuButton} />
                  </MenuItem>
                )
              })}
            </Menu>
          </Container>
        </Column>
      </Row>
    </Grid>
  )
}

export default Task