import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'

function Wave(): JSX.Element {
  return (
    <Fragment>
      <Image className='bg-wave' src='/bg-wave.svg' />
      <Image className='bg-wave' src='/bg-wave2.svg' />
    </Fragment>
  )
}

export default Wave