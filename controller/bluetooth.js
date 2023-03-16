const deviceSupport = document.querySelector('.device');
const deviceEnabled = document.querySelector('.enabled');
const controllerEnabled = document.querySelector('.controller');
const connectButton = document.querySelector('.connect');
const deviceName = 'Spectaicles';

isWebBluetoothEnabled();
isDeviceBluetoothEnabled();
isControllerBluetoothEnabled();

/* Check if the browser supports Bluetooth */
function isWebBluetoothEnabled() {
  if (navigator.bluetooth) {
    console.log('The Web Bluetooth API is available!')
    checkBluetooth();
    return true;
  } else {
    console.log('The Web Bluetooth API is not available!')
    return false;
  }
}

/* Check if the browser has access to Bluetooth of the device */
function isDeviceBluetoothEnabled() {
  navigator.bluetooth.getAvailability().then((available) => {
    if (available) {
      console.log("This device has bluetooth enabled.");
      checkEnabled();
    } else {
      console.log("This device has bluetooth disabled.");
    }
  });
}

function isControllerBluetoothEnabled() {
  let options = {
    "filters": [
      { "name": deviceName }
    ]
  }

  console.log('Requesting Bluetooth Device...')
  navigator.bluetooth.requestDevice(options).then(device => {
    console.log('> Name: ' + device.name)
  }).catch(error => {
    console.log('Argh! ' + error)
  })
}


/* Render the Green checkmark for device support */
function checkBluetooth() {
  deviceSupport.textContent = '✅'
}

/* Render the Green checkmark for bluetooth enabled */
function checkEnabled() {
  deviceEnabled.textContent = '✅'
}

/* Render the Green checkmark for device connected */
function checkController() {
  controllerEnabled.textContent = '✅'
}