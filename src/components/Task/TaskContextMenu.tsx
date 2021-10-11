import React from 'react'

import { Popup, Menu, Icon } from 'semantic-ui-react'

type Props = {
  trigger: React.ReactNode
}

const { Item: MenuItem } = Menu

const menuItem = {
  display: 'flex',
  flexDirection: 'reverse',
}

const icon = {
  marginRight: 10,
  marginLeft: 0,
}

function TaskContextMenu({ trigger }: Props): JSX.Element {
  return (
    <Popup flowing basic trigger={trigger} on='click' position='bottom right' style={{ padding: 0, border: 'unset' }}>
      <Menu vertical fluid>
        <MenuItem link style={menuItem}>
          <Icon name='edit' style={icon}></Icon>
          <span>Edit</span>
        </MenuItem>
        <MenuItem link style={menuItem}>
          <Icon name='trash' style={icon}></Icon>
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </Popup>
  )
}

export default TaskContextMenu