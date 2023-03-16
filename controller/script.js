const deviceName = 'Spectaicles'

const letter = document.querySelector('span');

/* Check if the browser supports the Bluetooth API */
function isWebBluetoothEnabled() {
  if (!navigator.bluetooth) {
    console.log('Web Bluetooth API is not available in this browser!')
    return false
  }

  return true
}

/* Only get the device info of the deviceName = Spectaicles */
function getDeviceInfo() {
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

function checkDevice() {
  if (isWebBluetoothEnabled()) {
    getDeviceInfo()
  }
}

document.addEventListener('keydown', keyCheck)

function keyCheck(event) {
  console.log(event.keyCode);
  if (event.keyCode === 65) {
    console.log('Clicked')
    letter.classList.add('active');
  }
}
