import React, { Fragment, useEffect, useRef, useState } from 'react'

import './Galaxy.css'

const SPECK_AMOUNT = 1000

function Galaxy(): JSX.Element {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scale = window.devicePixelRatio

    // @ts-ignore: Object is possibly 'null'.
    const context = canvas.getContext('2d')
    // @ts-ignore: Object is possibly 'null'.
    canvas.width = window.innerWidth * scale
    // @ts-ignore: Object is possibly 'null'.
    canvas.height = window.innerHeight * scale

    context.fillStyle = '#fff'

    for (var i = 1; i <= SPECK_AMOUNT; i++) {
      // @ts-ignore: Object is possibly 'null'.
      // context.clearRect(0, 0, canvas.width, canvas.height);
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const radius = Math.random() * 2.5

      context.beginPath()
      context.arc(x, y, radius, 0, 2 * Math.PI)
      context.closePath()
      context.fill()
    }
    
  }, [])

  return (
    <Fragment>
      <canvas className='galaxy-canvas' ref={canvasRef}></canvas>
    </Fragment>
  )
}

export default Galaxy