# spectaicles
> Github repository for the UvA's information studies course "Societal Complexity and Designing with Data".

![logo](static/img/logo.jfif)

## Description

Spectaicles Prototype, Progressive Web App for visual impairment tests. Uses Node.js with Express and EJS as a templating engine. Includes code for the prototype of the control device which runs on a ESP32 microcontroller with the BLE Keyboard library. Additionally the controller folder includes the .step and Fusion 360 files (3D files) of the CADed enclosure for the controller.

## Install

To run this project locally on your machine.

### Prerequisites

For the web application; make sure you have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine.

For the control device; install the Arduino IDE with the [ESP32](https://github.com/espressif/arduino-esp32) and [BLEKeyboard](https://github.com/T-vK/ESP32-BLE-Keyboard) library.

### Running

To run the web application open the command line (terminal) and enter:

```
# start a development server in watch mode
npm run dev
```

To upload the sketch of the microcontroller:

1. Open the controller.ino in the Arduino IDE
2. Upload the sketch to the microcontroller
3. Add a power source to controller
4. Connect to it via the bluetooth settings of your device

### Live version

A deployed version of the web application is continously deployed on [Render](https://www.render.com).

## Project structure

```
├── controller            # Arduino code, 3D files of the controller
├── python                # Python code for distance measurement
├── static                # Fonts, images, client-side javascript etc.
├── views                 # Pages and partials of the web interface
├── server.js             # Entry point to start the server
└── README.md
```