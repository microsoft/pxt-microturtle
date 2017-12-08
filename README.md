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
It starts in the center at ``2,2``, pointing up.

## Reference

### forward #forward

Moves the turtle forward by the given amount of steps. If the turtle goes out of the screen, it wraps around.

```sig
turtle.forward(1)
```

### back #back

Moves the turtle backward by the given amount of steps. If the turtle goes out of the screen, it wraps around.

```sig
turtle.back(1)
```

## turn left #turnLeft

Turns the turtle in a clockwise fashion by 90 degrees.

```sig
turtle.turnLeft()
```


## turn right #turnRight

Turns the turtle in a counter-clockwise fashion by 90 degrees.

```sig
turtle.turnRight()
```

## pen #pen

Sets the drawing mode of the turtle.

* ``up``, the turtle leaves no trail (this is the default)
* ``down``, the turtle paints the LEDs

```sig
turtle.pen(TurtlePenMode.Down)
```

## set position ##setPosition

Moves the turtle to a particular location

```sig
turtle.setLocation(1,1)
```

## home #home

Moves the turtle to the center of the screen, pointing up.

```sig
turtle.home()
```

## set speed #setSpeed

Determines how many steps per second a trutle may take.

```sig
turtle.setSpeed(50)
```

## License

MIT

## Supported targets

* for PXT/microbit

(The metadata above is needed for package search.)
