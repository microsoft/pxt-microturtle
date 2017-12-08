# micro turtle

A LOGO-like turtle library for the micro:bit in MakeCode.

```blocks
turtle.setPosition(0, 0)
turtle.setSpeed(45)
basic.forever(() => {
    turtle.forward(4)
    turtle.turnLeft()
})
```

The turtle is a single pixel moving on the micro:bit screen.
It starts in the center at ``2,2``, moving horizontally to the right.

## Reference

### forward

Moves the turtle forward by the given amount of steps. If the turtle goes out of the screen, it wraps around.

```sig
turtle.forward(1)
```

## turn left

Turns the turtle in a clockwise fashion by 90 degrees.

```sig
turtle.turnLeft()
```


## turn right

Turns the turtle in a counter-clockwise fashion by 90 degrees.

```sig
turtle.turnRight()
```

## set mode

Sets the drawing mode of the turtle.

* ``pen up``, the turtle leaves no trail (this is the default)
* ``pen down``, the turtle paints the LEDs
* ``eraser``, the turtle turns off LEDs

```sig
turtle.setMode(TurtleMode.PenDown)
```

## License

MIT

## Supported targets

* for PXT/microbit

(The metadata above is needed for package search.)
