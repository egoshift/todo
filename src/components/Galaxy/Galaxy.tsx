import React, { Fragment, useEffect, useRef, useState } from 'react'

import './Galaxy.css'

const SPECK_AMOUNT = 1000

function Galaxy(): JSX.Element {
  const canvasRef = useRef(null)
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

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

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)    
  })

  function updateWindowSize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <Fragment>
      <canvas className='galaxy-canvas' ref={canvasRef} style={{ width:'100%', height:'100%' }}></canvas>
    </Fragment>
  )
}

export default Galaxy