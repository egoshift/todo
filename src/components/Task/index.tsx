import React from 'react'
import { Grid } from 'semantic-ui-react'

const { Column, Row } = Grid

function Task(): JSX.Element {
  return (
    <Grid container>
      <Row columns={2}>
        <Column stretched>&nbsp;</Column>
        <Column stretched>
          <h1>Test for autosave</h1>
        </Column>
      </Row>
    </Grid>
  )
}

export default Task