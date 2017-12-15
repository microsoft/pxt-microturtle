# micro turtle [![Build Status](https://travis-ci.org/Microsoft/pxt-microturtle.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-microturtle)

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

### forward #turtle-forward

Moves the turtle forward by the given amount of steps. If the turtle goes out of the screen, it wraps around.

```sig
turtle.forward(1)
```

### back #turtle-back

Moves the turtle backward by the given amount of steps. If the turtle goes out of the screen, it wraps around.

```sig
turtle.back(1)
```

## turn left #turtle-turnleft

Turns the turtle in a clockwise fashion by 90 degrees.

```sig
turtle.turnLeft()
```


## turn right #turtle-turnright

Turns the turtle in a counter-clockwise fashion by 90 degrees.

```sig
turtle.turnRight()
```

## pen #turtle-pen

Sets the drawing mode of the turtle.

* ``up``, the turtle leaves no trail (this is the default)
* ``down``, the turtle paints the LEDs

```sig
turtle.pen(TurtlePenMode.Down)
```

## set position #turtle-setposition

Moves the turtle to a particular location

```sig
turtle.setPosition(1,1)
```

## home #turtle-home

Moves the turtle to the center of the screen, pointing up.

```sig
turtle.home()
```

## set speed #turtle-setspeed

Determines how many steps per second a trutle may take.

```sig
turtle.setSpeed(50)
```

## License

MIT

## Supported targets

* for PXT/microbit
* for PXT/calliope

(The metadata above is needed for package search.)
