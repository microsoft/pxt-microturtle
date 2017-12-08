enum TurtleMode {
    //% block="pen down"
    PenDown,
    //% block="pen up"
    PenUp,
    //% block="eraser"
    Eraser
}
/**
 * Turtle graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace turtle {
    let _x: number;
    let _y: number;
    let _direction: number; // 0 right, 1 down, 2 right, 3 top
    let _brightness: number;
    let _penMode: TurtleMode = TurtleMode.PenUp;
    let _img: Image;
    let _delay = 400;

    function init() {
        if (!_img) {
            led.setBrightness(255);
            led.setDisplayMode(DisplayMode.Greyscale);
            _x = 2;
            _y = 2;
            _direction = 0;
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
        for (let i = 0; i < steps; ++i) {
            // paint or erase
            switch (_penMode) {
                case TurtleMode.PenDown:
                    _img.setPixelBrightness(_x, _y, _brightness);
                    break;
                case TurtleMode.Eraser:
                    _img.setPixelBrightness(_x, _y, 0);
                    break;
            }
            // paint and update
            setPosition(_x + dx, _y + dy);
        }
    }

    function turn(quadrants: number): void {
        init();
        _direction = (_direction + quadrants) % 4; if (_direction < 0) _direction += 4;
        paint();
    }

    /**
     * Turns left by 90 degrees
     */
    //% blockId=turtleTurnLeft block="turn left"
    //% weight=89 blockGap=8
    export function turnLeft(): void {
        turn(1);
    }

    /**
     * Turns right by 90 degrees
     */
    //% blockId=turtleTurnRight block="turn right"
    //% weight=88
    export function turnRight(): void {
        turn(-1);
    }

    /**
     * Sets the turtle mode
     */
    //% blockGap=8
    //% blockId=turtleSetMode block="set mode %mode"
    export function setMode(mode: TurtleMode): void {
        init();
        _penMode = mode;
        paint();
    }

    /**
     * Sets the turtle position
     */
    //% blockGap=8
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    //% blockId=turtleSetPosition block="set position x: %x|y: %y"
    export function setPosition(x: number, y: number): void {
        init();
        _x = x % 5; if (_x < 0) _x += 4;
        _y = y % 5; if (_y < 0) _y += 4;
        paint();
    }

    /** 
     * Sets the brightness
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
     */
    //% blockGap=8
    //% blockId=turtleSetSpeed block="set speed %speed"
    //% stepsPerSecond.min=1 stepsPerSecond.max=50
    export function setSpeed(stepsPerSecond: number): void {
        if (stepsPerSecond <= 0) return;

        _delay = Math.max(1, Math.min(50, 1000 / stepsPerSecond));
    }
}
