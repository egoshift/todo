import React, { Fragment } from 'react'

import Task from 'components/Task'
import Wave from 'components/Wave'
import Galaxy from 'components/Galaxy/Galaxy'

import './index.css'

function App() {
  return (
    <Fragment>
      <Wave />
      <Galaxy />
      <Task />
    </Fragment>
  )
}

export default App
