# Entry code for the creative coding week 04 project

Author: Uwe Hahne, Nov 2024

This code can be used to start the implementation.

## Files

[index.html](index.html) contains nothing but the connections to the stylesheet and the necessary scripts. There is no need to edit anything here unless you want some elements beside the canvas.

[script.js](script.js) contains an exemplary script that illustrates how to use the [p5.js framework](https://p5js.org/). In this file, the same scripts can be used as in the [p5.js online editor](https://editor.p5js.org/). The given example illustrates how to draw a circle with a trace at the position of the mouse pointer. You can change the color of the circle by touching pin 12 as known from week 03.

See the comments in the code for explanations and also check out the [p5.js tutorials](https://p5js.org/tutorials/).

Remind that the events from the ESP pins or for debugging by pressing the numbers according to this mapping:
 - 1 = 12
 - 2 = 13
 - 3 = 14
 - 4 = 27
 - 5 = 32
 - 6 = 33

If you press `1` the script calls the function `handleTouch12()` which calls the function `changeColor()` which changes the background. This is just an example to illustrate the mechanism and should be changed for your project.

[style.css](style.css) contains some styling that can be edited if needed. In line 8 the mouse pointer (aka cursor) is hidden over the p5.js canvas.

[p5.min.js](./libraries/p5.min.js) and [p5.sound.min.js](./libraries/p5.sound.min.js) are needed to use the p5.js functions and should not be changed. They have been created using the [p5.vscode extension](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode) that is recommended to be installed.

[dat.gui.min.js](./libraries/dat.gui.min.js) and [eia1_voyager_sdk.js](./libraries/eia1_voyager_sdk.js) are needed to receive the signals from the ESP and should not be changed.