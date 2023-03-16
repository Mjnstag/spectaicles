/* Program to use BLE Keyboard on ESP32 to send keyboard Events
 * ESP32 works as server - Browser as client
 * Program by: Danny de Vries
 * Dated on: 14-03-2023
 * Based on: https://github.com/T-vK/ESP32-BLE-Keyboard
 */

// Use the Nimble bluetooth driver which saves energy on the ESP 	
#define USE_NIMBLE

//Include Library BLE Keyboard Library
#include <BleKeyboard.h>

//Include Neopixel Library
#include <NeoPixelBus.h>

//Include Bluetooth serial
#include "BluetoothSerial.h"

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 8

// Which pin on the ESP32 is connected to the NeoPixels?
#define LED 26

// Bluetooth Serial object
BluetoothSerial SerialBT;

// Set the NeoPixel bus
NeoPixelBus<NeoGrbFeature, Neo800KbpsMethod> strip(NUMPIXELS, LED);

uint8_t red = 0;
uint8_t green = 0;
uint8_t blue = 0;

int j = 0;

// Call the BLE Keyboard function
BleKeyboard bleKeyboard("Spectaicles", "Spectaicles", 100);

// Turn off the notification flag
bool connectNotificationSent = false;

// GPIO pins on the ESP32 (make sure they match)
#define GP_A 21
#define GP_B 22

// Set the pins and the Keystates
bool keyStates[2] = {false};
int keyPins[2] = {GP_A, GP_B};
uint8_t keyCodes[2] = {'a', 'b'};

void led_off() {
  Serial.println("Not connected! Make lights red.");
  for (int i = 0; i < NUMPIXELS; i++) {
    red = 250;
    green = 0;
    blue = 0;
    strip.SetPixelColor((i + j) % NUMPIXELS, RgbColor(red, green, blue));
  }
  delay(1000);
  strip.Show();
}

void led_on() {
  Serial.println("Connected! Make lights green.");
  for (int i = 0; i < NUMPIXELS; i++) {
    red = 0;
    green = 250;
    blue = 0;
    strip.SetPixelColor((i + j) % NUMPIXELS, RgbColor(red, green, blue));
  }
  delay(1000);
  strip.Show();
}

// Begin the inputs and call keyboard function
void setup() {
  Serial.begin(115200);
  Serial.println("Spectaicles control device running...");
  setInputs();
  bleKeyboard.begin();

    // Begin bluetooth serial
  SerialBT.begin("Spectaicles");

  // Define led Strip
  strip.Begin();
  strip.Show();
}

// Loop over buttons and handle the push buttons
void loop() {

  if (bleKeyboard.isConnected()) {
    led_on();
  }
  else {
    led_off();
  }

  int counter;
  if(bleKeyboard.isConnected()) {
    if (!connectNotificationSent) {
      Serial.println("Spectaicles connected");
      connectNotificationSent = true;
    }
    for(counter = 0; counter < 2; counter ++){
      handleButton(counter);
    }
  }
}

// Set the internal pullup resistors
void setInputs() {
  pinMode(GP_A, INPUT_PULLUP);
  pinMode(GP_B, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
}

// Handle the button press and have BLE keyboard show the keycode
void handleButton(int keyIndex){
  // handle the button press
  if (!digitalRead(keyPins[keyIndex])){
    // button pressed
    if (!keyStates[keyIndex]){
      // key not currently pressed
      keyStates[keyIndex] = true;
      bleKeyboard.press(keyCodes[keyIndex]);
    }
  }
  else {
    // button not pressed
    if (keyStates[keyIndex]){
      // key currently pressed
      keyStates[keyIndex] = false;
      bleKeyboard.release(keyCodes[keyIndex]);
    }
  }
}
