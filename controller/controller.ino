/*Program to use BLE Keyboard on ESP32 to send keyboard Events
 * ESP32 works as server - Browser as client
 * Program by: Danny de Vries
 * Dated on: 14-03-2023
 * Based on: https://github.com/T-vK/ESP32-BLE-Keyboard
 */

// Use the Nimble bluetooth driver which saves energy on the ESP 	
#define USE_NIMBLE

//Include Library BLE Keyboard Library
#include <BleKeyboard.h>

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

// Begin the inputs and call keyboard function
void setup() {
  Serial.begin(115200);
  Serial.println("Spectaicles control device running...");
  setInputs();
  bleKeyboard.begin();
}

// Loop over buttons and handle the push buttons
void loop() {
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
