// ! 1 navigator

// console.log('назву браузера', navigator.appCodeName);
// console.log('Версія браузера', navigator.appVersion);
// console.log('userAgent браузера', navigator.userAgent);
// console.log('мова браузера:', navigator.languages);

// console.log('кукі браузера:', navigator.cookieEnabled);
// console.log('Платформа браузера:', navigator.platform);

// console.log('Платформа браузера:', navigator.plugins);
// console.log('cpu', navigator.hardwareConcurrency);

// console.log('інтернет', navigator.onLine);
// console.log('Клавіатура', navigator.keyboard);
// console.log('інтернет', navigator.onLine);
// console.log('інтернет', navigator.onLine);
// console.log('дозволи', navigator.permissions.query({name: 'geolocation'}));

// ///////////////////////////////////////////////////////////////////////

// if('geolocation' in navigator){
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log('lat', position.coords.latitude);
//     console.log('lon', position.coords.longitude);
//   })
// }else{
//   console.log('geolocation is not supported');
// }

// /////////////////////////////////////////////////////////////////////////

// console.log('network type', navigator.connection.effectiveType);
// console.log('downlink speed mbps', navigator.connection.downlink);


// /////////////////////////////////////////////////////////////////////////

// const videoElement = document.getElementById('cameraFeed')

// if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
//   navigator.mediaDevices.getUserMedia({video: true})
//   .then((stream) =>{
//     videoElement.srcObject = stream;
//   })
//   .catch((err) =>{
//     console.error('Error media devices', err);
//   })
// }else{
//   console.error('getUserMedia is not supported in this browser.')
// }


//! screen

// console.log('Screen Width', screen.width);
// console.log('Screen Height', screen.height);


// console.log('Screen Width', screen.availWidth);
// console.log('Screen Height', screen.availHeight);


// console.log('Screen colorDepth', screen.colorDepth);
// console.log('Screen pixelDepth', screen.pixelDepth);

// console.log('Screen orintation', screen.orientation);
// console.log('Screen orintation:', screen.orientation.type);

//! history

// console.log('history orintation:', history.length);

// history.back() // 1 <=
// history.forward() // 1 =>
// history.go(-3)

// history.pushState({page: 'newPage'}, 'New Page', '/new-page')
// history.replaceState({page: 'newPage'}, 'New Page', '/new-page')


//! location

console.log('Current URL:', location.href);

console.log('Current protocol:', location.protocol);

console.log('Current host:', location.host);
console.log('Current hostname:', location.hostname);

console.log('Current port:', location.port);

console.log('Current search:', location.search);
console.log('Current hash:', location.hash);



location.assign('https://google.com')

