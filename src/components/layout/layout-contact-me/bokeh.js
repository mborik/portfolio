const CONFIG = {
  count: 128,
  ttl: 6000,
  xmax: 2,
  ymax: 1,
  rmax: 200,
}

function Blob(ctx, w, h) {
  const grayscales = [88, 99, 77, 66].map((v) => [
    `rgba(${v},${v},${v},0)`,
    `rgba(${v},${v},${v},1)`,
  ])

  this.reset = function () {
    this.x = w * Math.random()
    this.y = h * Math.random()
    this.r = (CONFIG.rmax - 1) * Math.random() + 16
    this.dx = Math.random() * CONFIG.xmax * (Math.random() < 0.5 ? -1 : 1)
    this.dy = Math.random() * CONFIG.ymax * (Math.random() < 0.5 ? -1 : 1)
    this.hl = CONFIG.ttl * (this.r / CONFIG.rmax)
    this.rt = Math.random() * this.hl
    this.srt = Math.random() + 1
    this.driftStep = (Math.random() * 0.2 + 0.4).toPrecision(3)
    this.xdrift = Math.random() * (Math.random() < 0.5 ? -1 : 1)
    this.ydrift = Math.random() * (Math.random() < 0.5 ? -1 : 1)
    this.opacityFill = "." + Math.floor(Math.random() * 5) + 1
    this.currentColor = Math.floor(Math.random() * grayscales.length)
  }

  this.tick = function () {
    this.rt += this.srt

    if (this.rt <= 0 || this.rt >= this.hl) {
      this.srt = this.srt * -1
    } else if (this.rt >= this.hl) {
      this.reset()
    }

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true)
    ctx.globalAlpha = this.opacityFill
    var newo = 1 - this.rt / this.hl
    var cr = this.r * newo

    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      Math.max(16, cr)
    )
    gradient.addColorStop(0.0, grayscales[this.currentColor][1])
    gradient.addColorStop(0.5, grayscales[this.currentColor][1])
    gradient.addColorStop(1.0, grayscales[this.currentColor][0])

    ctx.fillStyle = gradient
    ctx.fill()
    ctx.closePath()

    this.x += (this.rt / this.hl) * this.dx
    this.y += (this.rt / this.hl) * this.dy
    if ((this.rt % 1).toPrecision(3) === this.stop) {
      if (this.xdrift > 0 && this.dx > 0) {
        this.dx -= this.xdrift / 2
      } else {
        this.dx += this.xdrift / 2
      }
      if (this.ydrift > 0 && this.dy > 0) {
        this.dy -= this.ydrift / 2
      } else {
        this.dy += this.ydrift / 2
      }
      this.x += this.xdrift
      this.y += this.ydrift
    }
    if (this.x > w || this.x < 0) {
      this.dx *= -1
    }
    if (this.y > h || this.y < 0) {
      this.dy *= -1
    }
  }

  this.reset()
}

const bokeh = (canvasRef) => () => {
  if (!canvasRef.current) return
  const canvas = canvasRef.current
  const w = (canvas.width = canvas.clientWidth)
  const h = (canvas.height = canvas.clientHeight)
  const ctx = canvas.getContext("2d")
  const pxs = [...Array(CONFIG.count)].map(() => new Blob(ctx, w, h))

  let timerHandle
  const draw = () => {
    ctx.clearRect(0, 0, w, h)
    pxs.forEach((px) => px.tick())
    timerHandle = requestAnimationFrame(draw)
  }

  timerHandle = requestAnimationFrame(draw)
  return () => cancelAnimationFrame(timerHandle)
}

export default bokeh
