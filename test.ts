let i = 0
i = 0
turtle.setMode(TurtleMode.PenDown)
turtle.setSpeed(500)
basic.forever(() => {
    i += 50
    turtle.setBrightness(i % 255)
    turtle.forward(1)
    if (Math.randomBoolean()) {
        turtle.turnLeft()
    } else {
        turtle.turnRight()
    }
})
