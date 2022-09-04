// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: 'AIzaSyDZxHV5irq4_5dPXTQ4fswVi6pQEn1vxfE',
    authDomain: 'audio-visual-turno.firebaseapp.com',
    projectId: 'audio-visual-turno',
    storageBucket: 'audio-visual-turno.appspot.com',
    messagingSenderId: '315198371590',
    appId: '1:315198371590:web:a8b25dd9a5950c082fd087',
    measurementId: 'G-CR90HP69FN',
  },
  // mapboxToken:
  //   'pk.eyJ1IjoibGVhbmRyb2giLCJhIjoiY2w2d2hvbmc5MmVudzNjb2F1enV0b2dxcSJ9.LqhacSLU1ySKf5t_nSRQqw',

  mapBox: {
    zoom: 14,
    minZoom: 1,
    maxZoom: 19,
    center: [-76.6297183, 7.8843198],
    api: 'https://api.mapbox.com/geocoding/v5',
    style: 'mapbox://styles/mapbox/streets-v11',
    apiKey:
      'pk.eyJ1IjoibGVhbmRyb2giLCJhIjoiY2tzdXR5YmtvMWl5MDMwcGd2NG1zamZsYyJ9.ZzrSK2K8yh1IlWbybdZ8HQ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
