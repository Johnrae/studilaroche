export function runCanvasAnimation(img: any) {
  console.log('started')

  let canvas = document.querySelector('canvas')
  let ctx = canvas?.getContext('2d')

  function mix(a: number, b: number, l: number) {
    return a + (b - a) * l
  }

  function upDown(v: number) {
    return Math.sin(v) * 0.5 + 0.5
  }

  function render(time: number) {
    if (!canvas || !ctx) return
    time *= 0.0001

    resize(canvas)

    let t1 = time
    let t2 = time * 0.37

    // for each line in the canvas
    for (let dstY = 0; dstY < canvas.height; ++dstY) {
      // v is value that goes 0 to 1 down the canvas
      let v = dstY / canvas.height

      // compute some amount to offset the src
      let off1 = Math.sin((v + 0.5) * mix(3, 12, upDown(t1))) * 300
      let off2 = Math.sin((v + 0.5) * mix(3, 12, upDown(t2))) * 300
      let off = off1 + off2

      // compute what line of the source image we want
      // NOTE: if off = 0 then it would just be stretching
      // the image down the canvas.
      let srcY = (dstY * img.height) / canvas.height + off

      // clamp srcY to be inside the image
      srcY = Math.max(0, Math.min(img.height - 1, srcY))

      // draw a single line from the src to the canvas
      ctx.drawImage(img, 0, srcY, img.width, 1, 0, dstY, canvas.width, 1)
    }

    requestAnimationFrame(render)
  }
  const id = requestAnimationFrame(render)

  function stop() {
    console.log('stopped')
    cancelAnimationFrame(id)
  }

  function resize(canvas: HTMLCanvasElement) {
    let width = canvas.clientWidth
    let height = canvas.clientHeight
    if (width != canvas.width || height != canvas.height) {
      canvas.width = width
      canvas.height = height
    }
  }

  return {
    stop,
  }
}
