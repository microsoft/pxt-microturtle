enum TurtlePenMode {
    //% block="down"
    Down,
    //% block="up"
    Up
}
/**
 * Turtle graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace turtle {
    let _x: number;
    let _y: number;
    let _direction: number; // 0 right, 1 down, 2 left, 3 top
    let _brightness: number;
    let _penMode: TurtlePenMode = TurtlePenMode.Up;
    let _img: Image;
    let _delay = 250;

    function init() {
        if (!_img) {
            led.setBrightness(255);
            led.setDisplayMode(DisplayMode.Greyscale);
            _x = 2;
            _y = 2;
            _direction = 3;
            _brightness = 128;
            _img = images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen();
        }
    }

    function paint() {
        // plot background
        _img.plotImage();
        // plot turtle
        led.plotBrightness(_x, _y, 255);
        // slow down
        basic.pause(_delay);
    }

    /**
     * Moves the turtle for the given amount of pixels
     * @param steps number of steps, eg: 1
     */
    //% blockId=turtleForward block="forward %steps|steps"
    //% weight=99 blockGap=8
    export function forward(steps: number): void {
        init();
        if (!steps) return;

        const sign = steps > 0 ? 1 : -1;
        const dx = _direction == 0 ? sign : _direction == 2 ? -sign : 0;
        const dy = _direction == 1 ? sign : _direction == 3 ? -sign : 0;
        const n = Math.abs(steps);
        for (let i = 0; i < n; ++i) {
            // paint if pen down
            if (_penMode == TurtlePenMode.Down)
                _img.setPixelBrightness(_x, _y, _brightness);
            // paint and update
            setPosition(_x + dx, _y + dy);
        }
    }

    /**
     * Moves back by the given number of steps
     * @param steps number of steps to move, eg: 1
     */
    //% blockId=turtleBack block="back %steps|steps"
    //% weight=98 blockGap=8
    export function back(steps: number): void {
        forward(-steps);
    }

    function turn(quadrants: number): void {
        init();
        _direction = (_direction + quadrants) % 4; if (_direction < 0) _direction += 4;
    }

    /**
     * Turns left by 90 degrees
     */
    //% blockId=turtleTurnLeft block="turn left"
    //% weight=89 blockGap=8
    export function turnLeft(): void {
        turn(-1);
    }

    /**
     * Turns right by 90 degrees
     */
    //% blockId=turtleTurnRight block="turn right"
    //% weight=88 blockGap=8
    export function turnRight(): void {
        turn(1);
    }


    /**
     * Sets the turtle position
     * @param x the horizontal position from 0 (left) to 4 (right), eg: 2
     * @param y the vertical position from 0 (top) to 4 (bottom), eg: 2
     */
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    //% blockId=turtleSetPosition block="set position x: %x|y: %y"
    //% weight=87
    export function setPosition(x: number, y: number): void {
        init();
        _x = x % 5; if (_x < 0) _x += 5;
        _y = y % 5; if (_y < 0) _y += 5;
        paint();
    }

    /**
     * Puts the pen down or up
     */
    //% blockGap=8
    //% blockId=turtlePen block="pen %mode"
    //% weight=65
    export function pen(mode: TurtlePenMode): void {
        init();
        _penMode = mode;
        paint();
    }

    /**
     * Moves the turtle to the center of the screen 
     */
    //% blockGap=8
    //% blockId=turtleHome block="home"
    export function home(): void {
        setPosition(2, 2);
        _direction = 3;
    }

    /** 
     * Sets the brightness
     * @param brightness the brightness of the trail left by the turtle, eg: 128
     */
    //% blockGap=8
    //% brightness.min=0 brightness.max=255
    //% blockId=turtleSetBrightness block="set brightess %brightness"
    export function setBrightness(brightness: number): void {
        init();
        _brightness = Math.max(0, Math.min(255, brightness));
        paint();
    }

    /**
     * Define the steps per second
     * @param stepsPerSecond steps per second, eg: 25
     */
    //% blockGap=8
    //% blockId=turtleSetSpeed block="set speed %speed"
    //% stepsPerSecond.min=1 stepsPerSecond.max=50
    //% weight=10
    export function setSpeed(stepsPerSecond: number): void {
        if (stepsPerSecond <= 0) return;

        _delay = Math.max(1, Math.min(50, Math.idiv(1000, stepsPerSecond)));
    }
}
